import USER from "../model/userSchema";
import { Bcrypt } from "../../utils/bcrypt";

export const registerRepository = async ({ name, email, password }) => {
  const bcrypt = await Bcrypt(password);
  const user = new USER({ name, email, password: bcrypt });
  const result = await user.save({ name, email, password: bcrypt });
  return result;
};
