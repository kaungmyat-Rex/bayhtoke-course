import z from "zod";

export const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().nonempty("Message is required"),
});

export const formSchemabilling = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Invalid Phone number"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
});
