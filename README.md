これは、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages) でブートストラップされた [Next.js](https://nextjs.org/) プロジェクトです。 /create-next-app)。

## 入門

まず、開発サーバーを実行します。

```bash
npm run dev
# or
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認します。

「pages/index.tsx」を変更することで、ページの編集を開始できます。ファイルを編集すると、ページが自動更新されます。

[API ルート](https://nextjs.org/docs/api-routes/introduction) は [http://localhost:3000/api/hello](http://localhost:3000/api/hello) でアクセスできます。 ）。このエンドポイントは「pages/api/hello.ts」で編集できます。

`pages/api` ディレクトリは `/api/*` にマップされます。このディレクトリ内のファイルは、React ページではなく [API ルート](https://nextjs.org/docs/api-routes/introduction) として扱われます。

## もっと詳しく知る

Next.js の詳細については、次のリソースをご覧ください。

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.js の機能と API について学びます。
- [Next.js を学ぶ](https://nextjs.org/learn) - インタラクティブな Next.js チュートリアル。

[Next.js GitHub リポジトリ](https://github.com/vercel/next.js/) を確認してください。フィードバックと貢献を歓迎します。

## Vercel にデプロイする

Next.js アプリをデプロイする最も簡単な方法は、[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app) を使用することです。 -readme) は、Next.js の作成者によるものです。

詳細については、[Next.js デプロイ ドキュメント](https://nextjs.org/docs/deployment) をご覧ください。
