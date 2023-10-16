const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class BusDetailsModelSingleton {
  constructor() {
    if (!BusDetailsModelSingleton.instance) {
      this.busDetailsSchema = new Schema(
        {
          bus_no: {
            type: String,
            required: true,
          },
  
          driver_id: {
            type: String,
            required: true,
          },
  
          driver_name: {
            type: String,
            required: true,
          },
        },
        { timestamps: true }
      );
  
      BusDetailsModelSingleton.instance = mongoose.model("busdetails", this.busDetailsSchema);
    }
    return BusDetailsModelSingleton.instance;
  }
}

module.exports = BusDetailsModelSingleton;

