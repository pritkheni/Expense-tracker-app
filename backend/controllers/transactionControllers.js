const Transaction = require("../models/Trasaction");

//@desc     Get all trasactions
//@route    GET /api/v1/trasactions
//@access   Public
exports.getTrasactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    console.log(`ERROR: ${err.message}`.red);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//@desc     Add all trasactions
//@route    POST /api/v1/trasactions
//@access   Public
exports.addTrasactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transactions,
    });
  } catch (err) {
    console.log(err);
    if (err.name == "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

//@desc     Delete all trasactions
//@route    DELETE /api/v1/trasactions/:id
//@access   Publics
exports.deleteTrasactions = async (req, res, next) => {
  try {
    const trasaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!trasaction) {
      return res.status(404).json({
        success: false,
        error: "No Transaction found",
      });
    }
    return res.status(200).json({
      success: true,
      data: {
        id: trasaction._id,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
