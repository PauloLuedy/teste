import USER from "../model/userSchema";

export const userRepository = async (body) => {
  try {
    const result = await USER.findOne({email: body.email})
    return result;
  } catch (error) {
    return undefined
  }
};
