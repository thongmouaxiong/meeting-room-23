import "./App.css";
import AgoraUIKit, { layout } from "agora-react-uikit";
import { useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import Room from "./components/Room";

// function App() {
//   const rtcProps = {
//     appId: "7309edf39f1c4ef59301560f95da43b2",
//     channel: "main",
//     token:
//       "0067309edf39f1c4ef59301560f95da43b2IADYXCzq30/UXL5brEjXZLVUyURGFNlNeols2XsBvIA4gmTNKL+379yDIgDtCcIu2MZSYwQAAQBog1FjAgBog1FjAwBog1FjBABog1Fj",
//     tokenUrl: "https://conferences-room.herokuapp.com",
//     callActive: true,
//     layout: layout.grid,
//     enableVideo: true,
//     enableAudio: true,
//     username: "user",
//     showPopUpBeforeRemoteMute: true,
//     displayUsername: true,
//   };
//   const [videoCall, setVideoCall] = useState(false);
//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };
//   return videoCall ? (
//     <Video rtcProps={rtcProps} callbacks={callbacks} />
//   ) : (
//     <button onClick={() => setVideoCall(true)}>Join</button>
//   );
// }
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/meeting-room/:token' element={<Room />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
