import { object, string, InferType } from "yup"

const schema = object({
  "Full Name": string().required().min(5).max(40),
  "Reply To": string().email().required().max(40),
  Description: string().required().min(5).max(140),
})

export default schema
export type FormData = InferType<typeof schema>
