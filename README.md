# LinkedSoundScape
体験者のスマートフォンデバイスを使用したインタラクションシステム  
表現者でもあり鑑賞者でもある,新しいアートの楽しみ方を届ける

# DEMO
デバイスをタップすると、遠隔のデジタル展示作品に効果音とアニメーションが表示  
体験者はデバイスを通して、作品への影響を模索し、音の景色に惹き込まれる  

https://github.com/user-attachments/assets/e1794ec3-2c45-453f-9a66-2ef956f9b84a


(開発段階, デモ映像は無音です)
2024年12月製作開始, 2025年3月展示予定  

# Features
「通信」で人と人、作品を繋ぐ

# Requirement

* node.js: v20.18.0
* cors: 2.8.5
* dotenv: 16.4.7
* express: 4.21.1
* http: 0.0.1-security
* socket.io: 4.8.1

# Installation

```bash
npm install
```

# Usage
初回:  
* プロジェクトをローカル(自分のPC)に入れる
```bash
git clone https://github.com/TomatoCakePasta/linked-sound-scape.git
```
<br>

* soundsフォルダの作成  
 soundsに任意のサウンドファイルを格納
```bash
cd frontend_test
mkdir sounds
```
<br>

アプリの実行:  
* バックエンド側
```bash
cd backend
node server.js
```
<br>

* フロントエンド側(VSCodeの場合)  
 拡張機能から「Live Server」をインストール  
 htmlファイルを左クリック(Mac: Ctrl + クリック)でOpen With Live Serverを選択  

# Note
* Node.jsが未インストールの場合は[こちらから](https://nodejs.org/en/)
* .env, .env.productionファイルを作成してください

# Vision
* Max MSPやTouch Designerへのデータ転送
* 個々の作品を通信でゆるく結ぶ
