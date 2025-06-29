import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"

export async function getUserIdFromRequest(request: NextRequest): Promise<mongoose.Types.ObjectId | null> {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "")

    if (!token) {
      // For demo purposes, use a default user ID if no token
      if (process.env.NODE_ENV === "development") {
        const User = mongoose.models.User
        const demoUser = await User.findOne({ email: "demo@financeai.com" })
        if (demoUser) {
          return demoUser._id
        }
      }
      return null
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "demo-secret") as { userId: string }
    return new mongoose.Types.ObjectId(decoded.userId)
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}
