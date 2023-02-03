import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"

export type BudgetProps = {
    budgetState: BudgetExpenseState
}

export function PaidExpenseTable(props: BudgetProps){
    return<>
    <table>
        <thead>
            <tr><th colSpan={3}>Paid Expenses</th></tr>
            <tr><th>Name</th><th>Cost</th></tr>
        </thead>
        {props.budgetState.paid.map(e=>
        <tbody>
            <tr>
                <td>{e.name}</td>
                <td>{e.cost}</td>
            </tr>
        </tbody>
        )}
    </table>
    </>
}