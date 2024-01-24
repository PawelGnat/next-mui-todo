interface FormInfoProps {
  heading: string;
  text: string;
}

export const FormInfo: React.FC<FormInfoProps> = ({ heading, text }) => {
  return (
    <div className="w-full">
      <p className="text-sm text-primary/70 mb-2">{heading}</p>
      <div className="text-primary/70 bg-foreground px-3 py-2 rounded-md">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};
