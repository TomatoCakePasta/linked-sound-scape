class Action_swipe extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_0.mp3", 90);
        this.dragons = [];
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            // ここにアニメーションを記述
            for (let i = 0; i < this.dragons.length; i++) {
                this.dragons[i].update();

                if (this.dragons[i].flag) {
                    // i番目の要素を基準に1つ要素を削除
                    this.dragons[i].splice(i, 1);
                }
            }
        }
        else {
            this.dragons = [];
        }
    }

    play() {
        super.play();
    }

    stop() {
        super.stop();
    }

    // Action_swipeでは初期化の意味
    reset(data) {
        const { direction, power } = data;
        this.frame = 0;

        this.dragons.push(new Dragon(direction, power));
    }
}

class Dragon {
    constructor(_direction, _power) {
        this.frontX = 0;
        this.direction = _direction;
        this.len = 100 * (_power + 1);
        this.rearX = -1 * this.len;
        this.speed = 10 * (_power + 1);

        // 線の流れる方向は左から右で固定し、回転で向きを変える
        switch (this.direction) {
            // 左上へ
            case 0:
                // 軸を右下にずらす
                this.transX = width;
                this.transY = height;

                // 反時計回りに100-170度くらい回転
                this.angle = parseInt(random(-100, -170));

                // yをランダム
                this.baseY = parseInt(random(-30, 31));
                break;

            // 上へ
            case 1:
                
                // 軸を下にずらす
                this.transX = parseInt(random(0, width));
                this.transY = height;
                
                // 反時計回り
                this.angle = -90;

                this.baseY = 0;

                break;

            // 右上へ
            case 2:
                // 軸を左下にずらす
                this.transX = 0;
                this.transY = height;

                // 反時計回りに
                this.angle = parseInt(random(-10, -80));

                // yをランダム
                this.baseY = parseInt(random(-30, 31));
                break;

            // 左へ
            case 3:
                this.transX = width;
                this.transY = parseInt(random(0, height));
                
                // 時計回り
                this.angle = 180;

                this.baseY = 0;
                break;

            // 右へ
            case 4:
                this.transX = 0;
                this.transY = parseInt(random(0, height));

                this.angle = 0;

                this.baseY = 0;
                break;

            // 左下へ
            case 5:
                // 軸を右上にずらす
                this.transX = width;
                this.transY = 0;

                // 時計回り
                this.angle = parseInt(random(100, 170));

                this.baseY = 0;
                break;

            // 下へ
            case 6:
                this.transX = parseInt(random(0, width));
                this.transY = 0;

                // 時計回りに90
                this.angle = 90;

                this.baseY = 0;
                break;

            // 右下へ
            case 7:
                // 軸を左上にずらす
                this.transX = 0;
                this.transY = 0;

                // 時計回り
                this.angle = parseInt(random(10, 40));

                this.baseY = parseInt(random(-31, 30));
                break;

            default:
                break;
        }
    }

    update() {
        // 毎秒始点と終点をdirection方向に加算してずらす
        // おそらくtranslate, rotateしてx軸だけ動かした方がシンプル
        // rotate(30);

        stroke(255);
        fill(255);
        strokeWeight(10);

        // デバッグ用
        // rect(0, 0, 10, 10);
        resetMatrix();

        translate(this.transX, this.transY);
        // ラジアン変換
        rotate(this.angle * PI / 180);

        line(this.frontX += this.speed, this.baseY, this.rearX += this.speed, this.baseY);

        if (this.rearX > width + 10) {
            
        }
        // 他のアクションに影響を与えないためにリセット
        resetMatrix();
    }
}