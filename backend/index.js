import app from "./app/app.js";
import { PORT } from "./app/config.js";

// const port = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
