import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

export function useTransaction() {
  return useContext(TransactionContext)
}