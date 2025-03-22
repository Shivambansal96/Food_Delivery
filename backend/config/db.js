import mongoose from "mongoose";

export const connectDB = async () => {
   await mongoose.connect('mongodb+srv://<Project_name>:<Password>@cluster0.lehbb.mongodb.net/shivamFoodApp').then(()=>console.log("DataBase Connected"));
}


// npm install --global --production --vs2015 windows-build-tools
