const TransactionHistory = ({items}) => {
    return (
<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({type, amount, currency, id}) => {
			return <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td> 
			</tr>
		})
		}
  </tbody>
</table>
)}

export default TransactionHistory