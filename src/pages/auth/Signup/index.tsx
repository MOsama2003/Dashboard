import FormInput from "@/components/globals/forms/FormInput";
import FormPhoneInput from "@/components/globals/forms/FormPhoneInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signupFormSchema } from "@/schemas/signup-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Signup = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.info(values);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[450px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6">
          <div className="grid gap-2 text-center sm:text-left">
            <h1 className="text-slate-900 text-2xl sm:text-xl font-bold">Sign Up</h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Enter the essential information to gain access
            </p>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 sm:space-y-8"
              >
                <div className="grid gap-4">
                  <FormPhoneInput
                    control={form.control}
                    name="phone"
                    placeholder="Enter Your Phone Number"
                    label="Phone"
                    isRequired
                  />
                  <FormInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email Address"
                    control={form.control}
                    rightIcon={Mail}
                    isRequired
                  />
                  <Button type="submit" className="bg-primaryThemeColor w-full">
                    Sign up
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-primaryText">
                    Login
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
