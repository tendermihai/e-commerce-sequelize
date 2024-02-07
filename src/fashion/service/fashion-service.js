import db from "../../config/db.js";
import asyncHandler from "express-async-handler";

let getAllFashions = asyncHandler(async (req, res) => {
  let data = await db.models.Fashion.findAll();
  res.status(200).json(data);
});

const addFashion = asyncHandler(async (req, res) => {
  try {
    const { clothName, brandName, modelName, color, price, gender } = req.body;
    await db.models.Fashion.create({
      clothName: clothName,
      brandName: brandName,
      modelName: modelName,
      color: color,
      price: price,
      gender: gender,
    });
    res.status(200).json({
      type: "success",
      payload: "Fashion has been added successfully",
    });
  } catch (error) {
    console.log("An error occured");

    res.status(500).json({
      type: "error",
      payload: "An error occured while adding this fashion",
    });
  }
});

const deleteFashion = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let delFashion = await db.models.Fashion.findByPk(id);

  if (delFashion) {
    await delFashion.destroy();
    res.status(200).json({ message: "Fashion has been successfully deleted. " });
  } else {
    res.status(400).json({ message: "Could not delete this fashion. " });
  }
});

const updateFashion = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let fashion = await db.models.Fashion.findByPk(id);

  let obj = req.body.fashion;

  if (obj.clothName != "") {
    fashion.clothName = obj.clothName;
  }

  if (obj.brandName != "") {
    fashion.brandName = obj.brandName;
  }

  if (obj.modelName != "") {
    fashion.modelName = obj.modelName;
  }

  if (obj.publicationDate != "") {
    fashion.publicationDate = obj.publicationDate;
  }

  if (obj.color != "") {
    fashion.color = obj.color;
  }

  if (obj.price != "") {
    fashion.price = obj.price;
  }

  if (obj.gender != "") {
    fashion.gender = obj.gender;
  }

  await fashion.save();

  res.status(200).json("Fashion has been successfully updated.");
});

export { getAllFashions, addFashion, deleteFashion, updateFashion };
