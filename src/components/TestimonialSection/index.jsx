import React from "react";
import TestimonialCard from "../TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <div className="mt-[200px]">
        <div className="mx-auto text-center">
          <h3 className="text-4xl font-bold leading-[42px] lg:text-5xl lg:leading-[62px]">
            What people are saying about
            <span className="textGradient">{` Circle`}</span>
          </h3>
        </div>
        <div className="relative">
          <div className="align-items-center pointer snap mt-[72px] flex flex-row justify-start  gap-6 overflow-auto">
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
