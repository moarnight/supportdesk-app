const mongoose = require('mongoose');

const noteSchema = mongoose.Schema(
  {
    user: {
      // relate the schema to user's ObjectId
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // specify that we want to target User collection
      ref: 'User',
    },
    ticket: {
      // relate the schema to user's ObjectId
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // specify that we want to target User collection
      ref: 'Ticket',
    },
    text: {
      type: String,
      required: [true, 'Please add some text'],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', noteSchema);
