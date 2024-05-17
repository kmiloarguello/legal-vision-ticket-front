import { createContext } from "react";

interface LegalVisionContextType {}

const LegalVisionContext = createContext<LegalVisionContextType>(
  {} as LegalVisionContextType
);

export default LegalVisionContext;
