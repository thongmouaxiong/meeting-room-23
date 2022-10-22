import { layout } from "agora-react-uikit";

import axios from "axios";

const serverUrl = "https://conferences-room.herokuapp.com"

export let rtcProps = {
  appId: "7309edf39f1c4ef59301560f95da43b2",
  channel: "main",
  token:"",
  tokenUrl: serverUrl,
  callActive: true,
  layout: layout.grid,
  enableVideo: true,
  enableAudio: true,
  username: "user",
  showPopUpBeforeRemoteMute: true,
  displayUsername: true,
};

export const API = axios.create({
    baseURL: serverUrl,
    // withCredentials: true,
    // credentials: 'include'
})