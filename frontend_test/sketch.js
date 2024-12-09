// webSocket
// const url = "http://localhost:3000";
// const socket = io("http://localhost:3000");

// socket.on("playEvent", (msg) => {
//     // alert(msg);
//     onClickPlay();
// });

let testSound;
let actions;
let actionClasses = [
                        Action_0,
                        Action_1
                    ];

function preload() {
    testSound = loadSound("./sounds/bass.wav");
}

function setup() {
    // canvas = createCanvas(10, 80);

    actions = actionClasses.length;

    // フルスクリーン描画
    // TODO: ウィンドウ幅が動的に変更されると前のサイズが残る
    // 手動更新が必要
    canvas = createCanvas(windowWidth, windowHeight);

    // test 画面クリックでサウンド出力
    canvas.mousePressed(onTestPlay)

    // 配列の分だけクラス生成
    // for (let i = 0; i < actions; i++) {       
    //     const module = import(`./actions/Action_${i}`);
    //     const actionClass = module[`Action_${i}`];
    //     if (actionClass) {
    //         actionClasses.push(new actionClass());
    //     }
    //     else {
    //         console.error(`Not Found Action_${i}`);
    //     }
    // }

    actionClasses = actionClasses.map(ActionClass => new ActionClass());

    console.log(actionClasses);
    background(0);
}

function draw() {
    background(0);

    // 全てのアニメーションを更新
    for (let i = 0; i < actions; i++) {
        actionClasses[i].update();
    }
}

// webSocketで呼び出したい
function onClickPlay(id) {
    // アクション発動
    actionClasses[id].play();
    actionClasses[id].reset();
 }

 function onTestPlay() {
    testSound.play();
 }

// アニメのファイルを分けてインポートできれば、分業が可能