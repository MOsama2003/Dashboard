import CommonModal from "@/components/globals/modals/CommonModal";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import React from "react";
import TodoForm from "./TodoForm";
import useBoolean from "@/hooks/useBoolean";

interface Props {}

const Modals: React.FC<Props> = () => {
  const { setFalse: onClose, setTrue: onOpen, value: isOpen } = useBoolean();
  return (
    <div className="mt-10">
      <h1 className="mb-2 text-lg font-bold">Modals</h1>
      <button className="btn" onClick={onOpen}>
        Open Modal
      </button>
      <div className="flex gap-5 flex-col max-w-[250px]">
        <CommonModal
          isOpen={isOpen}
          onClose={onClose}
          title="Modal Title"
          subtitle="Make changes to your profile here. Click save when you're done."
          footerActions={
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button className="ml-2">Save</Button>
            </div>
          }
        >
          <p className="p-5">Hello I'm inside a modal</p>
        </CommonModal>

        <TodoForm />
      </div>
    </div>
  );
};

export default Modals;
