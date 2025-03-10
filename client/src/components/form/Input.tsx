import { useField } from "formik";

interface TInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input: React.FC<TInput> = ({ label, name, className, ...props }) => {
  const [field, meta] = useField(name);

  const validateInputClasses =
    meta.touched && meta.error
      ? "border-red-500 focus:border-red-500"
      : "border-gray-300 focus:border-primary";

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={name} className="font-medium mb-1">
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        id={name}
        className={`border ${validateInputClasses} p-2 rounded-md outline-none transition-all duration-300 ${className}`}
      />
      {meta.touched && meta.error && (
        <span className="text-red-500 font-semibold text-xs capitalize">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default Input;
