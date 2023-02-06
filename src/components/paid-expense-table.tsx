import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"
import '../App.css'

export type BudgetProps = {
    budgetState: BudgetExpenseState,
    dispatch: React.Dispatch<BudgetExpenseActions>
}

export function PaidExpenseTable(props: BudgetProps){
    return<>
    <section className="paid-expense">
        <div className="wrapper">
        <table className="table">
        <thead>
            <tr><th colSpan={3} className="table-title">Paid Expenses</th></tr>
            <tr className="table-subtitle"><th>Name</th><th>Cost</th> <th>Remove</th></tr>
        </thead>
        {props.budgetState.paid.map(e=>
        <tbody className="table-body">
            <tr>
                <td>{e.name}</td>
                <td>{e.cost}</td>
                <td>
                    <button className="delButton" onClick={() => props.dispatch({type:"REMOVE", payload: e.id.toString()})}>X</button>
                </td>
            </tr>
        </tbody>
        )}
    </table>
    <h3>Total Amount Paid: ${props.budgetState.totalPaid}</h3>
        </div>
    </section>
    </>
}