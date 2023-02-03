import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"

export type BudgetProps = {
    budgetState: BudgetExpenseState,
    dispatch: React.Dispatch<BudgetExpenseActions>
}

export function UnpaidExpenseTable(props:BudgetProps){
    return<>
        <h3>Budget Remaining: {props.budgetState.budgetRemainder}</h3>
    <table>
        <thead>
            <tr><th colSpan={4}>Unpaid Expenses</th></tr>
            <tr><th>Urgent</th><th>Name</th><th>Cost</th> <th>Status</th></tr>
        </thead>
        <tbody>
            {props.budgetState.unpaid.map(e =>
            <tr>
                <td>{e.urgent}</td>
                <td>{e.name}</td>
                <td>{e.cost}</td>
                <td>
                    <select name="essential" onChange={(e)=>props.dispatch({type:"MARK_PAID", payload: Number(e.target.value)})}>
                        <option value="" ></option>
                        <option value={e.id}>Paid</option>
                    </select>
                </td>
            </tr>
             )}
        </tbody>
    </table>

    </>
}