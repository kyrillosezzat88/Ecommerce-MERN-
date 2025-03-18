import Z from "zod";

const categoryValidation = Z.object({
  title: Z.string()
    .min(3, { message: "category name must be at least 3 characters" })
    .nonempty("title is required!"),
  mainImage: Z.string().nonempty({ message: "category image required!" }),
  published: Z.boolean({ message: "published category required!" }),
});

export default categoryValidation;
