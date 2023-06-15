export interface PostPayload {
  title: string;
  body: string;
  userId: number;
}

export interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}
