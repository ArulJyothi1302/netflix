export const checkvalidate = (email, password, name) => {
  const isEmail = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (name !== undefined) {
    const isName = /^[a-zA-Z+\-]{2,}$/.test(name.trim());
    if (!isName) {
      return "Name is not valid";
    }
  }

  if (!isEmail) {
    return "Email is not valid";
  }
  if (!isPassword) {
    return "Password is not valid";
  }

  return null;
};
