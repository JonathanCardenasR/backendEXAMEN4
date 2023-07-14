import app from "./app.js";

const PORT = 80;

const main = async () => {
  try {
    
    app.listen(PORT, () => {
      console.log(`Server on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

await main();
