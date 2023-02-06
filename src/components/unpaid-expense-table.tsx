import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"
import '../App.css'

export type BudgetProps = {
    budgetState: BudgetExpenseState,
    dispatch: React.Dispatch<BudgetExpenseActions>
}

export function UnpaidExpenseTable(props:BudgetProps){
    return<>
    <section>
        <div className="wrapper">
        <h3>Budget Remaining: {props.budgetState.budgetRemainder}</h3>
        </div>
    </section>

    <section>
        <div className="wrapper">
        <table className="table">
        <thead>
            <tr><th colSpan={5} className="table-title">Unpaid Expenses</th></tr>
            <tr className="table-subtitle"><th>Essential</th><th>Name</th><th>Cost</th> <th>Status</th> <th>Remove</th></tr>
        </thead>
        <tbody className="table-body">
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
                <td>
                    <button className="delButton" onClick={() => props.dispatch({type:"REMOVE", payload: e.id.toString()})}>X</button>
                </td>
            </tr>
            )}
        </tbody>
        </table>
        <h3>Total Amount Unpaid: ${props.budgetState.totalUnpaid}</h3>
        </div>
    </section>

    </>
}