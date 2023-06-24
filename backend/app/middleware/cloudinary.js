import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: "dzukinuaz",
  api_key: "519748274492868",
  api_secret: "Fq4YUGLxSbUPUw9BJJ3Fb7aFZF8",
});

export const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cultupaz",
  },
});
