import { Calendar } from "lucide-react";
import React from "react";
import EventCard from "./EventCard";
import EventSkeleton from "./EventSkeleton";

type Props = {};

const EventContent = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {new Array(10).fill(0).map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </>
  );
};

export default EventContent;
