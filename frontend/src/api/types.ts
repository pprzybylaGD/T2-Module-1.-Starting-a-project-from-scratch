export type ApiResponse<T> = {
  ok: boolean;
  status: number;
  data?: T;
  error?: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  age?: number;
  createdAt?: Date;
};
