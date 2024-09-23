import FormInput from "@/components/globals/forms/FormInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="bg-gray-100 flex items-center justify-center py-12">
      <div className="mx-auto grid w-[450px] gap-6">
        <div className="grid gap-2">
          <div>
            <h1 className="text-slate-900 text-xl font-bold">Sign In</h1>
            <p className="text-slate-500 text-base">
              Enter your credentials below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            Don't have an account?{" "}
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
