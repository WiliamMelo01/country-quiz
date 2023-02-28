import { createContext, ReactNode, useState } from "react";

type selectedOptionProps = {
  children: ReactNode;
};

export interface selectedOptionInterface {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const selectedOption = createContext<selectedOptionInterface | null>(
  null
);

export default function SelectedOptionProvider({
  children,
}: selectedOptionProps) {
  const [selected, setSelected] = useState('');

  return (
    <selectedOption.Provider value={{ selected, setSelected }}>
      {children}
    </selectedOption.Provider>
  );
}
