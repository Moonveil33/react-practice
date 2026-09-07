import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string({
      required_errror: "فیلد نام کاربری الزامیست",
      invalid_type_error: "فیلد باید متن باشد",
    })
    .min(5, "نام کاربر یحداقل 5 کاراکتر باید باشد")
    .max(15, "نام کاربری حداکثر 15 کاراکتر باید باشد"),
  // .regex(/^[0-9a-zA-z]$/)
  password: z
    .string({
      required_error: "وارد کردن فیلد گذرواژه الزامیست",
      invalid_type_error: "فیلد باید متنی باشد",
    })
    .min(8, "گذرواژه حداقل 8 کاراکتر باید داشته باشد")
    .max(128, "گذرواژه باید حداکثر 128 کاراکتر داشته باشد"),
  // .regex(/[a - z]/),
});

export default loginSchema;
