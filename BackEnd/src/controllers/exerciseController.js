const Exercise = require("../models/exercise")

module.exports.register = async function (req, res) {
  try {
    const routine = await Exercise.create(req.body);
    console.log({ routine });

    return res.send({ routine });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getExerciseByNum = async function (req, res) {
    try {
        const routine = await Exercise.find();

        if(!routine){
            return res.status(404).json({ success: false, error: "Failed to fetch routines" });
        }
        return res.status(200).json({ success: true, data: routine });
     }catch(err){
    return res.status(400).json({ success: false, error: err});
    }
}

module.exports.getExerciseOfUser = async  function (req, res) {
    try{
        const routine = await Exercise.find({studentCPF: req.params.cpf});
        if(!routine){
          return res.status(404).json({ success: false, error: "Failed to fetch your routines"});
        }
        return res.status(200).json({ success: true, data: routine});
      }catch(err){
        return res.status(400).json({ success: false, error: err});
      }
};

module.exports.deleteProperty = async function (req, res) {
    try {
        const routine = await Exercise.findOneAndDelete({ id: req.params.id });
        if(!routine){
          return res.status(404).json({success: false, error: "Could not find requested routine"});
        }
        return res.status(200).json({success:true, msg: "Routine deleted", data: routine});
      }catch(err){
        return res.status(400).json({ success: false, error: err});
      }
}