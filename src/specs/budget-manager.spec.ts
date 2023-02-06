import{BudgetExpenseState, budgetExpenseReducer} from "../reducer/budget-manager-reducer"

test("SET_BUDGET", ()=>{
    const budgetState: BudgetExpenseState ={
        budget: 1000,
        budgetRemainder: 1000,
        expenseName: "",
        expenseCost: 0,
        expenseUrgency: "",
        totalPaid: 0,
        totalUnpaid: 0,
        unpaid: [],
        paid: [],
    }

    const nextState = budgetExpenseReducer(budgetState, {type:"SET_BUDGET", payload:1000});
    expect(nextState.budget).toBe(1000);
})