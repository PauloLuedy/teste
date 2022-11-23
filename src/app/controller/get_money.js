import { getMoneyRepository } from "../../core/repositories";

export const getMoney = async (_, res) => {
  try {
    const get = await getMoneyRepository();
    res.json(get);
  } catch (error) {
    throw error;
  }
};
