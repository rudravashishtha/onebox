"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";
import InboxEmailCard from "../../components/InboxEmailCard";
import InboxHeader from "../../components/InboxHeader";
import SearchBar from "../../components/SearchBar";
import ReplySection from "../../components/ReplySection";
import UserDetails from "../../components/UserDetails";
import EmptyPage from "../../components/EmptyPage";
import { jwtDecode } from "jwt-decode";
import {
  deleteMailResponse,
  getMailList,
  getMailMessages,
} from "../../utils/actions";

const DashboardPage = (req) => {
  const [data, setData] = useState([]);
  const [singleMail, setSingleMail] = useState({});
  const [render, setRender] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);

  let token = localStorage.getItem("reachinbox-auth") || takeToken();
  token = token ? JSON.parse(token) : "";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = () => {
    // console.log("Token: ", token);
    getMailList(token)
      .then((res) => {
        // console.log(res);
        setData(res);
        if (res?.length > 0) {
          setSingleMail(res[0]);
          const id = res[0]?.threadId;
          if (id !== undefined) return getMailMessages(id, token);
          else console.log("error id not found");
        } else console.log("No Emails Found");
      })
      .then((messages) => setSingleMail(messages))
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    token = req.searchParams.token || takeToken();
    if (token) {
      let ParseData = jwtDecode(token);
      localStorage.setItem("reachinbox-auth", JSON.stringify(token));
      localStorage.setItem(
        "reachinbox-auth-firstname",
        JSON.stringify(ParseData.user.firstName)
      );
      localStorage.setItem(
        "reachinbox-auth-lastname",
        JSON.stringify(ParseData.user.lastName)
      );
      localStorage.setItem(
        "reachinbox-auth-email",
        JSON.stringify(ParseData.user.email)
      );
    }
    fetchData();
  }, [token, render]);

  function takeToken() {
    try {
      const token = localStorage.getItem("reachinbox-auth");
      return token ? JSON.parse(token) : "";
    } catch (e) {
      console.log("Error:", e);
      return "";
    }
  }

  useEffect(() => {}, [singleMail, currentPage, isModalOpen]);

  const handleChangeEmail = (id) => {
    getMailMessages(id)
      .then((messages) => {
        setSingleMail(messages);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "d" || event.key === "D") {
        openModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleChange = (index) => setCurrentPage(index);

  const deleteMail = () => {
    const id = singleMail[0].threadId;
    deleteMailResponse(id)
      .then((res) => {
        alert(`The ${id} has been Deleted Successfully`);
        setRender(!render);
        closeModal();
      })
      .catch((err) => alert("Error Please try again"));
  };

  let firstName = localStorage.getItem("reachinbox-auth-firstname");
  firstName = firstName ? JSON.parse(firstName) : "";
  let lastName = localStorage.getItem("reachinbox-auth-lastname");
  lastName = lastName ? JSON.parse(lastName) : "";
  const username = firstName
    ? firstName[0] + (lastName ? lastName[0] : "")
    : "";
  let userEmail = localStorage.getItem("reachinbox-auth-email");
  userEmail = userEmail ? JSON.parse(userEmail) : "";

  return (
    <div className="h-screen overflow-hidden bg-[#F4F6F8] dark:bg-[#000000] text-[#000000] dark:text-white">
      <Sidebar
        username={username}
        currentPage={currentPage}
        handleChange={handleChange}
      />
      <div className="ml-[5vw] h-screen bg-white dark:bg-[#000000]">
        <Navbar firstName={firstName} />
        <div>
          {currentPage === 5 ? (
            <div>
              <div
                className={`flex border gap-5 w-full min-h-[80vh] bg-inherit`}
              >
                <div className="w-[25%] pl-8 py-5 overflow-hidden">
                  <div className="flex justify-between mt-4 items-center">
                    <InboxHeader />
                  </div>
                  <div className=" mt-2 h-11 ">
                    <SearchBar />
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <div className="flex items-center gap-2 ">
                      <p>New Replies</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Modal />
                    </div>
                  </div>
                  <hr className="mt-2.5" />
                  <div className="text-left">
                    {data?.length > 0 ? (
                      data.map((item) => {
                        return (
                          <div key={item.id}>
                            <InboxEmailCard
                              {...item}
                              handleChangeEmail={handleChangeEmail}
                            />
                            <hr />
                          </div>
                        );
                      })
                    ) : (
                      <div className="py-5 text-center">No Replies Found</div>
                    )}
                  </div>
                </div>
                <div>
                  <ReplySection
                    singleMail={singleMail}
                    deleteMail={deleteMail}
                  />
                </div>
                <div>
                  <UserDetails />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center p-10">
              <EmptyPage />
            </div>
          )}
        </div>
      </div>
      {openModal && (
        <div>
          <Modal deleteMail={deleteMail} />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
