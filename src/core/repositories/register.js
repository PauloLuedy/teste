import USER from "../model/userSchema";

export const registerRepository = async ({ name, email, password }) => {
  console.log(name);
  const user = new USER({ name, email, password });
  const result = await user.save({ name, email, password });
  return result;
};
