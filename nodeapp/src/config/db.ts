import {createConnections} from 'typeorm';
const settings = require('./connectionOptions');

export async function db() {
  try {
    await createConnections(settings);
  } catch (err) {
    console.log(err);
  }
}
