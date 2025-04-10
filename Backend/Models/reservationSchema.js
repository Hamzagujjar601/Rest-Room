import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    lirstName:{
        type:String,
        require:true,
        minLength:[3,"Minimum Length Must be 3 Characters!"],
        maxLength:[30,"Maximum Length must be 30 Characters!"],
    },
    lastName:{
        type:String,
        require:true,
        minLength:[3,"Minimum Length Must be 3 Characters!"],
        maxLength:[30,"Maximum Length must be 30 Characters!"],
    },
    email:{
        type:String,
        require:true,
        validate:[validator.isEmail,"Provide a valid Email"],
    },
    phone:{
        tpye:String,
        require:true,
        minLength:[11,"Minimum Length Of Phone is 11!"],
        maxLength:[11,"Maximum Length Of Phone is 11!"],
    },
    time:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    }
});

export const Reservation=mongoose.model("Reservation",reservationSchema);