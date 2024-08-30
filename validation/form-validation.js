const formValidation = (data, errorCallback) => {
  for (const [key, value] of Object.entries(data)) {
    if (value === "") {
      errorCallback({ [key]: "Field cannot be empty" });
      return false;
    }

    if (key === "email") {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!emailRegex.test(value)) {
        errorCallback({ [key]: "Invalid email" });
        return false;
      }
    }

    if (key === "password" && value.length < 6) {
      errorCallback({
        [key]: "Password must be at least 6 characters long",
      });
      return false;
    }

    if (key === "confirmPassword" && value !== data.password) {
      errorCallback({ [key]: "Passwords do not match" });
      return false;
    }
  }
  errorCallback({});
  return true;
};

export { formValidation };
