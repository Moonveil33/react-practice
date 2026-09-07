const Footer = () => {
  return (
    <footer className="my-10 bottom-5 left-0 right-0 bg-black/20 backdrop-blur-md max-w-[768px] mx-auto border rounded-lg shadow-xl border-gray-200/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between text-sm" dir="rtl">
          <p className="text-gray-400">© 1405 تمامی حقوق محفوظ است</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              درباره ما
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              تماس با ما
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors"
            >
              قوانین
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
