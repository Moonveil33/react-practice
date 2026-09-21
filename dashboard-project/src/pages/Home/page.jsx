import React, { Suspense, useEffect, useRef, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";
import DetailsCharts from "../../features/DetailsCharts/DetailsCharts";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import useToggle from "../../hooks/useToggle";
import useTitle from "../../hooks/useTitle";
import { lazy } from "react";

// lazy loading
const ProductsTable = lazy(
  () => import("../../features/ProductsTable/ProductsTable"),
); // Promise mide be ma

const Home = () => {
  // scroll lazy loading
  const [show, setShow] = useState(false);
  const ref = useRef();

  // const [isRedirecting, setIsRedirecting] = useState(false);
  // const toggle = () => {
  //   setIsRedirecting(!isRedirecting);
  // };

  // Using CustomHook
  const [isRedirecting, toggle] = useToggle(false);

  // custom Hook
  useTitle("صفحه اصلی");

  const navigate = useNavigate();

  // lazy loading scroll ------------

  useEffect(() => {
    // نظارت میکنه روی مرورگر ببینه ایا المنت خاصی که من میخوام وارد ویوپورت شده یا نه
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShow(true);
      }
    });

    observer.observe(ref.current); // میگم بیا نظارت کن روی تارگت

    return () => observer.disconnect();
  }, []);

  // ---------------------------------------
  const CTAButton = () => {
    const clickHandler = () => {
      toggle();

      setTimeout(() => {
        navigate("/products");
      }, 2000);
    };

    return (
      <button
        onClick={clickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md cursor-pointer hover:opacity-90 text-white"
      >
        {isRedirecting ? "درحال انتقال ..." : "ایجاد محصول"}
      </button>
    );
  };
  return (
    <>
      <SectionTitle title="داشبورد" Buttons={<CTAButton />} />
      <Summaries />

      <div className="mt-20 pb-10 space-y-10">
        <DetailsCharts />

        <div ref={ref}>
          {show && (
            <Suspense fallback={<div>Loading ...</div>}>
              <ProductsTable />
            </Suspense>
          )}
        </div>

        <QuickOverview />
      </div>
    </>
  );
};

export default Home;
