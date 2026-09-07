import { FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const Course = ({ id, title, description, img, students, price }) => {
  const COURSE_URL = `/courses/${id}`;

  return (
    <article className="w-full pt-3 overflow-hidden h-[376px] border flex flex-col justify-between rounded-lg border-white/10 bg-white/3 *:p-3 space-y-3">
      <header className="w-[90%] p-0! mx-auto min-h-[148px] rounded-lg overflow-hidden border  border-white/18 shadow-xl">
        <Link to={COURSE_URL}>
          <img src={img} className="size-full object-cover" alt="" />
        </Link>
      </header>
      <main className="space-y-3 py-0! h-full flex flex-col justify-between">
        <h3 className="text-base font-bold! line-clamp-2">
          <Link to={COURSE_URL || "#"}>{title}</Link>
        </h3>
        <p className="text-sm line-clamp-2 opacity-60 ">
          <Link to={COURSE_URL || "#"}>{description}</Link>
        </p>
        <div className="flex items-center gap-2">
          <img
            src="/images/avatar.jpg"
            className="size-8 rounded-full"
            alt=""
          />
          <span className="text-sm"> برنامه نویس</span>
        </div>
      </main>
      <footer className="bg-white/5 border-white/10 text-sm border-t flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <FaUsers className="text-xl opacity-60" />
          <span className="text-sm">
            {Number(students || 79585).toLocaleString("fa-IR")}
          </span>
        </div>
        <div className="inline-flex items-end gap-1">
          <span className="font-black">
            {Number(price).toLocaleString("fa-IR")}
          </span>
          <span className="text-xs opacity-70">تومان</span>
        </div>
      </footer>
    </article>
  );
};

export default Course;
