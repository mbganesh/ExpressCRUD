var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var StaffModel = require("../Models/Staff.model");
var generateUniqueId = require("generate-unique-id");
mongoose.connect("mongodb://localhost/netcom_staff");

router.get("/", function (req, res, next) {
  res.send("Netcom - Works");
});

// Add
router.post("/create-staff", (req, res) => {
  const id = generateUniqueId({
    length: 4,
    useLetters: false,
  });

  var staffId = "staff-" + id;

  console.log(staffId);

  var AddData = new StaffModel({
    staffId: staffId,
    name: req.body.name,
    position: req.body.position,
    age: req.body.age,
    number: req.body.number,
  });

  AddData.save((err, AddData) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ message: "ok", object: AddData, staffId: staffId });
    }
  });
});

// Remove
router.post('/remove' , (req ,res) => {
  var id = req.body.staffId
  StaffModel.findOneAndRemove({staffId:id} , (err)=>{
    if(!err){
      res.json({message:"Removed"})
    }else{
      res.json({message:"NoData"})
    }
  })
})

// FindOne
router.post("/find", (req, res) => {
  console.log(req.body);
  var id = req.body.staffId;

  //  try {
  //  await
  StaffModel.find({ staffId: id }, function (err, docs) {
    if (err) {
      res.json({ foundObject: "NoData" });
    } else {
      res.json({ foundObject: docs[0] });
      console.log(docs[0]);
    }
  });
  //  } catch (error) {
  //   res.json({ foundObject: "NoData" });
  //  }
});

// Update
router.post("/update", (req, res) => {
  console.log(req.body);
  var id = req.body.staffId;

  var newObj = req.body.data;
  StaffModel.findOneAndUpdate({ staffId: id }, newObj, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json({message:"Updated"});
    }
  });
});

// Find : List All Data
router.get("/staff-list", (req, res) => {
  StaffModel.find((err, datas) => {
    if (err) {
      res.json(err);
    } else {
      res.json(datas);
    }
  });
});

module.exports = router;
