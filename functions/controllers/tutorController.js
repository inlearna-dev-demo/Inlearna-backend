const Tutor = require("./../models/tutormodel");

exports.getAllTutors = async (req, res) => {
  try {
    const tutorsList = await Tutor.find();
    res.status(200).json({
      status: "success",
      data: {
        tutorsList,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
