const updateHording = async (req, res) => {
  //update tablename set  ? where id = ?
  //update new data -->req.body
  //id -->req.params.id

  try {
    const updatedHording = await hordingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Hording updated successfully",
      data: updatedHording,
    });
  } catch (err) {
    res.status(500).json({
      message: "error while update hording",
      err: err,
    });
  }
};

//routes.put("/updatehording/:id",hordingController.updateHording);
