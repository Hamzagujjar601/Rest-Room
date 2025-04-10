import app from "./app.js"

const Port = process.env.PORT;

app.listen(Port, () => {
    console.log(`server is running on Port =${Port}`);
})