import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import React from "react";
import EventTimelineSkeleton from "./EventTimelineSkeleton";

type Props = {};

const UpcomingEventTimeline = (props: Props) => {
  const date = "2021-10-10";
  const time = "10:00:00";
  return (
    <div className="py-10 container">
      <div className="flex flex-col gap-y-2 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Events</h2>
        <p className="text-gray-600">
          Here are some of the upcoming events that you can attend.
        </p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          {new Array(3).fill(0).map((_, index) => (
            <div className="group relative flex gap-x-5 max-w-2xl" key={index}>
              <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-6 flex justify-center items-center">
                  <Calendar size={32} />
                </div>
              </div>
              <div className="grow pb-8 group-last:pb-0">
                <div className="flex items-center mb-1">
                  <p className="text-xs text-gray-600">
                    {new Date(date).toLocaleDateString("id-ID", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    at {time.split(":").slice(0, 2).join(":")}
                  </p>
                </div>
                <h3 className="font-semibold text-sm text-gray-800">
                  Junior Software Engineer at Slack
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Work in Slack is one of the beautiful experience I can do in
                  my entire life. There are a lot of interesting thing to learn
                  and manager respect your time and your personality.
                </p>
                <div className="flex mt-2 items-center">
                  <MapPin size={16} className="text-gray-700" />
                  <p className="text-xs text-gray-700 ml-1">
                    San Francisco, CA
                  </p>
                </div>
                <Button className="mt-4 text-xs" variant="secondary">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-4">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
            alt="Features Image"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventTimeline;
