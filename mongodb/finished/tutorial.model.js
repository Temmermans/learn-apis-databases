module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  /**
   * If you use this app with a front-end that needs id field instead of _id,
   * you have to override toJSON method that map default object to a custom object.
   */
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  /**
     * After finishing the steps above, we don’t need to write CRUD functions, Mongoose Model supports all of them:
    create a new Tutorial: object.save()
    find a Tutorial by id: findById(id)
    retrieve all Tutorials: find()
    update a Tutorial by id: findByIdAndUpdate(id, data)
    remove a Tutorial: findByIdAndRemove(id)
    remove all Tutorials: deleteMany()
    find all Tutorials by title: find({ title: { $regex: new RegExp(title), $options: “i” } })
     */
  const Tutorial = mongoose.model("tutorial", schema);

  return Tutorial;
};
