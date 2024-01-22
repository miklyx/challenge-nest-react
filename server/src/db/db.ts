import { MongoClient } from 'mongodb';

import {config} from 'dotenv';

config({path:'../.env'});

const uri:string = process.env.MONGO_CONNECTION_STRING
//const uri: string = "mongodb+srv://polyteia:polyteia@mbottest.z04wi.gcp.mongodb.net/?retryWrites=true&w=majority"
const client: MongoClient = new MongoClient(uri);

export async function getAllBeers() {
  try {
    await client.connect()
    const database = client.db('mbot_base');
    const tapsCollection = database.collection('taps_prepared');
    const taps = await tapsCollection.find({}).toArray();
    return taps;
  } finally {
    await client.close();
  }
}
