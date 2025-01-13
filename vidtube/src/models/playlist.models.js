import mongoose, { Schema } from "mongoose";

const playlistSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
     
    },
    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
    name: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt
);

export const Playlist = mongoose.model("Playlist", playlistSchema);
