import { DEV_TO_API_URL } from '../data/external';

export interface DevToArticle {
  title: string;
  url: string;
  published_at: string;
  public_reactions_count: number;
  comments_count: number;
}

export async function fetchBlogPosts() {
  let articles: DevToArticle[] = [];
  let fetchError = false;

  try {
    const response = await fetch(DEV_TO_API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    articles = await response.json();
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    fetchError = true;
  } finally {
    return {articles, fetchError}
  }
}
