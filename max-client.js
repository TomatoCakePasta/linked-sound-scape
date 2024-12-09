import { io } from "socket.io-client";
import { maxApi } from "max-api";

const PORT = 3001;

// Variables
const serverURL = `env.file.kara.yomikom.com:${PORT}`

const socket = io(serverURL);

socket.on("playEvent", (index) => {
    console.log("Get socket event");
    maxApi.outletBang();
});