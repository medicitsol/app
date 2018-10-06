const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const ExpenseSchema = mongoose.Schema({

    voucherNo: Number,
    voucherDate: String,
    expenseCategory: String,
    expense: String,
    amount: Number,
    expenseNote: String,
    status: String

},
    {
        timestamps: true
    });


ExpenseSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('ExpenseSchema', ExpenseSchema);