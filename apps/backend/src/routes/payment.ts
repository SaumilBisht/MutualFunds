import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.post("/redirect", async (req, res) => {
  try {
    //NSE LOGIC
  } catch (error) {
    console.error("Payment Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process redirect request",
    });
  }
});

export default router;
