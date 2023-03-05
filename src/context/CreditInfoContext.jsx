import { createContext } from "react";

export const initialCreditData = {
  creditName: '',
  creditNumber: '',
  creditExp: '',
  creditCvc: ''
}

export const CreditInfoContext = createContext(initialCreditData);
