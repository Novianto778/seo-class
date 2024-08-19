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
  date: Date;
  time: string;
  description: string;
  location: string;
  registrationurl: string;
  imageurl: string;
  created_at: Date;
  updated_at: Date;
}
