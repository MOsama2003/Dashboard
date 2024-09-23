import FormInput from "@/components/globals/forms/FormInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginFormSchema } from "@/schemas/login-form-schemas";
import { useBearStore } from "@/store";
import { AuthState } from "@/types/state-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Login = () => {
  const { setIsAuth } = useBearStore((state: AuthState) => ({
    setIsAuth: state.setIsAuth,
  }));

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.info(values);
    setIsAuth(true);
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-8 sm:py-12">
      <div className="mx-auto w-full max-w-[450px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:gap-6">
          <div className="grid gap-2 text-center sm:text-left">
            <h1 className="text-slate-900 text-2xl sm:text-xl font-bold">Sign In</h1>
            <p className="text-slate-500 text-sm sm:text-base">
              Enter your credentials below to log in to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              <div className="grid gap-4">
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="someone@example.com"
                  control={form.control}
                  rightIcon={Mail}
                  isRequired
                />
                <FormInput
                  label="Password"
                  name="password"
                  placeholder="********"
                  control={form.control}
                  secureTextEntry
                  isRequired
                />
                <Button type="submit" className="bg-primaryThemeColor w-full">
                  Login
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/auth/signup" className="text-primaryText">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
