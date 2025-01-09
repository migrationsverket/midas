import React, { createContext, useContext, useState, ReactNode } from "react";

// Create a context with a default value for `isValid` and the setter function
interface FormValidationContextType {
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
}

const FormValidationContext = createContext<FormValidationContextType | undefined>(undefined);

// Custom hook to access the context
export const useFormValidation = (): FormValidationContextType => {
  const context = useContext(FormValidationContext);
  if (!context) {
    throw new Error("useFormValidation must be used within a FormValidationProvider");
  }
  return context;
};

// Provider to wrap around the app and manage `isValid` state
interface FormValidationProviderProps {
  children: ReactNode; // Explicitly typing `children` prop
}

export const FormValidationProvider: React.FC<FormValidationProviderProps> = ({ children }) => {
  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <FormValidationContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </FormValidationContext.Provider>
  );
};
