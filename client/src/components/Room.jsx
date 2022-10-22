import AgoraUIKit from "agora-react-uikit";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router";
import { API, rtcProps } from "../services/service";
import ReactLoading from "react-loading";

function Room() {
  const [videoCall, setVideoCall] = useState(false);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  const callbacks = {
    EndCall: () => {
      navigate("/");
      setVideoCall(false);
    },
  };
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      setVideoCall(true);
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {load && (
        <div className="loading">
          <ReactLoading
            type="spokes"
            color="#007BFF"
            height={"20%"}
            width={"20%"}
          />
        </div>
      )}
      <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
        {videoCall ? (
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        ) : (
          <div>
            <h1>not found room</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Room;
