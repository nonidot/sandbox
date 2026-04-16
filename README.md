# sandbox

TypeScript → React 学習用リポジトリ

## 環境構築

### 前提

- Node.js インストール済み（`node -v` で確認）

### セットアップ手順

```bash
# 1. npmプロジェクト初期化
npm init -y

# 2. TypeScript関連パッケージをインストール
npm install --save-dev typescript ts-node @types/node

# 3. TypeScript設定ファイルを生成
npx tsc --init

# 4. .gitignoreを作成（node_modulesを除外）
echo "node_modules/" > .gitignore
```

### 実行方法

```bash
npx ts-node step1-basics/hello.ts
```

## フォルダ構成

```
sandbox/
├── node_modules/      # Gitで管理しない
├── package.json
├── tsconfig.json
├── .gitignore
├── step1-basics/      # 基本型・interface
├── step2-async/       # 非同期処理
└── step3-generics/    # Generic型
```
