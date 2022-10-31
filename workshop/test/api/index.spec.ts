import {
  expect,
} from 'chai';

import got from 'got';
import nock from 'nock';

import {
  SERVER_PORT,
  SERVER_URL, ULTIMATE_AI,
} from '../../src/constants';
import { ReplyResponse } from '../../src/types';
import DB from '../../src/models';
import { removeAll, find } from '../../src/repository/reply';
import { insertIntentsData } from '../../src/utils/fillDbWithReplies';

require('../../src/api');

const SERVER = `${SERVER_URL}:${SERVER_PORT}`;
const mockHighIntents = [
  {
    confidence: 1.6867156205080391e-7,
    name: 'Goodbye',
  },
  {
    confidence: 5.5167763690633365e-8,
    name: 'Affirmative',
  },
  {
    confidence: 0.9999349117279053,
    name: 'Greeting',
  },
  {
    confidence: 0.00006423625018214807,
    name: 'Means or need to contact ',
  },
  {
    confidence: 6.251264039747184e-7,
    name: 'Thank you',
  },

];
const mockLowIntents = [
  {
    confidence: 0.3563207983970642,
    name: 'Means or need to contact ',
  },
  {
    confidence: 0.35260462760925293,
    name: 'I want to speak with a human',
  },
  {
    confidence: 0.1537749022245407,
    name: 'Greeting',
  },
  {
    confidence: 0.059188343584537506,
    name: 'Login problems',
  },
  {
    confidence: 0.037355393171310425,
    name: 'Are you a bot?',
  },
];

suite('Testing Express API routes', () => {
  suiteSetup(async () => {
    await DB.connect();
    await removeAll();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });

  suite('Reply Routes ', () => {
    test('should Post /api/reply return reply correctly when intent not found', async () => {
      await insertIntentsData();
      nock(ULTIMATE_AI.CHAT_API_URL)
        .post('/intents')
        .reply(200, { intents: mockLowIntents });
      const botId = '5f74865056d7bb000fcd39ff';
      const message = 'Hello';
      const response: ReplyResponse = await got
        .post(`${SERVER}/api/reply`, {
          json: {
            botId,
            message,
          },
        })
        .json();

      expect(response.botId).to.be.equal(botId);
      expect(response.message).to.be.equal(message);
      expect(response.reply.id).to.be.equal('');
      expect(response.reply.text).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_ANSWER);
      expect(response.reply.isDefault).to.be.equal(true);
      expect(response.reply.description).to.be.equal("didn't find anything, return a default reply message");
      expect(response.reply.intentName).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_NAME);

      nock.cleanAll();
    });

    test('should Post /api/reply return reply correctly when intent found', async () => {
      await insertIntentsData();
      const intentName = 'Greeting';
      const greetingData = await find(intentName);

      nock(ULTIMATE_AI.CHAT_API_URL)
        .post('/intents')
        .reply(200, { intents: mockHighIntents });
      const botId = '5f74865056d7bb000fcd39ff';
      const message = 'Hello';
      const response: ReplyResponse = await got
        .post(`${SERVER}/api/reply`, {
          json: {
            botId,
            message,
          },
        })
        .json();

      expect(response.botId).to.be.equal(botId);
      expect(response.message).to.be.equal(message);
      expect(response.reply.id).to.be.equal(greetingData!.id);
      expect(response.reply.text).to.be.equal(greetingData!.text);
      expect(response.reply.isDefault).to.be.equal(false);
      expect(response.reply.description).to.be.equal(greetingData!.description);
      expect(response.reply.intentName).to.be.equal(intentName);

      nock.cleanAll();
    });
  });
});
