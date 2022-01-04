module.exports = (mongoose) => {
  let questionsSchema = mongoose.Schema({
    question: {
      type: String,
      required: true,
    },
    choices: [
      {
        type: mongoose.Types.ObjectId,
        ref: "answers",
      },
    ],
  });

  const Question = mongoose.model("question", questionsSchema);
  return Question;
};