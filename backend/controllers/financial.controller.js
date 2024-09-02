const Financial = require("../models/financial.model");

//create a new financial Record
exports.create = async (req, res) => {
  const { userId, description, date, amount, category, paymentMethod } =
    req.body;
  const newRecord = {
    userId,
    description,
    date,
    amount,
    category,
    paymentMethod,
  };
  await Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some Error occured while saving the financial record",
      });
    });
};

// Retrieve all financial records
exports.findAll = async (req, res) => {
  await Financial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Some Error occurred while retrieving financial records",
      });
    });
};

exports.findAllByUserId = async (req, res) => {
  const userId = req.params.userId;
  await Financial.findAll({ where: { userId } })
    .then((data) => {
      if (data.length > 0) {
        res.send(data); // ส่งข้อมูลกลับหากพบข้อมูลสำหรับ userId
      } else {
        res
          .status(404)
          .send({ message: `No records found for userId: ${userId}` }); 
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while retrieving financial records",
      });
    });
};

// Update Financial records
exports.update = (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  Financial.update(updates, { where: { id } })
    .then(([rowsUpdated]) => {
      if (rowsUpdated > 0) {
        res.send({ message: "Record updated successfully." });
      } else {
        res.status(404).send({ message: "No record found with the given ID." });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Something error occurred while updating the financial record.",
      });
    });
};

// delete Financial records
exports.delete = async (req, res) => {
  const id = req.params.id;
  try {
    const num = await Financial.destroy({ where: { id } });
    if (num === 1) {
      res.send({ message: `Record with id: ${id} was deleted successfully.` });
    } else {
      res.status(404).send({ message: `No record found with id: ${id}` });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Some error occurred while deleting the financial record",
    });
  }
};
