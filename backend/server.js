import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import { createServer } from "http";

const app = express();
const PORT = 3001;

// 接続中のユーザー
let countUser = 0;

// ミドルウェア
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],

    // セッションCookieを許可する
    credentails: true,
}));

// JSON形式のリクエストボディをパース
app.use(express.json());

let server;

server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        // 認証情報の送信を許可
        credentials: true
    }
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

io.on("connection", (socket) => {
    console.log("connect client");
    countUser++;  
    // クライアントに送信
    socket.emit("enterClient", countUser);  

    socket.on("message", () => {
        console.log("Hello event");
        const msg = "res message";
        io.emit("hello", msg);
    });

    // 送信されたindexに対応する音を鳴らす指示
    socket.on("playEvent", (index) => {
         console.log("playEvent");
        // console.log("GET changeColor : ", newColor);
        io.emit("playEvent", index);
    })

    socket.on("disconnect", () => {
        console.log("Disconnect client");
        countUser--;
        io.emit("exitClients", countUser);
    });

    socket.on("getClients", () => {
        // console.log("event getClients", countUser);
        io.emit("getClients", countUser);
    });
})

server.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`);
});