import { MongoClient } from 'mongodb';

import {config} from 'dotenv';

config({path:'../.env'});

const uri:string = process.env.MONGO_CONNECTION_STRING
const client: MongoClient = new MongoClient(uri);

export async function getAllBeers() {
  try {
    await client.connect()
    const database = client.db('mbot_base');
    const tapsCollection = database.collection('taps_prepared');
    const projection = { _id: 0, img_id: 0 };
    const taps = await tapsCollection.find({}, {projection}).toArray();
    return taps;
  } finally {
    await client.close();
  }
}
