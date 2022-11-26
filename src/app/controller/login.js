import { userByIdRepository } from "../../core/repositories";

export const login = async ({ params }, res) => {
  try {
    const getUser = await userByIdRepository(params);

    if (getUser == {} || getUser == undefined) {
      res.json("Login invalido");
    }

    res.json(getUser);
  } catch (error) {
    throw error;
  }
};
