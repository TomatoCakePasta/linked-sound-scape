class Action_0 extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_0.mp3", 30);
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            stroke(255);
            strokeWeight(4);
            noFill();
    
            for (let i = 0; i < 7; i++) {
                beginShape();
                
                let x = width / 2;
                let y = 0;
                
                // 雷のランダムな動きをシミュレート
                for (let i = 0; i < 40; i++) {
                    x += random(-20, 20);
                    y += random(40, 80);
                    vertex(x, y);
                }
                
                vertex(x, height);
                endShape();
            }             
        }
    }

    play() {
        super.play();
    }

    reset() {
        this.frame = 0;

        // その他パラメーターのリセットなどを記述
    }
}