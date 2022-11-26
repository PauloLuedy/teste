import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config();

export const Bcrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash  = await bcrypt.hash(password, salt);
  return hash 
};
