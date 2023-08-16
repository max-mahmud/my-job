const {
  createJob,
  allJobs,
  deleteJob,
  singleJob,
  updatJob,
  tableJobs,
  applyForm,
  getAllApplyform,
  deleteApplyForm,
  updateLogo,
  allJobCount,
} = require("../controller/jobController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/create-job", authMiddleware, createJob);
router.get("/single-job/:id", singleJob);
router.put("/update-job/:id", authMiddleware, updatJob);
router.put("/update-logo", authMiddleware, updateLogo);
router.delete("/delete-job/:id", authMiddleware, deleteJob);
router.get("/all-jobs", allJobs);
router.get("/all-job-count", allJobCount);

router.get("/table-jobs", tableJobs);

router.post("/apply-job", applyForm);
router.get("/all-apply-job", getAllApplyform);
router.delete("/delete-apply-job/:applyId", authMiddleware, deleteApplyForm);

module.exports = router;
