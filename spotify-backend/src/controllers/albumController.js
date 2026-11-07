import { v2 as cloudinary } from "cloudinary";
import albumModel from "../models/albumModel.js";

// an async function that adds a new album to the database
const addAlbum = async (req, res) => {
  try {
    const name = req.body.name;
    const desc = req.body.desc;
    const bgColor = req.body.bgColor;
    const imageFile = req.file;
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const albumData = {
      name,
      desc,
      bgColor,
      image: imageUpload.secure_url,
    };

    const album = albumModel(albumData);
    await album.save();

    res.json({
      success: true,
      message: "Album added",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// a function that returns a list of albums in the database (display) in an array format
const listAlbum = async (req, res) => {
  try {
    const allAlbum = await albumModel.find({});
    res.json({ success: true, albums: allAlbum });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// an async function that removes an album from the database
const removeAlbum = async (req, res) => {
  try {
    await albumModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Album removed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addAlbum, listAlbum, removeAlbum };
