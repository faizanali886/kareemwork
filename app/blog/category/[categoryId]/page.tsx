import { categories, articles } from "../../_assets/content";
import CardArticle from "../../_assets/components/CardArticle";
import CardCategory from "../../_assets/components/CardCategory";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";


export async function generateStaticParams() {
  return articles.map((article) => ({
    params: {
      articleId: article.slug,
    },
  }));
}

interface ArticleParams {
  params: {
    articleId: string;
  };
}

export async function generateMetadata({ params }: ArticleParams) {
  const article = articles.find(
    (article) => article.slug === params.articleId
  );

  return getSEOTags({
    title: `${article.title} | Blog by ${config.appName}`,
    description: article.description,
    canonicalUrlRelative: `/blog/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticleParams) {
  const article = articles.find((article) => article.slug === params.articleId);

  if (!article) {
    // Handle the case where the article is not found
    return <div>Article not found</div>;
  }

  return (
    <>
      <h1>{article.title}</h1>
      {/* Render article content */}
    </>
  );
}
