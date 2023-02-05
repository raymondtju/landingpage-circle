import React from "react";
import TestimonialCard from "../TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      {/* Section 6 */}
      <div className="mt-[200px]">
        <div className="mx-auto text-center">
          <h3 className="text-5xl leading-[62px] font-bold">
            What people are saying about
            <span className="textGradient">{` Circle`}</span>
          </h3>
        </div>
        <div className="py-1 overflow-hidden">
          <div className="flex flex-col gap-6 mt-[72px] md:flex-row justify-center align-items-center pointer">
            <TestimonialCard
              author={"Leslie Alexander"}
              message={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
              role={"community"}
            />
            <TestimonialCard
              author={"Marcelino"}
              message={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
              role={"community"}
            />
            <TestimonialCard
              author={"Marcelino"}
              message={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
              role={"community"}
            />
            <TestimonialCard
              author={"Marcelino"}
              message={
                "Circle is being used for my project, and the team has been very helpful. thanks, are there any new Tools you've tried this week?"
              }
              role={"community"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
