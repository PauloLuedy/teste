import { ValdateToken } from "../../utils/validade_token";

export const Auth = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    
    if (!token)
      return res.status(401)
        .json({ auth: false, message: "No token provided." });
    if (err)
      return res.status(500)
        .json({ auth: false, message: "Failed to authenticate token." });

    const { decoded, error } = ValdateToken(token);
    req.userId = decoded.id || error;

    next();
  } catch (error) {
    req.error = error;
    next();
  }
};
