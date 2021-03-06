var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PaperworkSchema = new Schema({
  name: String,
  date: String,
  notes: String,
  total: Number,
  cash: Number,
  redeemed: Number,
  activated: Number,
  short: Number,
  drop: Number,
  credit: Number,
  visa: Number,
  mc: Number,
  amx: Number,
  discover: Number,
  store: String
});

var Paperwork = mongoose.model("Paperwork", PaperworkSchema);

module.exports = Paperwork;
