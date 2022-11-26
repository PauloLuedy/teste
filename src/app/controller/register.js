import { registerRepository } from "../../core/repositories";

export const register = async ({ body }, res) => {
  try {
    const result = await registerRepository(body);
    res.json(result);
  } catch (error) {
    throw error;
  }
};
