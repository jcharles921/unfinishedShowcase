// models/User.ts
import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
    },
    firstName:{
      type: String,
      required: [true, "Please provide a first name"],
    },
    lastName:{
      type: String,
      required: [true, "Please provide a last name"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    role: {
      type: String,
      enum: ["admin", "client"],
      default: "client",
    },
  },

  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
