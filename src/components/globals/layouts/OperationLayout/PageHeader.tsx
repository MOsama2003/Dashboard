import { EnhancedButton } from "@/components/ui/enhanced-button";
import React from "react";

interface Props {
  title?: string;
  createButtonText?: string;
  onCreate?: () => void;
}

const PageHeader: React.FC<Props> = ({
  title,
  createButtonText = "Create New",
  onCreate,
}) => {
  return (
    <div className="flex justify-between items-center font-semibold text-3xl">
      <h2>{title}</h2>
      {onCreate && (
        <EnhancedButton className="bg-primaryThemeColor" variant="ringHover" onClick={onCreate}>
          {createButtonText}
        </EnhancedButton>
      )}
    </div>
  );
};

export default PageHeader;
