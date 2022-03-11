import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionContextProvider } from "./context/TransactionContext";

Modal.setAppElement('#root');

export function App() {
  

  return (
    <TransactionContextProvider>
      <Header />
      <Dashboard />
      <NewTransactionModal />
      <GlobalStyle />
    </TransactionContextProvider>
  );
}