import logoImg from '../../assets/logo.svg';
import { useTransaction } from '../hooks/useTransaction';
import { Container, Content } from './styles';

export function Header() {
  const {  handleOpenNewTransactionModal } = useTransaction();
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}