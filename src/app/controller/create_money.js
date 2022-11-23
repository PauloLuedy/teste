import { createMoneyRepository } from "../../core/repositories";

export const createMoney = async ({ body }, res) => {
  try {
    const create = await createMoneyRepository(body);
    res.json(create);
  } catch (error) {
    throw error;
  }
};
