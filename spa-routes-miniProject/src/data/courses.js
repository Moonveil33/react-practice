const courses = [
  {
    id: 1,
    title: "تکنیک های قرارداد نویسی برای برنامه نویسان",
    description:
      "دوره تکنیک‌های قرارداد نویسی سبزلرن، مهارت‌های تنظیم قراردادهای حرفه‌ای را به برنامه‌نویسان و فریلنسرها آموزش می‌دهد تا شرایط همکاری را…",
    price: 800000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/contract.webp",
  },
  {
    id: 2,
    title: "آموزش کاربردی ESlint",
    description:
      "ESLint برای برنامه‌نویسان جاوااسکریپت طراحی شده تا با این ابزار، کدهایی بهینه و بدون خطا بنویسند. نحوه پیکربندی و استفاده…",
    price: 350000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/eslint.webp",
  },
  {
    id: 3,
    title: "آموزش جامع دیزاین پترن ها برای برنامه نویسان",
    description:
      "دوره دیزاین پترن به شما کمک می‌کند کدهای خوانا و مقیاس‌پذیر بنویسید و با یادگیری الگوهای استاندارد، به یک برنامه…",
    price: 1200000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/dp.webp",
  },
  {
    id: 4,
    title: "آموزش پروژه محور WebSocket",
    description:
      "با Socket می‌تونی مثل تلگرام یا سایت های ارز دیجیتال یه ارتباط Realtime بسازی و بدون نیاز به ارسال یه…",
    price: 1800000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/ws.webp",
  },
  {
    id: 5,
    title: "آموزش جامع پروژه محور GraphQL",
    description:
      "واسه حرفه‌ای‌تر شدن و استخدام تو شرکت های بزرگ با حقوق های بالا باید Graph رو بلد باشی. تو دوره…",
    price: 1700000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/graphql.webp",
  },
  {
    id: 6,
    title: "زیر و بَم و منطق دیپلوی برای برنامه نویسان JS",
    description:
      "تو هر فیلدی فعالیت بکنی برای پرزنت خودت تو بازار کار و نمایش نمونه کارات نیاز به دپلوی داری. تو…",
    price: 900000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/deploy.webp",
  },
  {
    id: 7,
    title: "آموزش Next.js بصورت پروژه محور",
    description:
      "نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های…",
    price: 4550000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/nextjs.webp",
  },
  {
    id: 8,
    title: "آموزش git و github",
    description:
      "گیت یه Version Controller هست که نسخه های مختلف پروژه هامون رو مدیریت و نگهداری میکنن. گیت یکی از پراستفاده…",
    price: 1300000,
    students: Math.floor(Math.random() * 10000) + 100,
    img: "/images/git.webp",
  },
];

export default courses;
