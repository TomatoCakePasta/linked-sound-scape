// webSocket
// const url = "http://localhost:3000";
// const socket = io("http://localhost:3000");

// socket.on("playEvent", (msg) => {
//     // alert(msg);
//     onClickPlay();
// });

let testSound;
let actions;
let textTimer;
let displayText;
const isDebug = true;
let actionClasses = [
                        Action_0,
                        Action_1,
                        Action_2,
                        Action_3,
                        Action_4,
                        Action_5,
                        Action_6,
                        Action_7,
                        Action_8,
                        Action_9,
                    ];

let actionDestroy;
let actionSwipe;

let swipeClasses = [

];

function preload() {
    testSound = loadSound("./sounds/sound_0.mp3");
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

    // インスタンス生成はsetup内で行う
    // setup外だとできないかも
    actionClasses = actionClasses.map(ActionClass => new ActionClass());

    actionDestroy = new Action_destroy();
    actionSwipe= new Action_swipe();

    console.log(actionClasses);
    background(0);
}

function draw() {
    background(0);

    // 全てのアニメーションを更新
    for (let i = 0; i < actions; i++) {
        actionClasses[i].update();
    }

    actionDestroy.update();
    actionSwipe.update();

    // 一時的なテキストの描画
    if (textTimer > 0 && isDebug) {
        fill(50, 150, 40);
        stroke(0);
        textSize(100);
        textAlign(CENTER);
        text(displayText, width / 2, height / 2);
        textTimer--; // タイマーをデクリメント
    }
}

/**
 * タッチイベント
 */
function onClickPlay(id) {
    displayText = `${id}`;
    textTimer = 30;

    // アクション発動
    actionClasses[id].play();
    actionClasses[id].reset();
 }

 /**
  *  スワイプイベント 
  */
 function onClickSwipe(data) {
    actionSwipe.play();
    actionSwipe.reset(data);
 }

 /** 
  * 破壊イベント
  */
 function onClickDestroy() {
    // 全てのアニメーションと音を止める
    for (let i = 0; i < actions; i++) {
        actionClasses[i].stop();
    }

    // 爆発音とフラッシュアニメーション
    actionDestroy.play();
    actionDestroy.reset();
 }

 function onTestPlay() {
    testSound.play();
 }

// アニメのファイルを分けてインポートできれば、分業が可能