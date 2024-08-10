import { envClient } from "@/lib/env";
import axios from "axios";

const sattelite = axios.create({
  baseURL: envClient.NEXT_PUBLIC_API_URL,
});

export default sattelite;
