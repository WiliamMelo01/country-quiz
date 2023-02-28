import { createContext, ReactNode, useState } from "react";

type ScoreProviderProps = {
  children: ReactNode;
};

export interface scoreInterface {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const ScoreContext = createContext<scoreInterface | null>(null);

export default function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
