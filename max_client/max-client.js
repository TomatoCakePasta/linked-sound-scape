const { io } = require("socket.io-client"); // for Max, use CommonJS import
const maxApi = require("max-api");          // for Max, use CommonJS import


// Variables

// Success in local environment
// const serverURL = "http://localhost:3000";

const serverURL = "https://youraddress:port";

// Client Initialization
const socket = io(serverURL, {
	transports: ["websocket"],  // Ensure WebSocket transport
	rejectUnauthorized: false  // Disable certificate validation (only for development)
});

// RECEIVE

socket.on("connect", () => {
    maxApi.post("Connected to server!");
});

socket.on("connect_error", (err) => {
	maxApi.post("Connection failed:", err);
});

socket.on("bang", () => {
	maxApi.post("GET bang event");
    maxApi.outletBang();
});

socket.on("playEvent", (data) => {
	maxApi.post("GET play event", data);
	maxApi.outletBang();
});


// SEND

maxApi.addHandler("bang", () => {
	maxApi.post("SEND bang event");
	socket.emit("bang");
});