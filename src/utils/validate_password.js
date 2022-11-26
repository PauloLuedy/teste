import bcrypt from 'bcrypt'
export const valdatePassword = (body, password) => {
  const validPassword =  bcrypt.compare(body.password, password);
  return validPassword
};
