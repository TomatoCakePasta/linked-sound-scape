class Action_destroy extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_1.mp3", 60);
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            // ここにアニメーションを記述
            if (this.frame % 4 === 0) {
                background(255);
            }
            else {
                background(0);
            }
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