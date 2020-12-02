const Lesson = require("../models/lesson")

module.exports.register = async function (req, res) {
  try {
    const lesson = await Lesson.create(req.body);
    console.log({ lesson });

    return res.send({ lesson });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.getLessonByNum = async function (req, res) {
    try {
        const lesson = await Lesson.find();

        if(!lesson){
            return res.status(404).json({ success: false, error: "Failed to fetch lessons" });
        }
        return res.status(200).json({ success: true, data: lesson });
     }catch(err){
    return res.status(400).json({ success: false, error: err});
    }
}

//refazer think it wont workkkk
module.exports.getLessonsOfUser = async function (req, res) {
    try{
        const lesson = await Lesson.find({studentCPF: req.params.cpf});
        if(!lesson){
          return res.status(404).json({ success: false, error: "Failed to fetch your lessons"});
        }
        return res.status(200).json({ success: true, data: lesson});
      }catch(err){
        return res.status(400).json({ success: false, error: err});
      }
};

module.exports.registerStudent = async function (req, res) {
    try{
        const lesson = await Lesson.findOne({lessonName: req.param.name});
        if(!lesson){
            return res.status(404).json({ success: false, error: "Failed to fetch your lessons"});
          }
        if(lesson.maxCapacity < 5){
            var students = lesson.registered;
            students.push(req.params.studentCPF);
            lesson.registered = students;
            lesson.maxCapacity = lesson.maxCapacity ++;
            await lesson.save();
            return res.status(200).json({ success: true, data: lesson })
        }
        return res.status(404).json({ success: false, error: "Lesson full"});
    }catch(err){
        return res.status(400).json({ success: false, error: err});
    }
}

module.exports.unregisterStudent = async function (req, res) {
    try{
        const lesson = await Lesson.findOne({lessonName: req.param.name});
        if(!lesson){
            return res.status(404).json({ success: false, error: "Failed to fetch your lessons"});
          }
        
        var students = lesson.registered;
        students.pop(req.params.studentCPF);
        lesson.registered = students;
        lesson.maxCapacity = lesson.maxCapacity --;
        await lesson.save();
        return res.status(200).json({ success: true, data: lesson })

    }catch(err){
        return res.status(400).json({ success: false, error: err});
    }
}
// module.exports.deleteProperty = async function (req, res) {
//     try {
//         const routine = await Exercise.findOneAndDelete({ id: req.params.id });
//         if(!routine){
//           return res.status(404).json({success: false, error: "Could not find requested routine"});
//         }
//         return res.status(200).json({success:true, msg: "Routine deleted", data: routine});
//       }catch(err){
//         return res.status(400).json({ success: false, error: err});
//       }
// }