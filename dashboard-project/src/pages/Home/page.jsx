import React, { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useNavigate } from "react-router";
import Summaries from "../../features/Summaries/Summaries";

const Home = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsRedirecting(!isRedirecting);
  };

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

      <div className="">
        {/* <DetailsCharts /> */}
        {/* <ProductsTable /> */}
        {/* <OuickOverview /> */}
      </div>
    </>
  );
};

export default Home;
