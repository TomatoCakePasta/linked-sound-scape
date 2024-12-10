# LinkedSoundScape
体験者のスマートフォンデバイスを使用したインタラクションシステム

# DEMO
デバイスをタップすると、遠隔のデジタル展示作品に効果音とアニメーションが表示  
体験者はデバイスを通して、作品への影響を模索する  
![画面収録-2024-12-10-21 08 39-1](https://github.com/user-attachments/assets/0b32af8f-6c96-4c5d-8baa-7a077ebdff19)
(開発段階)

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

# Vision
* Max MSPやTouch Designerへのデータ転送
* 個々の作品を通信でゆるく結ぶ
