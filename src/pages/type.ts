export interface PostsTypeI {
  userId: number;
  postId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentsTypeI {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface UsersTypeI {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface TextTypeI {
  push(text: string, arg1: string, arg2: string): unknown;
}