import Car from "@/models/Cars";
import connectMongo from "@/utils/connectMongo";

export default async function editCar(req, res) {
  try {
    await connectMongo();
    if (req.method == "PUT") {
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
      } = await req.body;
      const updatedCar = await Car.findOneAndUpdate(
        { _id: _id },
        {
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
        },
        { new: true } // Return the updated document
      );
      console.log(updatedCar);

      res.status(200).json({
        status: "success",
        data: {
          updatedCar,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
