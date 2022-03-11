import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { formatNumber } from '../../services/utils';
import { useTransaction } from '../hooks/useTransaction';
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposit += transaction.value
      acc.total += transaction.value
    } else {
      acc.withdraw += transaction.value
      acc.total -= transaction.value
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entrada" />
        </header>
        <strong>{formatNumber(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={saidaImg} alt="Saidas" />
        </header>
        <strong>{formatNumber(summary.withdraw)}</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatNumber(summary.total)}</strong>
      </div>
    </Container>
  )
}