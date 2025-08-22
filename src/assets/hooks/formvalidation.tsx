// import { useForm } from "react-hook-form";
// import {  z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// export const FormValidation = <T extends z.ZodType<any, any, any>>(validationSchema: T) => {
//    type FormValues = z.infer<T>;
//     type FormInput = z.input<T>;
    
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<FormInput, any, FormValues>({
//     resolver: zodResolver(validationSchema),
//     mode: "onChange", 
//   });

//   return { register, handleSubmit, reset, errors, isSubmitting };
// };