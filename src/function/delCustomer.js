const { monCustomer } = require("../database/monCustomer");

async function delCustomer(data) {
    const { c_id } = data;

    const customerData = await monCustomer.findOne({ c_id: c_id });

    if (customerData == null) {
        return 400;
    }

    await customerData.deleteOne();

    return 200;
}

module.exports = {
    delCustomer
}
