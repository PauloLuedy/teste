import MONEY from "../model/moneySchema";

export const getMoneyRepository = async () => {
  try {
    const money = await MONEY.find();
    return money;
  } catch (error) {
    throw error;
  }
};
