import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

const ApiRoute = nextConnect<NextApiRequest & { files: Array<any> }, NextApiResponse>({
  onError: (error, req, res) => {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch: (req, res) => {
    res.status(405).json({ path: "network", message: `Method '${req.method}' Not Allowed` });
  },
});

ApiRoute.get((req, res) => {
  res.send("This is the Email API routes");
});

export default ApiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
