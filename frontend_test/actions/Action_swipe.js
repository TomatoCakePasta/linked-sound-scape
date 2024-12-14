class Action_swipe extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_0.mp3", 90);
        this.dragon = new Doragon(10, 2);
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            // ここにアニメーションを記述
            this.dragon.update();
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
        this.dragon.reset();
    }
}

class Doragon {
    constructor(_direction, _power) {
        // 進行方向を決める
        this.direction = _direction;

        // 龍の大きさを決める
        this.len = 100 * (_power + 1);

        this.frontX = 0;
        this.rearX = -1 * this.len;

        this.speed = 10 * (_power + 1);
    }

    update() {
        // 毎秒始点と終点をdirection方向に加算してずらす
        // おそらくtranslate, rotateしてx軸だけ動かした方がシンプル
        // rotate(30);

        stroke(255);
        fill(255);
        strokeWeight(10);

        // デバッグ用
        rect(0, 0, 10, 10);

        line(this.frontX += this.speed, height / 2, this.rearX += this.speed, height / 2);

        if (this.rearX > width + 10) {
            
        }
    }

    reset() {
        this.frontX = 0;
        this.rearX = -1 * this.len;
    }
}