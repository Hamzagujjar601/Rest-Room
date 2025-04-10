import mongoose from "mongoose";


export const dbconnection = () => {
    mongoose.connect(process.env.Mongo_URL, {
        dbName: "RESTAURANT"
    }).then(() => {
        console.log("Server connected to database successfully!");
    }).catch(err => {
        console.log(err);
    })
}