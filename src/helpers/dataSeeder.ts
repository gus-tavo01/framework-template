import mongoose from 'mongoose';
import { dbKeys } from '../config/dbKeys';
// import { speciesSeeder } from './dummyChildsSeeder';
import { subjectsSeeder } from './dummiesSeeder';

// set up mongoose and turn on the connection
mongoose
  .connect(dbKeys.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(async () => {
    console.log('Connecting to mongodb...');

    //const dummyChildren = await speciesSeeder();
    subjectsSeeder();
  })
  .catch((err) => {
    console.log('Error while connecting to mongodb');
    console.log(err);
  })
  .finally(() => {
    console.log('Finished...');
    console.log('Press ctrl^c to continue...');
  });
