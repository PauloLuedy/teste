import USER from "../model/userSchema";

export const userByIdRepository = async ({id}) => {
  try {
    console.log(id);
    const result = await USER.findById(id);
    return result;
  } catch (error) {
    return undefined
  }
};
