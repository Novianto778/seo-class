export interface NewsParams {
  limit?: string;
  page?: string;
  from?: string;
  to?: string;
  q?: string;
}

export interface News {
  id: number;
  title: string;
  author: string;
  publicationdate: Date;
  content: string;
  tags: string;
  imageurl: string;
  created_at: Date;
  updated_at: Date;
}
