module.exports = (mongoose) => {
  let userSchema = mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      nama: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
    },
    {
      timestamps: true,
    }
  );

  const User = mongoose.model("user", userSchema);
  return User;
};
