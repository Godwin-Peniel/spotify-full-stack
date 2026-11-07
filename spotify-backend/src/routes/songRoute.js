import {
  addSong,
  listSong,
  removeSong,
} from "../controllers/SongController.js";
import express from "express";
import upload from "../middleware/multer.js";

const songRouter = express.Router();

songRouter.post(
  "/add",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "audio", maxCount: 1 },
  ]),
  addSong,
);
songRouter.get("/list", listSong);

// added upload.none() to tell multer to parse text fields from Form-data request and populate req.body

songRouter.post("/remove", upload.none(), removeSong);
export default songRouter;
