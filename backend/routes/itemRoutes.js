const express = require("express");
const router = express.Router();
const path = require("path");
const Item = require("../models/itemModel");
const nodemailer = require("nodemailer");
require("dotenv").config();

// GET all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch items", error: err.message });
  }
});

// POST new item
router.post(
  "/",

  async (req, res) => {
    try {
      const { name, type, price, description, coverImg, addImg } = req.body;
      const cleanCover = coverImg.replace(/(^"|"$)/g, "");
      const additionalImages = addImg
        ? addImg
            .split(" ")
            .map((url) => url.replace(/(^"|"$)/g, "").trim())
            .filter(Boolean)
        : [];

      const newItem = new Item({
        name,
        type,
        description,
        price,
        coverImg: cleanCover,
        addImg: additionalImages,
      });

      await newItem.save();
      res
        .status(201)
        .json({ message: "Item successfully added", item: newItem });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Failed to add item", error: err.message });
    }
  }
);



module.exports = router;
