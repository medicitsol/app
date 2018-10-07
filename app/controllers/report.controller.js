const Item = require('../models/item-master.model.js');
const Inventory = require('../models/inventory.master.model');
const Billing = require('../models/billing.model');
const Expense = require('../models/expenses.model');



// Retrieve and return all items from the database.
exports.getBillingRevenueReport = (req, res) => {

    var reportType = req.params.reportType
    var dateFilter = {};


    if (reportType == 1) {
        dateFilter = { status: { $ne: 'DELETED' } }
    } else if (reportType == 2) {
        var lastWeek = new Date();

        dateFilter = { createdAt: { $gte: lastWeek.setDate(lastWeek.getDate() - 1) }, status: { $ne: 'DELETED' } }

    } else if (reportType == 3) {
        var date = new Date();
        dateFilter = { createdAt: { $gte: new Date(date.getFullYear(), date.getMonth(), 1) }, status: { $ne: 'DELETED' } }

    } else if (reportType == 4) {
        dateFilter = { createdAt: { $gte: new Date(new Date().getFullYear(), 0, 1) }, status: { $ne: 'DELETED' } }

    }

    var responsePayload = []


    var total = 0;


    Billing.find(dateFilter).sort({ billDate: 1 })
        .then(bill => {



            bill.forEach(element => {

                total = element.consultationFee + element.pharmaceuticalFee + element.laboratoryFee + element.ECGFee + element.CBSFee + element.procedureFee + element.otherFee;


                var responseWithTotal = {
                    createdDate: element.createdAt,
                    editedDate: element.updatedAt,
                    billDate: element.billDate,
                    consultationFee: element.consultationFee,
                    pharmaceuticalFee: element.pharmaceuticalFee,
                    laboratoryFee: element.laboratoryFee,
                    ECGFee: element.ECGFee,
                    CBSFee: element.CBSFee,
                    procedureFee: element.procedureFee,
                    otherFee: element.otherFee,
                    totalFee: total
                }

                responsePayload.push(responseWithTotal)



            });


            res.send(responsePayload);







            // Billing.aggregate(


            //     [{
            //         $group: {
            //             billDate: null,
            //             itemQuantity: {
            //                 $sum: "$itemQuantity"
            //             }
            //         }
            //     }])

            //     .then(qtyBalance => {
            //         res.send(qtyBalance);



        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bills."
            });
        });

};














// Retrieve and return all items from the database.
exports.getExpenseReport = (req, res) => {

    var reportType = req.params.reportType
    var dateFilter = {};


    if (reportType == 1) {
        dateFilter = {}
    } else if (reportType == 2) {
        var lastWeek = new Date();

        dateFilter = { createdAt: { $gte: lastWeek.setDate(lastWeek.getDate() - 1) } }

    } else if (reportType == 3) {
        var date = new Date();
        dateFilter = { createdAt: { $gte: new Date(date.getFullYear(), date.getMonth(), 1) } }

    } else if (reportType == 4) {
        dateFilter = { createdAt: { $gte: new Date(new Date().getFullYear(), 0, 1) } }

    }

    var responsePayload = []


    var total = 0;


    // Expense.find(dateFilter)

    Expense.aggregate(

        [
            {
                $match: dateFilter,
            },

            {
                $group: {
                    _id: {
                        voucherDate: '$voucherDate',
                        // expenseCategory: '$expenseCategory'
                    },
                    total: {
                        $sum: "$amount"
                    },
                    expenses: {
                        $push: {
                            expense: "$expense",
                            expenseNote: "$expenseNote",
                            status: "$status",
                            voucherDate: '$voucherDate',
                            expenseCategory: '$expenseCategory',
                            amount: '$amount'
                        }
                    }
                }

            }])

        .then(expense => {

            res.send(expense);


        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bills."
            });
        });

};





// Retrieve and return all items from the database.
exports.getRevenueReport = (req, res) => {

    var reportType = req.params.reportType
    var dateFilter = {};


    if (reportType == 1) {
        dateFilter = {}
    } else if (reportType == 2) {
        var lastWeek = new Date();

        dateFilter = { createdAt: { $gte: lastWeek.setDate(lastWeek.getDate() - 1) } }

    } else if (reportType == 3) {
        var date = new Date();
        dateFilter = { createdAt: { $gte: new Date(date.getFullYear(), date.getMonth(), 1) } }

    } else if (reportType == 4) {
        dateFilter = { createdAt: { $gte: new Date(new Date().getFullYear(), 0, 1) } }

    }

    var revenuePayload = []

    var profit = {
        revenue: null,
        expense: null
    }


    var total = 0;

    Expense.aggregate(

        [
            {
                $match: dateFilter,
            },

            {
                $group: {
                    _id: {
                        voucherDate: '$voucherDate',
                    },
                    total: {
                        $sum: "$amount"
                    }
                }

            }])

        .then(expense => {

            // res.send(expense);




            // =================================================
            Billing.aggregate(

                [
                    {
                        $match: dateFilter,
                    },

                    {
                        $group: {
                            _id: {
                                billDate: '$billDate',
                            },
                            // total: {
                            //     $sum: ['$consultationFee', '$otherFee']
                            // },
                            billingRevenue: {
                                $push: {
                                    consultationFee: "$consultationFee",
                                    pharmaceuticalFee: "$pharmaceuticalFee",
                                    laboratoryFee: "$laboratoryFee",
                                    ECGFee: '$ECGFee',
                                    CBSFee: '$CBSFee',
                                    procedureFee: '$procedureFee',
                                    otherFee: '$otherFee'
                                }
                            }
                        }

                    }])

                .then(revenue => {

                    var total = 0;
                    var revenueArray = [];
                    var totalRev = 0;

                    revenue.forEach(element => {

                        // total = element.consultationFee + element.pharmaceuticalFee + element.laboratoryFee + element.ECGFee + element.CBSFee + element.procedureFee + element.otherFee;

                        // var totalRevArray = []
                        // totalRevArray = element._id['billingRevenue'];

                        // totalRevArray.forEach(revAr => {

                        //     totalRev = revAr.consultationFee + revAr.otherFee;

                        // });

                        // var elemArr = {
                        //     date: element._id,
                        //     total: totalRev
                        // }


                        // elemArr = element._id
                        revenueArray.push(element);
                    });


                    var profit = {
                        revenue: revenueArray,
                        expense: expense
                    }

                    res.send(profit);

                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while retrieving bills."
                    });
                });
            // ==============================================






        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving bills."
            });
        });



};