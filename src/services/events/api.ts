import { ReturnResponse, SingleResponse } from "@/types/common.type";
import satellite from "../satellite";
import { Event, EventParams } from "@/types/events.type";

export const getEvents = async (params?: EventParams) => {
  const res = await satellite.post<ReturnResponse<Event[]>>("/events", {
    ...params,
  });

  return res.data;
};

export const getEventsDetail = async (id: string) => {
  try {
    const res = await satellite.get<SingleResponse<Event[]>>(`/events/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    throw error;
  }
};
