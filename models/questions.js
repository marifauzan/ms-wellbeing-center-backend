module.exports = (mongoose) => {
  let questionsSchema = mongoose.Schema(
    {
      answers: {
        type: mongoose.Types.ObjectId,
        ref: "answers",
      },
      question: {
        type: String,
        required: true,
      },
      //belum yg ini choices[id_ansewer]
      choices: {
        type: Enum,
        required: true,
      //-----
      },
    },
    {
      timestamps: true,
    }
  );

  const Question = mongoose.model("question", questionsSchema);
  return Question;
};
