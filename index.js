import app from "./app.js";
import "./models/associations.js";
import { sequelize } from "./database/database.js";

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

await main();
