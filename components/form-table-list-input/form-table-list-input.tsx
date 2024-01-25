import { Input } from "@/components/ui/input";

interface FormTableListInput {
  type: "text" | "number";
  onChange?: (value: number) => void;
}

export const FormTableListInput: React.FC<FormTableListInput> = ({
  type,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    onChange && onChange(value);
  };

  return (
    <Input
      type={type}
      placeholder=""
      min={type === "number" ? 0 : undefined}
      onChange={handleChange}
      required
    />
  );
};
