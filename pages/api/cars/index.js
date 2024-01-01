import Car from "@/models/Cars";
import connectMongo from "@/utils/connectMongo";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function addCar(req, res) {
  try {
    await connectMongo();

    if (req.method === "GET") {
      const cars = await Car.find({});
      res.status(200).json({ cars: cars });
    }

    if (req.method === "POST") {
      const {
        _id,
        brand,
        model,
        year,
        color,
        availability,
        rentalRate,
        fuelType,
        mileage,
        insuranceIncluded,
        features,
        transmission,
        seats,
        doors,
        engine,
        registration,
        licensePlate,
        condition,
        fuelEfficiency,
        audioSystem,
        airbags,
        parkingAssist,
        location,
      } = req.body;

      const newCar = await Car.create({
        _id,
        brand,
        model,
        year,
        color,
        availability,
        rentalRate,
        fuelType,
        mileage,
        insuranceIncluded,
        features,
        transmission,
        seats,
        doors,
        engine,
        registration,
        licensePlate,
        condition,
        fuelEfficiency,
        audioSystem,
        airbags,
        parkingAssist,
        location,
      });

      res.status(201).json({
        status: "success",
        message: "Data was created",
        car: newCar,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
