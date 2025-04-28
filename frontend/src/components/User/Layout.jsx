import React from "react";
import Sidebar from "../../components/User/Sidebar";
import Footer from "../Footer";
import Header from "./Header";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default UserLayout;
