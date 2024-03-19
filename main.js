
let expenses = [];

function addExpense() {
    const expenseName = document.getElementById("expenseName").value;
    const expenseCategory = document.getElementById("expenseCategory").value;
    const expenseCost = parseFloat(document.getElementById("expenseCost").value);

    if (expenseName && expenseCategory && !isNaN(expenseCost)) {
        const expense = {
            name: expenseName,
            category: expenseCategory,
            cost: expenseCost
        };
        expenses.push(expense);
        saveExpensesToLocalStorage();
        displayExpenses();
        clearFields();

        // New change: Alert a message when an expense is added
        alert("Expense added successfully!");
    } else {
        alert("Please enter valid expense details.");
    }
}

function displayExpenses() {
    const expenseList = document.getElementById("expenseList");
    expenseList.innerHTML = "";
    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement("div");
        expenseItem.classList.add("expense-item");
        expenseItem.innerHTML = `
            <span>${expense.name} (${expense.category}) - $${expense.cost}</span>
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(expenseItem);
    });
}

function editExpense(index) {
    const newExpenseName = prompt("Enter new expense name:");
    const newExpenseCategory = prompt("Enter new expense category:");
    const newExpenseCost = parseFloat(prompt("Enter new expense cost:"));
    if (newExpenseName && newExpenseCategory && !isNaN(newExpenseCost)) {
        expenses[index].name = newExpenseName;
        expenses[index].category = newExpenseCategory;
        expenses[index].cost = newExpenseCost;
        saveExpensesToLocalStorage();
        displayExpenses();
    } else {
        alert("Invalid input. Please try again.");
    }
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    saveExpensesToLocalStorage();
    displayExpenses();
}

function clearFields() {
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseCategory").value = "";
    document.getElementById("expenseCost").value = "";
}

function saveExpensesToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function loadExpensesFromLocalStorage() {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
        expenses = JSON.parse(storedExpenses);
    }
    displayExpenses(); // Display expenses after loading from local storage
}

loadExpensesFromLocalStorage();
