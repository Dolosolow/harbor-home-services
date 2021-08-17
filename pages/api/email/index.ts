import { configureNextApiRoutes } from "@/utils/api/configureNextApi";
import { processEmailRequest } from "@/services/processEmailRequest";

const ApiRoute = configureNextApiRoutes();

ApiRoute.get((req, res) => {
  res.send("This is the Email API routes");
});

ApiRoute.post(processEmailRequest);

export default ApiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
