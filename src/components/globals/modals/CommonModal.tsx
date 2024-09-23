import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
interface Props {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  footerActions?: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

const CommonModal: React.FC<Props> = ({
  subtitle,
  title,
  children,
  footerActions,
  onClose,
  isOpen,
}) => {
  return (
    <Credenza
      onOpenChange={(isOpen) => !isOpen && onClose && onClose()}
      open={isOpen}
    >
      <CredenzaContent className="sm:max-w-[425px]">
        <CredenzaHeader>
          <CredenzaTitle>{title}</CredenzaTitle>
          {subtitle && <CredenzaDescription>{subtitle}</CredenzaDescription>}
        </CredenzaHeader>
        <CredenzaBody>{children}</CredenzaBody>
        <CredenzaFooter>{footerActions}</CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};

export default CommonModal;
