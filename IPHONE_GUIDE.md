# iPhone で使う方法

## 📱 方法1: ブラウザで直接開く（一番簡単・推奨）

### ステップ1: URLを開く
iPhoneのSafariで以下のURLを開く：
```
https://yukikkc.github.io/childword/
```

### ステップ2: ホーム画面に追加
1. 画面下の共有ボタン（□に↑）をタップ
2. 「ホーム画面に追加」を選択
3. 「追加」をタップ

### ステップ3: 完了！
ホーム画面のアイコンから起動できます。
**一度開けば、Wi-Fi OFFでも使えます！**

---

## 📥 方法2: ファイルをダウンロードして使う

### ⚠️ 重要な注意点
- **index.html と vocabulary.js は必ず同じフォルダに入れてください**
- フォルダ構成が崩れると動きません

### 正しい手順

#### 1. PCでダウンロード
1. https://github.com/yukikkc/childword にアクセス
2. 緑色の「Code」ボタン → 「Download ZIP」
3. ZIPファイルをダウンロード

#### 2. PCでZIPを展開
**重要：PCで展開してください**
- Windows: 右クリック → 「すべて展開」
- Mac: ダブルクリックで自動展開

展開後、以下のファイル構成になっているか確認：
```
childword-main/
├── index.html          ← これ
├── vocabulary.js       ← これ
├── pc.html
├── manifest.json
├── sw.js
└── その他のファイル
```

#### 3. フォルダごとiPhoneに送る
**個別ファイルではなく、フォルダごと送ってください**

AirDropで送る場合：
1. PCで「childword-main」フォルダを圧縮（ZIP化）
2. ZIPファイルをiPhoneにAirDrop
3. iPhone側で受信

#### 4. iPhoneで展開
1. 「ファイル」アプリを開く
2. 受信したZIPファイルをタップ
3. 自動的に展開される

#### 5. index.htmlを開く
1. 展開されたフォルダを開く
2. **index.html と vocabulary.js が同じフォルダにあることを確認**
3. `index.html` をタップ
4. Safariで開く

---

## ❌ よくある間違い

### ダメな例1: 個別にファイルをダウンロード
```
❌ index.html だけダウンロード
❌ vocabulary.js だけダウンロード
```
→ 別々のフォルダに保存されるため動きません

### ダメな例2: iPhone側でZIPを先に展開
```
❌ PCからZIPを送る
❌ iPhone側で展開すると、フォルダ構成が崩れる場合がある
```

### 正しい方法
```
✅ PCで展開
✅ フォルダごとiPhoneに送る（または再度ZIP化して送る）
✅ index.html と vocabulary.js が同じフォルダにある
```

---

## 🔍 トラブルシューティング

### 「アプリを準備中」で止まる場合

**原因:** vocabulary.js が読み込まれていません

**確認方法:**
1. 「ファイル」アプリで展開したフォルダを開く
2. `index.html` と `vocabulary.js` が**同じフォルダ**にあるか確認

**フォルダ構成が正しい例:**
```
childword-main/
├── index.html          ← ここ
└── vocabulary.js       ← ここ（同じ階層）
```

**間違った例:**
```
❌ Downloads/
   ├── index.html
   └── childword-main/
       └── vocabulary.js  ← 違うフォルダにある
```

### pc.html の表示が崩れる場合

pc.htmlはPC用なので、iPhoneでは使わないでください。
**index.html を使ってください。**

---

## 💡 おすすめ

**方法1（ブラウザで直接開く）が最も簡単です！**

ダウンロード不要で、URLを開くだけで使えます：
https://yukikkc.github.io/childword/

ホーム画面に追加すれば、アプリのように使えます。
