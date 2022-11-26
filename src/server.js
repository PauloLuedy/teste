import app from './app';
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT ;

app.listen(port, () => console.log("Rodando na porta", `http:localhost:${port}`));
