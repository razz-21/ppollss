export interface Pool {
  title: string;
  author: string;
  options: PoolOption[];
  tags: PoolTag[];
  totalVotes: number;
  color: string;
  userVotes: string[];
  discussions: PoolDiscussions[];
  updateAt: any;
  createAt: any;
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
      createdAt: any;
      updatedAt: any
    }
  ],
  createdAt: any;
  updatedAt: any
}