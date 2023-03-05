import { createContext } from "react";

export const creditData = {
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCvc: ''
}

export const CreditInfoContext = createContext(creditData);
