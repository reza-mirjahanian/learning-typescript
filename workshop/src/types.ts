

export type Intent = { confidence: number, name: string };

export type Reply = {
  id: string // reply db id
  text: string // finial reply text (answer)
  isDefault: boolean //  didn't find anything, return a default reply message
  description: string // some metadata!
  intentName: string // comes from ultimate.ai API
};

export type ReplyResponse = { botId: string, message: string, reply:Reply };
