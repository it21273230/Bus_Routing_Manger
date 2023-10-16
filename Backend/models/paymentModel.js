const mongoose = require('mongoose');
const Schema = mongoose.Schema;

class PaymentModelSingleton {
  constructor() {
    if (!PaymentModelSingleton.instance) {
      this.paymentSchema = new Schema(
        {
          bus_id: {
            type: String,
            require: true,
          },
          date: {
            type: Date,
            require: true,
          },
          total: {
            type: Number,
            require: true,
          },
        },
        { timestamps: true }
      );
      PaymentModelSingleton.instance = mongoose.model('payment', this.paymentSchema);
    }
    return PaymentModelSingleton.instance;
  }
}

module.exports = PaymentModelSingleton;
