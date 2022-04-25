require('dotenv').config()

const Port = process.env.NODE_ENV === 'test' ? 4001 : (process.env.PORT || 4000);

const MongodbUrl =  process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL_PRODUCTION : (process.env.MONGODB_URL_DEVELOPMENT || 'mongodb://localhost/medbuddy')

module.exports = {
  Port: Port,
  MongodbUrl: "mongodb+srv://anchu:anchu123@cluster0.fb3fw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}