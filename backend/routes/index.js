const express = require("express");
const router = express.Router();

const safetyTipController = require("../controllers/safetytip.controller.js");
const incidentController = require("../controllers/incident.controller.js");

// Define your routes
router.post("/safetytip", safetyTipController.create); // create safetytip
router.post("/incident", incidentController.create); // create incident

router.get("/incident", incidentController.get); // get incident
router.get("/safetytip", safetyTipController.get); // get safetytip
router.get("/getAllIncidents", incidentController.getAllIncidents); // get all incidents
router.get("/getIncidentFormData", incidentController.getIncidentFormData); // get incident form data
router.get("/getAllSafetyTips", safetyTipController.getAllSafetyTips); // get all safety tips

// Default route
router.get("/", (req, res) => {
  res.send("Kaam Kar Rha Hai Bro");
});

module.exports = router;
