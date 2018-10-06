const Expense = require('../models/expenses.model.js');

// Create and Save a new Item
exports.create = (req, res) => {



    Expense.find().limit(1).sort({ $natural: -1 })
        .then(lastExpense => {

            var expenseNumber = 0;

            if (lastExpense.length > 0) {
                expenseNumber = lastExpense[0].voucherNo + 1;
            } else {
                expenseNumber = 0 + 1;
            }





            // Create an Item
            const expense = new Expense({

                voucherNo: expenseNumber,
                voucherDate: req.body.voucherDate,
                expenseCategory: req.body.expenseCategory,
                expense: req.body.expense,
                amount: req.body.amount,
                expenseNote: req.body.expenseNote,
                status: 'NEW'

            });



            // Save Item in the database
            expense.save()
                .then(data => {

                    res.send(data);



                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Item."
                    });
                });



        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving items."
            });
        });

};









// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
    // Item.find()
    //     .then(items => {
    //         res.send(items);
    //     }).catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while retrieving items."
    //         });
    //     });




    Expense.paginate({ status: { $ne: 'DELETED' } }, { limit: 20 })
        .then(expense => {
            res.send(expense);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving items."
            });
        });

};










// Update an item identified by the itemId in the request
exports.expenseDelete = (req, res) => {

    // Find item and update it with the request body
    Expense.findByIdAndUpdate(req.params.expenseNo, {


        status: 'DELETED'

    }, { new: true })
        .then(expense => {
            if (!expense) {
                return res.status(404).send({
                    message: "Expense not found"
                });
            }
            res.send(expense);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Expense not found"
                });
            }
            return res.status(500).send({
                message: "Error updating"
            });
        });
};





