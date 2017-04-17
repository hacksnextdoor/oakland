import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export default (config, callback) => {
  const url = config.db.url;
  if (url === '') console.log('Missing db url!!! Please enter url in config.json');
  mongoose.connect(url, (err) => {
    if (err) callback(err);
  });
  callback(mongoose);
};
