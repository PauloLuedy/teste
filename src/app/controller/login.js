import { userRepository } from "../../core/repositories";
import { valdatePassword } from "../../utils/validate_password";
import { generateToken } from "../../utils/generate_token";

export const login = async ({ body }, res) => {
  try {
    const { _id, email, password } = await userRepository(body);

    const validPassword = await valdatePassword(body, password);

    if (validPassword) {
      res.status(400).json({ error: "Invalid Password" });
    }
    if (email == {} || email == undefined) {
      res.status(500).json({ message: "Login inválido!" });
    }
    const token = await generateToken(_id, email);
    return res.status(201).json({ token });
  } catch (error) {
    throw error;
  }
};
