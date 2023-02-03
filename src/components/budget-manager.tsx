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
    unpaid: [],
    paid: []
}


export function BudgetManager(){

    const [budgetState, dispatch] = useReducer(budgetExpenseReducer, initialState);

    return<>
    <BudgetExpenseInputs budgetState ={budgetState} dispatch = {dispatch}/>
    <UnpaidExpenseTable budgetState ={budgetState} dispatch = {dispatch}/>
    <PaidExpenseTable budgetState={budgetState}/>
    </>
}