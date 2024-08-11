import { envClient } from "@/lib/env";
import axios from "axios";

const satellite = axios.create({
  baseURL: envClient.NEXT_PUBLIC_API_URL,
});

export default satellite;
