import { TOrder } from "@types";

const useOrder = () => {
  const initialValues: TOrder = {
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
    note: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form submitted with values:", values);
    // Handle form submission logic here
  };

  return { initialValues, handleSubmit };
};

export default useOrder;
