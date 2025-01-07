import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const url = `mongodb+srv://admin:admin@cluster0.qib60.mongodb.net/master?retryWrites=true&w=majority&appName=Cluster0`

const connect = async () => {
  return await mongoose.connect(url)
}

const disconnect = async () => {
  return await mongoose.disconnect()
}

const database = {
  connect,
  disconnect
}

export default database;
