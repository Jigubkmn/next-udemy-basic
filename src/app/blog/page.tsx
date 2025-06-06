import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "ブラグ記事の一覧が表示されます",
};

// ダミーデータ
const articles = [
  {id: "1", title: "タイトル1"},
  {id: "2", title: "タイトル2"},
  {id: "3", title: "タイトル3"},
]

// 3秒間待機
async function fetchArticles() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error("エラー")
  return articles
}


export default async function BlogPage() {
  const  articles = await fetchArticles
  return (
    <div>
      <ul>
        {(await articles()).map((article: {id: string, title: string}) => (
          <li key={article.id}>
            title: {article.title}
          </li>
        ))}
      </ul>
    </div>
  )
}