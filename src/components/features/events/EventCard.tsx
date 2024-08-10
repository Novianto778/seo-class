import Link from "next/link";
import React from "react";

type Props = {};

const EventCard = (props: Props) => {
  const date = "2021-10-10";
  const time = "10:00:00";
  return (
    <Link
      href="/events/1"
      className="border border-gray-200 rounded-lg max-w-72"
    >
      <img
        src="https://career.acc.co.id/_next/image?url=https%3A%2F%2Fnetimg.acc.co.id%2Fredberries%2Fdata_content%2Fevents%2Fevent_59.webp%3Fts%3D083847%3Fts%3D083857&w=1920&q=75"
        alt="event"
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="p-4">
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
        <p className="font-semibold text-sm text-gray-800">
          Master's degree in Computer Software Engineering
        </p>
        <p className="mt-1 text-sm text-gray-600">
          The University of Manchester
        </p>
      </div>
    </Link>
  );
};

export default EventCard;
