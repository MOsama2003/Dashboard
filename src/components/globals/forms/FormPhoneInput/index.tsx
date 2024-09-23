import { PhoneInput } from "@/components/phone-input/phone-input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";

interface Props {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  isRequired?: boolean;
  hint?: string;
}

const FormPhoneInput: React.FC<Props> = ({
  control,
  name,
  label,
  placeholder ="Enter your phone number",
  isRequired,
  hint,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </FormLabel>
          <div className="relative w-full">
            <FormControl>
              <PhoneInput
                placeholder={placeholder}
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                international
              />
            </FormControl>
            <FormDescription>{hint}</FormDescription>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default FormPhoneInput;
