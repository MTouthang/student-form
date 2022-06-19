const Student = require("../model/Student");
const { validationResult } = require("express-validator");

// create student --
exports.createStudent = (req, res) => {
  const errors = validationResult(req);

  const student = new Student(req.body);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }

  student.save((err, student) => {
    if (err) {
      return res.status(400).json({
        err: `Student fail to save: ${err}`,
      });
    }
    res.json({
      name: student.name,
      department: student.department,
      email: student.email,
      mobile: student.mobile,
      address: student.address,
    });
  });
};

// get list of student --

exports.getStudentList = (req, res) => {
  Student.find().exec((err, studentList) => {
    if (err) {
      return res.status(400).json({
        err: `Student not able to fetch: ${err}`,
      });
    }
    return res.json(studentList);
  });
};
