import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { authRouter } from "./routes/auth.js";
import { userRouter } from "./routes/user.js";
import { signRouter } from "./routes/signature.js";
import { ekycRouter } from "./routes/ekyc.js";
import { kycRouter } from "./routes/kyc.js";
import { nseRouter } from "./routes/nseRoutes.js";
import mfRoutes from "./routes/mfRoutes.js";
import paymentRouter from "./routes/payment.js";
import bankRouter from "./routes/bank.js";
import watchlistRouter from "./routes/watchlist.js";
import { scheduleAmfiFetch } from "./services/amfiService.js";

const app=express();
app.use(express.json());
app.use(cookieParser()); 
app.use(
  cors({
    origin: "http://localhost:3001", 
    credentials: true,       // allow cookies/auth headers
  })
);

app.get("/",async(req,res)=>{
  return res.json({
    "message":"works fine"
  })
})

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/signature',signRouter);
app.use("/ekyc", ekycRouter);
app.use("/kyc", kycRouter);
app.use('/api/nse',nseRouter)
app.use("/mf", mfRoutes);
app.use("/payments", paymentRouter);
app.use("/bank", bankRouter);
app.use("/api/watchlist", watchlistRouter);

console.log("Initializing AMFI service...");
scheduleAmfiFetch();

app.listen(3002, () => {
  console.log("Server listening on port 3002");
});

