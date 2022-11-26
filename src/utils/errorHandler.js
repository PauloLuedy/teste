export const ErrorHandler = (res,error) => {
  return res.status(500).send(error);
};
