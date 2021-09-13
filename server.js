//todo lo que no tiene que ver con express, el setup de la aplicacion
const dotenv = require('dotenv');
const mogoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log('uncaughtException!!');
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mogoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection!!');
  console.log(err.name);
  server.close(() => {
    process.exit(1);
  });
});
