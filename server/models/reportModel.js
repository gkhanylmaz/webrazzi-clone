import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Report", reportSchema);
