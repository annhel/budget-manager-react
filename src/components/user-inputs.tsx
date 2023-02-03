import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"

export type BudgetProps = {
    budgetState: BudgetExpenseState,
    dispatch: React.Dispatch<BudgetExpenseActions>
}

export function BudgetExpenseInputs(props:BudgetProps){
    return<>
        <h1> Budget Manager </h1>
    <table>
        <thead>
        <tr><th colSpan={3}><input type="number" placeholder="Insert Budget..." onChange={event=>props.dispatch({type:"SET_BUDGET", payload: Number(event.target.value)})}/>
        </th> <th><button onClick={()=>props.dispatch({type: "CREATE_BUDGET"})}>Set Budget</button></th></tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <select name="essential" onChange={(e)=>props.dispatch({type:"SET_URGENCY", payload: e.target.value})}>
                        <option value="" ></option>
                        <option value="★" >★</option>
                        <option value="☆">☆</option>
                    </select>
                </td>
                <td> <input type="text" placeholder="Expense name..." onChange={event=>props.dispatch({type:"SET_EXPENSE_NAME", payload: event.target.value})}/></td>
                <td> <input type="number" placeholder="Expense cost..." onChange={event=>props.dispatch({type:"SET_EXPENSE_COST", payload: Number(event.target.value)})}/></td>
            </tr>
        </tbody>
    </table>
    <button onClick={()=>props.dispatch({type: "CREATE_EXPENSE"})}>Create Expense</button>
    <br />
    </>
}