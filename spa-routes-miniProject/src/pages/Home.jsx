import React, { useEffect } from "react";
import courses from "../data/courses";
import Course from "./../components/Home/Course";
import { useSearchParams } from "react-router";

function Home() {
  const [searchparams, setSearchParams] = useSearchParams();

  console.log(searchparams.get("page"));
  console.log(searchparams.get("count"));

  useEffect(() => {
    // setSearchParams("?q=12");
    setSearchParams({
      page: 12,
      search: 20,
    });
  }, []);

  return (
    <div
      id="root"
      className="grid my-40 grid-cols-4 max-w-[1200px]  mx-auto gap-5 relative z-50"
    >
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
}

export default Home;
