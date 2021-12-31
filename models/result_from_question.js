module.exports = (mongoose) => {
  let resultfromQuestionSchema = mongoose.Schema(
    {
      username: {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
      condition: {
        type: mongoose.Types.ObjectId,
        ref: "result_parameter",
      },
      total_score: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  const ResultFromQuestion = mongoose.model("result_from_question", resultfromQuestionSchema);
  return ResultFromQuestion;
};
