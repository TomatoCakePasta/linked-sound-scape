class Action_3 extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_3.mp3", 30);
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            // ここにアニメーションを記述
        }
    }

    play() {
        super.play();
    }

    stop() {
        super.stop();
    }

    reset() {
        this.frame = 0;

        // その他パラメーターのリセットなどを記述
    }
}