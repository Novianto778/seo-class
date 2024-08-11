export interface EventParams {
  limit?: number;
  page?: number;
  from?: Date;
  to?: Date;
  q?: string;
}

export interface Event {
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
