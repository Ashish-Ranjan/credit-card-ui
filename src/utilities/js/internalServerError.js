export const internalServerError = (response) => {
  if (!response.status === 500) {
    console.log(response);
    throw {
      _message: response.statusText,
      error: "Internal Server Error",
    };
  }
};
