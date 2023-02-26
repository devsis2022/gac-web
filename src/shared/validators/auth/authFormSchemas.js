import { z } from "zod";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

const requiredMessage = { required_error: "Campo obrigatório" };
const passwordMinMessage = "A senha deve ter no mínimo 6 caracteres";

export const loginFormSchema = z.object({
  user: z.string(requiredMessage),
  password: z.string(requiredMessage).min(6, passwordMinMessage),
});

export const registerFormSchema = z.object({
  name: z.string(requiredMessage),
  username: z.string().optional(),
  email: z.string(requiredMessage).email("Email inválido"),
  cpf: z.string(requiredMessage).refine(cpfValidator.isValid, "Cpf inválido"),
  passwords: z
    .object({
      password: z.string(requiredMessage).min(6, passwordMinMessage),
      confirmPassword: z.string(requiredMessage).min(6, passwordMinMessage),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: "Senha estão diferentes",
      path: ["confirmPassword"],
    }),
});

export const registerFormInitialValues = {
  name: "",
  username: "",
  email: "",
  cpf: "",
  passwords: {
    password: "",
    confirmPassword: "",
  },
};
