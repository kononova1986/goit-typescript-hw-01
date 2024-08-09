type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const userInfo: User = {
  name: "Kateryna",
  surname: "Kononova",
  email: "kononova@gmail.com",
  password: "1234",
};

function createOrUpdateUser(initialValues: User, updateUser: Partial<User>) {
  // Оновлення користувача
  return {
    ...initialValues,
    ...updateUser,
  };
}

console.log(
  createOrUpdateUser(userInfo, {
    email: "user@mail.com",
    password: "password123",
  })
);
