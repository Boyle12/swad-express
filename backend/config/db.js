import mongoose from "mongoose"

const connectDb= async ()=>{
  try {
    await mongoose.connect(process.env.MONBODB_URL)
  } catch (error) {
    console.log("db error")
  }
}
export default connectDb