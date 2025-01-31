import { app } from "./app.js";
import connectDb from "./db/database.js";

connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT} `);
});
