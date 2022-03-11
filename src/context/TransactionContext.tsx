import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  createdAt: Date,
  value: number,
}

type TranscationInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionContextProviderProps {
  children: ReactNode
}

interface TransactionContextData{
  transactions: Transaction[],
  isNewTransactionModalOpen: boolean,
  handleOpenNewTransactionModal: () => void,
  handleCloseNewTransactionModal: () => void,
  createTransaction: (data: TranscationInput) => Promise<void>,
}

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionContextProvider = (props: TransactionContextProviderProps) => {
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  useEffect(() => {
    async function fetchTransactions (){
      const { data } = await api.get('transactions');
      setTransactions(data.transactions);
    }
    fetchTransactions();
  }, [])

  async function createTransaction(transaction: TranscationInput) {
    const response = await api.post('transactions', {...transaction, createdAt: new Date()})
    setTransactions([...transactions, response.data.transaction,])
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionContext.Provider value={{ 
      transactions, 
      isNewTransactionModalOpen, 
      handleOpenNewTransactionModal, 
      handleCloseNewTransactionModal,
      createTransaction
      }}
    > 
      {props.children}
    </TransactionContext.Provider>
  );
}