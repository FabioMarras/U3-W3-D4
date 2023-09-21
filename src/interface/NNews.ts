// export interface NNews {
//   count: number;
//   next: string;
//   previous: null;
//   results: Result[];
// }

export interface Result {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: Date;
  featured: boolean;
  launches: [];
  events: any[];
}

// export interface Launch {
//   launch_id: string;
//   provider: string;
// }

export interface NewsDetails {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: any[];
  events: any[];
}
