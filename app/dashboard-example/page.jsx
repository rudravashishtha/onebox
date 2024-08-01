"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { jwtDecode } from "jwt-decode";
import { ChevronDown } from "lucide-react";
import {
  deleteMailResponse,
  getMailList,
  getMailMessages,
} from "../../utils/actions";
import InboxEmailCard from "../../components/InboxEmailCard";
import InboxHeader from "../../components/InboxHeader";
import EmptyPage from "../../components/EmptyPage";
import SearchBar from "../../components/SearchBar";
import UserDetails from "../../components/UserDetails";
import ReplySection from "../../components/ReplySection";
import Modal from "../../components/Modal";


const DashboardPage = (req) => {
//   const [currColor, setCurrColor] = useState < Boolean > true;
  const [data, setData] = useState([]);
  const [singleMail, setSingleMail] = useState({});
  const [render, setRender] = useState(false);

  const [currentPge, setcurrentPge] = useState(0);

  let token = localStorage.getItem("reachinbox-auth") || takeToken();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = () => {
    getMailList(token)
      .then((res) => {
        console.log(res);
        setData(res);
        if (res?.length > 0) {
          setSingleMail(res[0]);
          const id = res[0]?.threadId;
          if (id !== undefined) return getMailMessages(id);
          else console.log("error id not found");
        } else console.log("Email not Found");
      })
      .then((messages) => setSingleMail(messages))
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
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

  useEffect(() => {}, [singleMail, currentPge, isModalOpen]);

  const handleChangeEmail = (id) => {
    getMailMasseges(id)
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

  const handleChange = (index) => setcurrentPge(index);

  const deleteEmail = () => {
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

  return (
    <div
      className={`w-full h-full m-auto max-w-[1440px]  h-10 flex`}
    >
      <div className="w-[56px] h-screen ">
        <Sidebar
          username={username}
          currentPge={currentPge}
          handleChange={handleChange}
        />
      </div>
      <div className="w-full max-w-[1383]">
        <div
          className={` h-[64px] flex justify-between py-4 pl-8 `}
        >
          <p
            className={`w-full text-left text-xl `}
          >
            Onebox
          </p>
          <div className="w-[210px] h-8 mr-5 flex justify-center items-center gap-5">
          </div>
        </div>
        {currentPge != 5 ? (
          <EmptyPage />
        ) : (
          <div
            className={`flex border `}
          >
            <div className="w-[275px] ml-5  pr-3">
              <div className="flex justify-between mt-4 items-center">
                <InboxHeader />
              </div>
              <p className="text-left  text-[14px] mt-2.5">
                25/25 <span className=" text-[#7F7F7F]">Inboxes selected</span>
              </p>
              <div className=" mt-2 h-11 ">
                <SearchBar />
              </div>
              <div className="flex justify-between  text-[14px]">
                <div className="flex items-center gap-2 ">
                  <p
                    className={`text-blue-500 w-8 h-7 pt-0.5 rounded-2xl`}
                  >
                    26
                  </p>
                  <p>New Replies</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>Newest</p>
                  <ChevronDown />
                </div>
              </div>
              <hr className="mt-2.5" />
              <div className=" text-left">
                {data?.length > 0 &&
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
                  })}
              </div>
            </div>
            <ReplySection singleMail={singleMail} />
            <UserDetails />
          </div>
        )}
      </div>
      {
        isModalOpen && (
          <Modal
            deleteEmail={deleteEmail}
            closeModal={closeModal}
          />
        )
      }
    </div>
  );
};

export default DashboardPage;
