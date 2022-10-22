import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API, rtcProps } from "../services/service";

function Home() {
  const navigate = useNavigate();
  const onJoin = async ()=> {
    const res = await API.get(`/rtc/main/audience/uid/0`)
    rtcProps.token = res.data.rtcToken
    console.log("channel", res.data);
    navigate("/meeting-room/" + rtcProps.token.split("/")[0]);
  }

  return (
    <div className="container center_div">
      <div className="header">
        <h1 >MEETING </h1>
        <h1 className="white">ROOM</h1>
      </div>
      {/* <div className="form_wrap"> */}
        <button className="_btn" onClick={() => onJoin()}>
          Join Room
        </button>
      {/* </div> */}
    </div>
  );
}

export default Home;
