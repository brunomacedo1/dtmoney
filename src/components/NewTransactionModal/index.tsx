import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransaction } from "../hooks/useTransaction";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import entradaImg from "../../assets/entradas.svg";
import saidaImg from "../../assets/saidas.svg";

export function NewTransactionModal() {
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('')
  const { isNewTransactionModalOpen, handleCloseNewTransactionModal, createTransaction } = useTransaction()
  

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      type,
      category,
      value,
    }

    await createTransaction(data);

    setTitle('');
    setType('');
    setValue(0);
    setCategory('');
    
    handleCloseNewTransactionModal();
  }

  return (
    <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    > 
      <button type="button" className="react-modal-close" onClick={handleCloseNewTransactionModal}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={(e) => handleCreateNewTransaction(e)}>
        <h2>Cadastrar Transação</h2>

        <input 
          onChange={e => setTitle(e.target.value)} 
          placeholder="Título" 
          value={title}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
            activeColor="green"
            value={type}
          >
            <img src={entradaImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
            activeColor="red"
            value={type}
          >
            <img src={saidaImg} alt="Saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          type="number" 
          placeholder="Valor"
          onChange={e => setValue(Number(e.target.value))}
          value={value}
        />
        <input 
          type="text" 
          placeholder="Categoria"
          onChange={e => setCategory(e.target.value)}
          value={category}
        />

        <button 
          type="submit" 
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}