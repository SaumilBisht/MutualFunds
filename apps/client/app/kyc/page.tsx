"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function KycPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [pan, setPan] = useState("");
  const [dob, setDob] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/status`,
          { withCredentials: true }
        )
        const data = res.data
        if (data.currentStep < 2) router.push("/mobile")
        else if (data.currentStep > 2) router.push("/personal")
      } catch (err) {
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [router])

  if (loading) return <div>Loading...</div>

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/ekyc/pan-dob-verify`,
        { pan, dob },
        { withCredentials: true }
      );
      const data = res.data;

      setMessage(data.message || "");

      if (data.nextStep === "personal") {
        router.push("/personal");
      } else if (data.nextStep === "aadhaar_upload") 
        {
        router.push("/aadhaar"); // create for offline Aadhaar upload
      }
    } catch (err: any) {
      alert(err.response?.data?.error || err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-8 p-4 border rounded-md">
      <h1 className="text-xl font-bold mb-4">PAN & Date of Birth Verification</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          placeholder="Enter PAN"
          value={pan}
          onChange={(e) => setPan(e.target.value.toUpperCase())}
          required
        />
        <input
          className="border p-2 w-full"
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
          disabled={submitting}
        >
          {submitting ? "Verifying…" : "Verify & Continue"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-gray-700">{message}</p>}
    </div>
  );
}