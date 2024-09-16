import React from "react";

const testimonials = [
  {
    quote: "To me, hackX Jr. is more than just an event—it is the stage on which dreams are launched, innovation is performed, and a community is built. Come and join the Jr. and become part of this incredible family!",
    name: "Angelo Perera",
    team: "Team GeoGuardians",
    school: "St. Sebastians College, Moratuwa",
  },
  {
    quote: "As a participant, I was impressed by the level of organization and the enthusiasm displayed by both the organizers and the participants. The competition provided a platform for budding innovators to showcase their skills and creativity.",
    name: "Sithum Jayasinghe",
    team: "Team Hype Tech",
    school: "Central College, Kuliyapitiya",
  },
];

export default function Testimonial() {
  return (
    <div className="text-black py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-black">
        What Our Past Contestants Say
      </h2>
      {/* Use items-center to center the content on small screens */}
      <div className="flex flex-col items-center md:flex-row justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative border border-black p-8 rounded-lg max-w-md text-center shadow-lg"
          >
            {/* Left Quote */}
            <p className="absolute text-black text-[80px] top-0 left-5">
              “
            </p>

            {/* Testimonial text */}
            <p className="text-lg italic text-black mt-10 mb-12">
              {testimonial.quote}
            </p>

            {/* Right Quote */}
            <p className="absolute text-black text-[80px] bottom-16 right-5">
              ”
            </p>

            {/* Name and other details */}
            <div className="mt-6">
              <p className="text-blue-900 font-bold text-lg">
                {testimonial.name}
              </p>
              <p className="text-blue-400">{testimonial.team}</p>
              <p className="text-black">{testimonial.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
