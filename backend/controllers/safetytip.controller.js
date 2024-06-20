const { to, ReE, ReS } = require("../services/util.service");
const { SafetyTip } = require("../models");
// const logger = require('../lib/logging');

const create = async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  const body = req.body;

  if (!body.title) {
    // logger.error("SafetyTip controller - create : SafetyTip title cannot be empty");
    return ReE(res, new Error("Please enter a valid SafetyTip title."), 422);
  }

  [err, safetytip] = await to(SafetyTip.create(body));
  if (err) {
    // logger.error("SafetyTip Controller - create : SafetyTip could not be created", err);
    return ReE(res, err, 422);
  }

  return ReS(
    res,
    {
      message: "Successfully created new SafetyTip.",
      safetytip: safetytip.toObject(),
    },
    200
  );
};
module.exports.create = create;

const get = async function (req, res) {
  let safetytip_id, err, safetytip;
  if (!req.query._id) {
    // logger.error("SafetyTip Controller - get : SafetyTip Id is empty");
    return ReE(res, new Error("SafetyTip Id is empty"), 422);
  }

  safetytip_id = req.query._id;

  [err, safetytip] = await to(findByPk(safetytip_id));
  if (err) {
    // logger.error("SafetyTip Controller - get : SafetyTip not found", err);
    return ReE(res, err, 422);
  }

  res.setHeader("Content-Type", "application/json");

  return ReS(res, { safetytip: safetytip.toObject() });
};
module.exports.get = get;

const findByPk = async function (id) {
  let safetytip_id, err, safetytip;
  safetytip_id = id;

  [err, safetytip] = await to(SafetyTip.findById(safetytip_id));

  if (err || !safetytip) {
    // logger.error("SafetyTip Controller - findbypk : SafetyTip not found");
    throw new Error(" not found");
  }
  return safetytip;
};
module.exports.findSafetyTipById = findByPk;

const getAllSafetyTips = async function (req, res) {
  const { locationsst, typesofassaultst } = req.query;
  let currenttypeofassault = [
    "Physical Assault",
    "Rape/Sexual Assault",
    "Chain Snatching/Robbery",
    "Domestic Violence",
    "Stalking",
    "Ogling/Facial Expressions/Staring",
    "Taking photos without permission",
    "Indecent Exposure/Masturbation in public",
    "Touching /Groping",
    "Showing Pornography without consent",
    "Commenting/Sexual Invites",
    "Online Harassment",
    "Human Trafficking",
  ];
  if (typesofassaultst) {
    currenttypeofassault = typesofassaultst.split(",");
  }
  let err, safetyTips;
  console.log("hye" + locationsst);
  if (locationsst) {
    [err, safetyTips] = await to(
      SafetyTip.find({
        "address.state": locationsst,
        typeOfViolence: { $in: currenttypeofassault },
      })
    );
  } else {
    [err, safetyTips] = await to(
      SafetyTip.find({
        time: {
          typeOfViolence: { $in: currenttypeofassault },
        },
      })
    );
  }
  if (err) {
    // logger.error("Safety Tips Controller - get : Safety Tips not found", err);
    return ReE(res, err, 422);
  }

  res.setHeader("Content-Type", "application/json");

  return ReS(res, safetyTips);
};
module.exports.getAllSafetyTips = getAllSafetyTips;
