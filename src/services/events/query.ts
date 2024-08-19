import { getEvents } from "./api";

export const eventTimelineOptions = {
  queryKey: ["event", "timeline"],
  queryFn: () => getEvents({ limit: 3 }),
};
