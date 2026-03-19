import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./Components/ScrollToTop";
import Customized from "./pages/Customized";
import ContactForm from "./Components/ContactForm";
import LoadingPage from "./Components/loadingPage";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const handlePageLoad = () => {
  //     setIsLoading(false);
  //   };

  //   if (document.readyState === "complete") {
  //     handlePageLoad(); // Already loaded
  //   } else {
  //     window.addEventListener("load", handlePageLoad);
  //   }

  //   return () => {
  //     window.removeEventListener("load", handlePageLoad);
  //   };
  // }, []);
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      {isLoading ? (
        <LoadingPage isLoading={isLoading} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customized/:type" element={<Customized />} />
          <Route path="/book" element={<ContactForm />} />
        </Routes>
      )}
    </>
  );
};

export default App;
