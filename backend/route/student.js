const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const { createStudent, getStudentList } = require("../controllers/student");

router.post(
  "/student/create",
  check("name")
    .isLength({ min: 5 })
    .withMessage("Name should be of min five characters"),
  check("email").isEmail().withMessage("Please enter a valid email"),
  check("mobile")
    .isLength({ min: 10 })
    .withMessage("Enter 10 digit mobile number"),
  check("address")
    .isLength({ min: 5 })
    .withMessage("Address should be of min five characters"),
  createStudent
);
router.get("/students", getStudentList);

module.exports = router;
