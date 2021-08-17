import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const uploadMiddleware = upload.array("files");

export const configureNextApiRoutes = () => {
  const ApiRoute = nextConnect<NextApiRequest & { files: Array<any> }, NextApiResponse>({
    onError: (error, req, res) => {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch: (req, res) => {
      res.status(405).json({ path: "network", message: `Method '${req.method}' Not Allowed` });
    },
  });

  ApiRoute.use(uploadMiddleware);

  return ApiRoute;
};
