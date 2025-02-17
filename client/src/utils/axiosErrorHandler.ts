import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      error.message ||
      "An error occurred while fetching data."
    );
  } else {
    return "An error occurred while fetching data.";
  }
};

export default axiosErrorHandler;
