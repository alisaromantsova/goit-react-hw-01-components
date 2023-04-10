
import { Transaction } from './Transaction';
import css from './TransactionHistory.module.css'
export function TransactionHistory(props){

    return(
        <table className={css.transactionHistory}>
  <thead className={css.head}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {
 props.transactions.map(({id,type,amount,currency})=>{
   
    return(<Transaction key={id} type={type} amount={amount} currency={currency}/>)
 })
    }
  </tbody>
</table>
    )
}
