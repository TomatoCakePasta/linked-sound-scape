class Action {
    constructor(soundName, _endFrame) {
        this.sound = loadSound(`./sounds/${soundName}`);;

        // アニメーションの長さ
        this.endFrame = _endFrame;
        
        // 現在のフレーム数
        this.frame = _endFrame;

        console.log(`Generate ${soundName}`);
    }

    // アニメ再生判断
    isPlay() {
        if (this.frame < this.endFrame) {
            ++this.frame;
            return true;
        }

        return false;
    }

    // アニメーションを描画
    update() {
    }

    // 効果音を鳴らす
    play() {
        this.sound.play();
    }

    // アニメーションをリセットする
    reset() {
        
    }
}