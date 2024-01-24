import { Input } from "@/components/ui/input";

interface FormTableListItem {
  type: "text" | "number";
}

export const FormTableListItem: React.FC<FormTableListItem> = ({ type }) => {
  return <Input type={type} placeholder="" />;
};
