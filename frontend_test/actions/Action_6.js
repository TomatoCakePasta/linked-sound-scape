class Action_6 extends Action {
    constructor() {
        // サウンドファイル名, アニメの再生フレーム数
        super("sound_6.mp3", 30);
    }

    update() {
        // 最終フレームまで描画
        if (super.isPlay()) {
            stroke(255);
            strokeWeight(4);
            noFill();
    
            for (let i = 0; i < 7; i++) {
                beginShape();
                
                let x = 0;
                let y = height / 2;
                
                // 雷のランダムな動きをシミュレート
                for (let i = 0; i < 40; i++) {
                    y += random(-20, 20);
                    x += random(40, 80);
                    vertex(x, y);
                }
                
                vertex(width, y);
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