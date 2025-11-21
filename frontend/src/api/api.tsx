import type { User } from './types';

const BASE_URL = 'http://localhost:4000';

const handleResponse = async <T = unknown,>(response: Response): Promise<T> => {
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json() as Promise<T>;
};

const api = {
  users: {
    getUsers: (): Promise<User[]> =>
      fetch(`${BASE_URL}/api/users`).then((response) =>
        handleResponse<User[]>(response)
      ),
  },
};

export default api;
