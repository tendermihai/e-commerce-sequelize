import db from "../../config/db.js";
import asyncHandler from "express-async-handler";

let getAllFurniture = asyncHandler(async (req, res) => {
  let data = await db.models.Furniture.findAll();
  res.status(200).json(data);
});

const addFurniture = asyncHandler(async (req, res) => {
  try {
    const { category, description, price } = req.body;

    await db.models.Furniture.create({
      category: category,
      description: description,
      price: price,
    });
    res.status(200).json({
      type: "success",
      payload: "Furniture has been successfully added",
    });
  } catch (error) {
    console.log("An error occured");
    res.status(500).json({
      type: "error",
      payload: "An error occured while adding this furniture",
    });
  }
});

const deleteFurniture = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const delFurniture = await db.models.Furniture.findByPk(id);

    if (delFurniture) {
      await delFurniture.destroy();
      res
        .status(200)
        .json({ message: "This furniture has been successfully deleted." });
    } else {
      res
        .status(404)
        .json({ message: "This furniture could not be found for deletion." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const updateFurniture = asyncHandler(async (req, res) => {
  try {
    let { id } = req.params;

    let furniture = await db.models.Furniture.findByPk(id);

    if (!furniture) {
      return res.status(404).json({ message: "Furniture not found." });
    }

    let obj = req.body;

    console.log("Received request body:", obj);

    if (obj.furniture && obj.furniture.category !== "") {
      furniture.category = obj.furniture.category;
    }

    if (obj.furniture && obj.furniture.description !== "") {
      furniture.description = obj.furniture.description;
    }

    if (obj.furniture && obj.furniture.price !== "") {
      furniture.price = obj.furniture.price;
    }

    console.log("Updated furniture object:", furniture);

    await furniture.save();

    res
      .status(200)
      .json({ message: "Furniture has been successfully updated." });
  } catch (error) {
    console.error("Error updating furniture:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { getAllFurniture, addFurniture, deleteFurniture, updateFurniture };
