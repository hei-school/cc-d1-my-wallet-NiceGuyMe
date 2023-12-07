import { Wallet } from "./Wallet";

function main(): void {
  const wallet = new Wallet();
  const readline = require("readline-sync");

  while (true) {
    console.log("\n===== Wallet Management =====");
    console.log("1. Add Income");
    console.log("2. Add Expense");
    console.log("3. Check Balance");
    console.log("4. View Transactions");
    console.log("5. Exit");

    const choice = readline.question("Enter your choice (1-5): ");

    switch (choice) {
      case "1":
        const income = parseFloat(readline.question("Enter income amount: $"));
        wallet.addIncome(income);
        console.log("Income added successfully!");
        break;

      case "2":
        const expense = parseFloat(
          readline.question("Enter expense amount: $")
        );
        wallet.addExpense(expense);
        console.log("Expense added successfully!");
        break;

      case "3":
        console.log(wallet.checkBalance());
        break;

      case "4":
        console.log("\n===== Transaction History =====");
        console.log(wallet.viewTransactions());
        break;

      case "5":
        console.log("Exiting wallet management. Goodbye!");
        process.exit(0);

      default:
        console.log("Invalid choice. Please enter a number between 1 and 5.");
    }
  }
}

main();
