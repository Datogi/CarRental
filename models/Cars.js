import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
  _id: { type: String, unique: true, required: true },
  brand: String,
  model: String,
  year: Number,
  color: String,
  availability: Boolean,
  rentalRate: Number,
  fuelType: String,
  mileage: Number,
  insuranceIncluded: Boolean,
  features: [String],
  transmission: String,
  seats: Number,
  doors: Number,
  engine: String,
  registration: String,
  licensePlate: String,
  condition: String,
  fuelEfficiency: String,
  audioSystem: String,
  airbags: Number,
  parkingAssist: Boolean,
  location: String,
});

const Car = mongoose.models.Cars || mongoose.model("Cars", carSchema);
export default Car;
