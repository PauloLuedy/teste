import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const generateToken = (_id, email) => {
  return jwt.sign({ user_id: _id, email }, process.env.SECRET, {
    expiresIn: "2h",
  });
};
