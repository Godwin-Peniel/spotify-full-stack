import express from "express";
import {
  addAlbum,
  listAlbum,
  removeAlbum,
} from "../controllers/albumController.js";

import upload from "../middleware/multer.js";

// using the express package to create a route
const albumRouter = express.Router();

// creating routes to use the imported async arrow functions from the albumController.js file

// created a method that uses POST to upload or send album to the db
albumRouter.post("/add", upload.single("image"), addAlbum);

// a method that uses GET to get the album in the db
albumRouter.get("/list", listAlbum);

// a method that uses POST to remove an album from the db
albumRouter.post("/remove", removeAlbum);

export default albumRouter;