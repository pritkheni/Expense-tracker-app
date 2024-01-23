# Expense Tracker

![Expense Tracker](./screenshot/expense-tracker.png)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Backend Compatibility](#backend-compatibility)
- [Contributing](#contributing)

## Description

Expense Tracker is a simple web application built with React.js and Tailwind CSS. It leverages React Context API and `useReducer` hooks to manage global state efficiently, allowing users to add and delete transactions and view the total income and expenses.

## Features

- **Add Transaction:** Users can easily add their transactions, whether it's income or an expense.

- **Delete Transaction:** Transactions can be deleted with a simple click, providing a smooth user experience.

- **Total Income and Expense:** The application provides a clear overview of the total income and total expenses.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pritkheni/Expense-tracker-app

   ```

2. Change into the project's frontend directory:

   ```bash
   cd 'Expense-tracker-app/frontend'

   ```

3. Install frontend dependencies in folder frontend:

   ```bash
   npm install

   ```

4. Change into the project's backend directory:

   ```bash
   cd 'Expense-tracker-app/backend'

   ```

5. Install backend dependencies in folder backend:

   ```bash
   npm install

   ```

6. Change into the project's backend directory:

   ```bash
   cd 'Expense-tracker-app'

   ```

7. Install root dependencies in folder Expense-tracker-app:

   ```bash
   npm install

   ```

8. Start the development server in folder Expense-tracker-app:
   ```bash
   npm run dev
   ```

## Backend Compatibility

The backend supports the following API routes:

GET Transactions:
Endpoint: http://localhost:3000/api/v1/transactions\n
Retrieves all transactions.

POST Transaction:
Endpoint: http://localhost:3000/api/v1/transactions\n
Adds a new transaction. The request body should be a JSON object withthe following structure:\n { "text": [title of expense], "amount": [your amount positive or negative] }.

DELETE Transaction:
Endpoint: http://localhost:3000/api/v1/transactions/:id\n
Deletes a transaction with the specified ID.

## Contributing

Contributions are welcome! Feel free to fork the repository, make your changes, and submit a pull request.
