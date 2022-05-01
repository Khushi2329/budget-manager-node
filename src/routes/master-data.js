const express = require("express");
const masterDataRouter = express.Router();
const partyMasterModel = require("./../models/party-master");
const gstMasterModel = require("./../models/gst-master");
const stationMasterModel = require("./../models/station-master");
const branchMasterModel = require("./../models/branch-master");
const lorryExpenseMasterModel = require("./../models/lorry-expense-master");
const vehicleTypeMasterModel = require("./../models/vehicle-type-master");
const vehicleModelMasterModel = require("./../models/vehicle-model-master");
const tyreBatteryMakeMasterModel = require("./../models/tyre-battery-make-master");
const truckMakeMasterModel = require("./../models/truck-make-master");
const statesMasterModel = require("./../models/states-master");
const sparePartsRepairsMasterModel = require("./../models/spare-parts-repairs-master");

const isAuth = require("../middleware/middleware");

// POST master

masterDataRouter.post("/party-master", isAuth, async (req, res) => {
  console.log(req.body);
  let partyMaster = new partyMasterModel(req.body);
  const existingParty = await partyMasterModel.find({
    name: req.body.name,
  });
  console.log(existingParty, "existingParty");
  if (existingParty.length) {
    return res.status(409).send({ message: "Already Exists" });
  }

  partyMaster
    .save()
    .then((update) => {
      res.status(201).send({ message: "Created Successfully", data: update });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/gst-master", isAuth, async (req, res) => {
  console.log(req.body);
  let gstMaster = new gstMasterModel(req.body);
  const existingGst = await gstMasterModel.find({
    gstNo: req.body.gstNo,
  });
  console.log(existingGst, "existingGst data");
  if (existingGst.length) {
    return res.status(409).send({ message: "Already Exists" });
  }

  gstMaster
    .save()
    .then((update) => {
      res.status(201).send({ message: "Created Successfully", data: update });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/station-master", isAuth, async (req, res) => {
  console.log(req.body);
  let stationMaster = new stationMasterModel(req.body);
  const existingStation = await stationMasterModel.find({
    name: req.body.name,
  });
  console.log(existingStation, "existingstation data");
  if (existingStation.length) {
    return res.status(409).send({ message: "Already Exists" });
  }

  stationMaster
    .save()
    .then((update) => {
      res.status(201).send({ message: "Created Successfully", data: update });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/branch-master", isAuth, async (req, res) => {
  console.log(req.body);
  let branchMaster = new branchMasterModel(req.body);
  const existingBranch = await branchMasterModel.find({
    name: req.body.name,
    code: req.body.code,
  });
  console.log(existingBranch, "existingbranch data");
  if (existingBranch.length) {
    return res.status(409).send({ message: "Already Exists" });
  }

  branchMaster
    .save()
    .then((update) => {
      res.status(201).send({ message: "Created Successfully", data: update });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/lorry-expense-master", isAuth, async (req, res) => {
  console.log(req.body);
  let lorryExpenseMaster = new lorryExpenseMasterModel(req.body);

  lorryExpenseMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post(
  "/spare-parts-repairs-master",
  isAuth,
  async (req, res) => {
    console.log(req.body);
    let sparePartsRepairsMaster = new sparePartsRepairsMasterModel(req.body);

    sparePartsRepairsMaster
      .save()
      .then((create) => {
        res.status(201).send({ message: "Created Successfully", data: create });
      })
      .catch((e) => {
        res.status(500).send({ message: "Creation Failed", error: e });
      });
  }
);

masterDataRouter.post("/states-master", isAuth, async (req, res) => {
  console.log(req.body);
  let statesMaster = new statesMasterModel(req.body);

  statesMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/truck-make-master", isAuth, async (req, res) => {
  console.log(req.body);
  let truckMakeMaster = new truckMakeMasterModel(req.body);

  truckMakeMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/tyre-battery-make-master", isAuth, async (req, res) => {
  console.log(req.body);
  let tyreBatterymakeMaster = new tyreBatteryMakeMasterModel(req.body);

  tyreBatterymakeMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/vehicle-model-master", isAuth, async (req, res) => {
  console.log(req.body);
  let vehicleModelMaster = new vehicleModelMasterModel(req.body);

  vehicleModelMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

masterDataRouter.post("/vehicle-type-master", isAuth, async (req, res) => {
  console.log(req.body);
  let vehicleTypeMaster = new vehicleTypeMasterModel(req.body);

  vehicleTypeMaster
    .save()
    .then((create) => {
      res.status(201).send({ message: "Created Successfully", data: create });
    })
    .catch((e) => {
      res.status(500).send({ message: "Creation Failed", error: e });
    });
});

// GET

masterDataRouter.get("/party-master", isAuth, async (req, res) => {
  let data = await partyMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/gst-master", isAuth, async (req, res) => {
  let data = await gstMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/station-master", isAuth, async (req, res) => {
  let data = await stationMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/branch-master", isAuth, async (req, res) => {
  let data = await branchMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/lorry-expense-master", isAuth, async (req, res) => {
  let data = await lorryExpenseMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get(
  "/spare-parts-repairs-master",
  isAuth,
  async (req, res) => {
    let data = await sparePartsRepairsMasterModel.find({});
    res.send({ data: data });
  }
);

masterDataRouter.get("/states-master", isAuth, async (req, res) => {
  let data = await statesMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/truck-make-master", isAuth, async (req, res) => {
  let data = await truckMakeMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/tyre-battery-make-master", isAuth, async (req, res) => {
  let data = await tyreBatteryMakeMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/vehicle-model-master", isAuth, async (req, res) => {
  let data = await vehicleModelMasterModel.find({});
  res.send({ data: data });
});

masterDataRouter.get("/vehicle-type-master", isAuth, async (req, res) => {
  let data = await vehicleTypeMasterModel.find({});
  res.send({ data: data });
});

module.exports = masterDataRouter;
