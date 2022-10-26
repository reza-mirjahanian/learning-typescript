import {
  expect,
} from 'chai';
import { ULTIMATE_AI } from '../../src/constants';

import findReply from '../../src/services/FindReply';
import DB from '../../src/models';
import {find, removeAll} from '../../src/repository/reply';
import {insertIntentsData} from "../../src/utils/fillDbWithReplies";

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

suite('Testing findReply', () => {
  suiteSetup(async () => {
    await DB.connect();
    await removeAll();
  });

  suiteTeardown(async () => {
    await DB.disconnect();
  });
  test('should findBestIntent works correctly', () => {
    const intent1 = findReply.findBestIntent(mockHighIntents);
    expect(intent1!.name).to.be.equal('Greeting');

    const intent2 = findReply.findBestIntent(mockLowIntents);
    expect(intent2).to.be.null;

    const intent3 = findReply.findBestIntent([]);
    expect(intent3).to.be.null;
  });

  test('should findBestReply works correctly', async () => {
    await insertIntentsData();
    const defaultReply1 = await findReply.findBestReply('');
    expect(defaultReply1.id).to.be.equal('');
    expect(defaultReply1.isDefault).to.be.equal(true);
    expect(defaultReply1.text).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_ANSWER);
    expect(defaultReply1!.intentName).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_NAME);

    const defaultReply2 = await findReply.findBestReply('Blah! Blah!');
    expect(defaultReply2.id).to.be.equal('');
    expect(defaultReply2.isDefault).to.be.equal(true);
    expect(defaultReply2.text).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_ANSWER);
    expect(defaultReply2!.intentName).to.be.equal(ULTIMATE_AI.INTENT_DEFAULT_NAME);

    const reply3 = await findReply.findBestReply('Greeting');
    const intentName = 'Greeting';
    const greetingData = await find(intentName);
    expect(reply3.id).to.be.equal(greetingData!.id);
    expect(reply3.isDefault).to.be.equal(false);
    expect(reply3.text).to.be.equal(greetingData!.text);
    expect(reply3.description).to.be.equal(greetingData!.description);
    expect(reply3!.intentName).to.be.equal(intentName);
  });
});
