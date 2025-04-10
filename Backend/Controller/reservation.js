import ErrorHandler from "../Error/error";
import { Reservation } from "../Models/reservationSchema";

export const sendReservation= async (req,res,next)=>{
    const {fristName,lastName,email,phone,time,date}=req.body;
    if(!fristName || !lastName||!email||!phone||!time||!date){
        return next(new ErrorHandler("Please full fill reservation form",400));
    }
    try {
        await Reservation.create(fristName,lastName,email,phone,time,date)
        res.status(200).json({
            success:true,
            message:"Reservation send successfully!"
        });
    } catch (error) {
        if(error.name==="validationError"){
            const validationError=Object.values()
        }
    }
}