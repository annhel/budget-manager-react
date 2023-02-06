import { useReducer } from "react"
import { BudgetExpenseActions, budgetExpenseReducer, BudgetExpenseState } from "../reducer/budget-manager-reducer"
import { PaidExpenseTable } from "./paid-expense-table";
import { UnpaidExpenseTable } from "./unpaid-expense-table";
import { BudgetExpenseInputs } from "./user-inputs";


// create an initial state
const initialState: BudgetExpenseState = {
    budget: 0,
    budgetRemainder: 0,
    expenseName: "",
    expenseCost: 0,
    expenseUrgency: "",
    totalPaid:0,
    totalUnpaid: 0,
    unpaid: [],
    paid: []
}


export function BudgetManager(){

    const [budgetState, dispatch] = useReducer(budgetExpenseReducer, initialState);

    return<>
    <div className="container">
    <BudgetExpenseInputs budgetState ={budgetState} dispatch = {dispatch}/>
    <UnpaidExpenseTable budgetState ={budgetState} dispatch = {dispatch}/>
    <PaidExpenseTable budgetState={budgetState} dispatch = {dispatch}/>
    </div>
    </>
}