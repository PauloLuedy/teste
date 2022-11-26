import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const ValdateToken = (token) => {
  const { decoded, error } = jwt.verify(token, process.env.SECRET);
  return { decoded, error };
};
