module.exports = (mongoose) => {
  let questionsSchema = mongoose.Schema(
    {
      answer: {
        type: mongoose.Types.ObjectId,
        ref: "answers",
      },
      question: {
        type: String,
        required: true,
      },
      choices: [1, 2, 3],
    },
    {
      timestamps: true,
    }
  );

  const Question = mongoose.model("question", questionsSchema);
  return Question;
};
