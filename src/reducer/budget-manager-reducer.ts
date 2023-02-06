import { parseIsolatedEntityName } from "typescript";


// create a state type
export type Expense = {
    id: number,
    name: string,
    cost: number,
    urgent: string,
}

export type BudgetExpenseState = {
    budget: number,
    budgetRemainder: number,
    expenseName: string,
    expenseCost: number,
    expenseUrgency: string,
    totalPaid: number,
    totalUnpaid: number,
    unpaid: Expense[],
    paid: Expense[]
}


// create your actions
export type SetBudget = {type:"SET_BUDGET", payload: number};
export type SetRemainder = {type:"SET_REMAINDER"}
export type SetExpenseName = {type:"SET_EXPENSE_NAME", payload: string};
export type SetExpenseCost = {type:"SET_EXPENSE_COST", payload: number};
export type SetExpenseUrgency = {type:"SET_URGENCY", payload: string};
export type CreateExpense = {type:"CREATE_EXPENSE"};
export type MarkPaid = {type:"MARK_PAID", payload: number};
export type RemoveExpense = {type: "REMOVE", payload: string};
export type BudgetExpenseActions = SetBudget | SetExpenseName | SetExpenseCost | SetExpenseUrgency | CreateExpense | MarkPaid | SetRemainder | RemoveExpense

//create reducer to handle actions
export function budgetExpenseReducer(state: BudgetExpenseState, action:BudgetExpenseActions): BudgetExpenseState{
    const newState: BudgetExpenseState = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case "SET_BUDGET":
            newState.budget = action.payload;
            return newState;
        case "SET_REMAINDER": 
            if(newState.paid.length === 0){
                newState.budgetRemainder = newState.budget
                return newState
            }else{
                for(let e of newState.paid){
                    newState.budgetRemainder = newState.budget - e.cost
                }
                return newState;
            }
        case "SET_EXPENSE_NAME":
            newState.expenseName = action.payload;
            return newState;
        case "SET_EXPENSE_COST":
            newState.expenseCost = action.payload;
            return newState;
        case "SET_URGENCY":
            newState.expenseUrgency = action.payload;
            return newState;
        case "CREATE_EXPENSE":
            const expense: Expense = {name: newState.expenseName, cost: newState.expenseCost, urgent: newState.expenseUrgency, id: Math.random()};
            newState.unpaid.push(expense)
            newState.totalUnpaid += expense.cost;
            return newState;
        case "REMOVE":
            if(newState.unpaid.find(e => e.id.toString() === action.payload)){
                const exp: Expense | undefined = newState.unpaid.find(e => e.id.toString() === action.payload)
                if(!exp){
                    return newState;
                }
                newState.unpaid = newState.unpaid.filter(n => n.id.toString() !== action.payload);
                newState.totalUnpaid -= exp.cost;
                return newState;
            }else{
                const exp: Expense | undefined = newState.paid.find(e => e.id.toString() === action.payload)
                if(!exp){
                    return newState;
                }
                newState.paid = newState.paid.filter(n => n.id.toString() !== action.payload);
                newState.totalPaid -= exp.cost;
                return newState;
            }
        case "MARK_PAID":
            // find the paid for expense
            const exp: Expense | undefined = newState.unpaid.find(e => e.id === action.payload)
            // handle an undefined expense
            if(!exp){
                return newState;
            }

            newState.totalPaid += exp.cost;
            newState.totalUnpaid -= exp.cost;
            // handle the remaining budget
            if(exp.cost > newState.budgetRemainder){
                alert("You have exceeded your budget.");
                newState.budgetRemainder = newState.budget - exp.cost;
                newState.unpaid = newState.unpaid.filter(e => e.id !== action.payload);
                newState.paid.push(exp)
                return newState;
            } else{
                newState.budgetRemainder = newState.budget - exp.cost;
                newState.unpaid = newState.unpaid.filter(e => e.id !== action.payload)
                newState.paid.push(exp);
                return newState
            }
    }
}