import { formatDate, formatNumber } from "../../services/utils";
import { useTransaction } from "../hooks/useTransaction";
import { Container } from "./styles";

export function TransactionTable() {
  
  const { transactions } = useTransaction();

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td 
                className={transaction.type === 'deposit' ? 'deposit' : 'withdraw'}
              >
                {formatNumber(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}