import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://financeai.te0cvhr.mongodb.net/"
const MONGODB_USER = process.env.MONGODB_USER || "finance"
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || ""

if (!MONGODB_PASSWORD) {
  throw new Error("Please define the MONGODB_PASSWORD environment variable")
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      user: MONGODB_USER,
      pass: MONGODB_PASSWORD,
    }

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB")
        return mongoose
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error)
        throw error
      })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectToDatabase
