export type User = {
  id: number;
  name: string;
};

export const fetchUserById = (id: User["id"]): Promise<User> => {
  return new Promise((resolve) =>
    resolve({
      id,
      name: `user-${id}`,
    })
  );
};
