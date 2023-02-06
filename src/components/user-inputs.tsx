import { BudgetExpenseActions, BudgetExpenseState } from "../reducer/budget-manager-reducer"
import '../App.css'

export type BudgetProps = {
    budgetState: BudgetExpenseState,
    dispatch: React.Dispatch<BudgetExpenseActions>
}

export function BudgetExpenseInputs(props:BudgetProps){
    return<>
        <h1 className="site-title"> Budget Manager </h1>
        <section className="site-inputs">
            <div className="input">
                <input type="number" placeholder="Insert Budget..." onChange={event=>props.dispatch({type:"SET_BUDGET", payload: Number(event.target.value)})}/>
                <button onClick={()=>props.dispatch({type: "SET_REMAINDER"})}>Set Budget</button>
            </div>
            <div>
                <select id="select"name="essential" onChange={(e)=>props.dispatch({type:"SET_URGENCY", payload: e.target.value})}>
                                <option value="" ></option>
                                <option value="★" >★</option>
                                <option value="☆">☆</option>
                </select>
                <input id="select" type="text" placeholder="Expense name..." onChange={event=>props.dispatch({type:"SET_EXPENSE_NAME", payload: event.target.value})}/>
                <input id="selectNum" type="number" placeholder="Expense cost..." onChange={event=>props.dispatch({type:"SET_EXPENSE_COST", payload: Number(event.target.value)})}/>
                <button onClick={()=>props.dispatch({type: "CREATE_EXPENSE"})}>Create Expense</button>
            </div>
        </section>
   
    </>
}