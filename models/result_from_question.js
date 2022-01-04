module.exports = (mongoose) => {
  let resultfromQuestionSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
      result_parameter: {
        type: mongoose.Types.ObjectId,
        ref: "result_parameter",
      },
      total_score: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  const ResultFromQuestion = mongoose.model(
    "result_from_question",
    resultfromQuestionSchema
  );
  return ResultFromQuestion;
};
