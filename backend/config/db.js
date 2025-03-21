import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivamFoodApp:aNUDupxOXeo7tAez@cluster0.lehbb.mongodb.net/shivamFoodApp').then(()=>console.log("DataBase Connected"));
}


// npm install --global --production --vs2015 windows-build-tools
