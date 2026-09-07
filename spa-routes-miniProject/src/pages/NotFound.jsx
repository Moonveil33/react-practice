import { Link } from "react-router";

const NotFound = () => {
  return (
    <div
      className="flex items-center justify-center min-h-[100dvh] w-[100dvw] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden "
      dir="rtl"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[240px] font-black text-transparent bg-clip-text bg-gradient-to-b from-teal-500 to-teal-600 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-[180px] md:text-[240px] font-black text-teal-500/20 blur-2xl leading-none select-none">
            404
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
            صفحه مورد نظر یافت نشد
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده
            باشد.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/50 group"
        >
          <span>بازگشت به صفحه اصلی</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l-5 5 5 5"
            />
          </svg>
        </Link>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
