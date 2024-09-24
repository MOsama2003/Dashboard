import FormModal from "@/components/globals/modals/FormModal";
import useBoolean from "@/hooks/useBoolean";
import React from "react";
import FormInput from "@/components/globals/forms/FormInput";
import FormTextarea from "@/components/globals/forms/FormTextarea";
import { useOrderForm } from "./OrdersContainer";
import FormPhoneInput from "@/components/globals/forms/FormPhoneInput";

interface Props {
  formState: ReturnType<typeof useBoolean>;
  data: any;
  onClose: () => void;
}

const OrdersForm: React.FC<Props> = ({ formState, data, onClose }) => {
  const { form, onSubmit, title } = useOrderForm({ formState, data, onClose });
  return (
    <FormModal
      form={form}
      onSubmit={onSubmit}
      onClose={onClose}
      formState={formState}
      title={title}
      subtitle="Fill in the form below to create a new order."
    >
      <FormInput
        control={form.control}
        name="username"
        label="Username"
        placeholder="Shadcn"
      />
      <FormPhoneInput
        control={form.control}
        name="phone"
        label="Phone"
      />
      <FormTextarea
        control={form.control}
        name="bio"
        label="Bio"
        placeholder="I'm a software engineer who loves to code and build things."
      />
    </FormModal>
  );
};

export default OrdersForm;
