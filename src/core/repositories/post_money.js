import MONEY from "../model/moneySchema";

export const createMoneyRepository = async ({ type, value }) => {
  const money = new MONEY({ type, value });
  const result = await money.save({ type, value });
  return result;
};
