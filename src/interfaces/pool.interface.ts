import type { Timestamp } from "firebase/firestore";

export interface Pool {
  docId?: string;
  title: string;
  author: string;
  options: PoolOption[];
  tags: PoolTag[];
  totalVotes: number;
  color: string;
  userVotes: string[];
  discussions: PoolDiscussions[];
  updatedAt: Timestamp;
  createdAt: Timestamp;
}

export interface PoolOption {
  text: string;
  numberOfVotes: number
}

export interface PoolTag {
  name: string;
  color: string;
}

export interface PoolDiscussions {
  comment: string;
  user: {
    name: string;
    userId: string;
    imageUrl: string;
  },
  replies: [
    {
      userId: string;
      userName: string;
      reply: string;
      createdAt: Timestamp;
      updatedAt: Timestamp
    }
  ],
  createdAt: Timestamp;
  updatedAt: Timestamp
}