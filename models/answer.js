module.exports = (mongoose) => {
  let answerSchema = mongoose.Schema({
    answer: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  });

  const Answer = mongoose.model("answer", answerSchema);
  return Answer;
};
