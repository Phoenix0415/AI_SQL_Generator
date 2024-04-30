import express from 'express';
import cors from "cors";

const app = express();

app.use(cors());

const port = process.env.PORT || 3005; // default port to listen

app.get("/", (req, res) => {
    res.send("Hello world from our API!");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
