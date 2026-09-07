import { BiShoppingBag } from "react-icons/bi";
import { LOREM_TEXT } from "./../data/constants.js";
import { useNavigate, useParams } from "react-router";
import courses from "../data/courses.js";
import { useEffect, useState } from "react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const navigate = useNavigate();

  // const [isLogin, useIsLogin] = useState(true);
  // if (!isLogin) {
  //   navigate("/");
  // }
  useEffect(() => {
    const mainCourse = courses.find((course) => course.id === Number(courseId));
    if (mainCourse) {
      setCourse(mainCourse);
    } else {
      navigate("/404-not-found");
    }
  }, [courseId]);

  return (
    <>
      <section className="flex h-[332px] justify-between gap-5 mt-40 max-w-[1200px] mx-auto">
        <div className="w-1/2 ">
          <img
            src={course?.img}
            className="rounded-lg border border-white/15 shadow-md"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between h-[332px] w-1/2">
          <div className="space-y-3">
            <h1 className="font-extrabold line-clamp-2 text-xl">
              {course?.title}
            </h1>
            <p className="opacity-50">{course?.description}</p>
          </div>
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <img
                src="/images/rad-front.jpg"
                className="size-8 rounded-full"
                alt=""
              />
              <span className="text-sm">محمدامین سعیدی راد</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-end gap-1">
                <p className="font-black text-3xl">
                  {course?.price?.toLocaleString("fa-IR")}
                </p>
                <span className="opacity-70">تومان</span>
              </div>
              <button className="h-10 transition-all duration-150 hover:opacity-90 focus:ring-4 ring-teal-500/50 select-none text-sm flex items-center justify-center rounded-md bg-gradient-to-t border border-teal-500 from-teal-700 to-teal-500 gap-2 text-white max-w-max ms-auto px-4 cursor-pointer">
                <BiShoppingBag className="text-base" />
                ثبت نام و خرید
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-[1200px] mx-auto  text-justify space-y-5 mt-20">
        <h3 className="font-black text-2xl">توضیحات کامل دوره</h3>
        <div className="opacity-70">
          {Array.from({ length: 14 }).map((_) => LOREM_TEXT)}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
