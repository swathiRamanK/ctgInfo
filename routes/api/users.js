const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// load input validation

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// load user model
const User = require('../../models/User');


router.post('/register', (req, res) => {
  console.log('req', req.body);

  // form validation
  var { errors, isValid } = validateRegisterInput(req.body);

  // check for isValid

  if (!isValid) {
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {

    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              name: user.name
            });
          }
        );

      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });


  });
});
router.post("/submit", (req, res) => {
  const email = req.body.email;
  const selectedWeek = req.body.selectedWeek;
  const selectedYear = req.body.selectedYear;
  let key = selectedYear + '_' + selectedWeek
  const data = req.body.data;

  User.findOne({ email }).then(user => {
    user.timesheet.map((element, i) => {
      if (Object.keys(element).includes('' + key)) {
        user.timesheet.splice(i, 1);
      }
    });
    let obj = {}
    obj[key] = data;
    console.log('obj', obj)
    user.timesheet.push(obj);
    user.save();
    return res.status(200).json();

  });

});

router.post("/getWeekData", (req, res) => {
  const email = req.body.email;
  const selectedWeek = req.body.selectedWeek;
  const selectedYear = req.body.selectedYear;
  let data = [];
  let key = selectedYear + '_' + selectedWeek

  User.findOne({ email }).then(user => {
    user.timesheet.forEach(element => {
      if (element[key]) {
        console.log('obj1', key);
        data = element[key];
      }
    });
    return res.status(200).json(data.length === 0 ? [] : data);
  });
})
module.exports = router;
