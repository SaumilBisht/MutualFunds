"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

interface PersonalDetailsForm {
  fatherName: string
  motherName: string
  maritalStatus: string
  education: string
  gender: string
  residentialStatus: string
  occupationType: string
  countryOfBirth: string
  nationality: string
  nomineeName: string
  nomineeRelation: string
  nomineeAllocation: string
  nomineeIdType: string
  nomineeIdNumber: string
  nomineeEmail: string
  nomineeMobile: string
  nomineeAddressLine1: string
  nomineeAddressLine2: string
  nomineeCity: string
  nomineePincode: string
  nomineeCountry: string
  nomineeDob: string
}

export default function Personal() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  
  // Nominee flow states
  const [wantsNominee, setWantsNominee] = useState<string>("") // "yes" or "no"
  const [nomineeOptOutConfirmed, setNomineeOptOutConfirmed] = useState(false)

  const [formData, setFormData] = useState<PersonalDetailsForm>({
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    education: "",
    gender: "",
    residentialStatus: "",
    occupationType: "",
    countryOfBirth: "India",
    nationality: "Indian",
    nomineeName: "",
    nomineeRelation: "",
    nomineeAllocation: "100",
    nomineeIdType: "",
    nomineeIdNumber: "",
    nomineeEmail: "",
    nomineeMobile: "",
    nomineeAddressLine1: "",
    nomineeAddressLine2: "",
    nomineeCity: "",
    nomineePincode: "",
    nomineeCountry: "India",
    nomineeDob: "",
  })

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/status`,
          { withCredentials: true }
        )
        const data = res.data
        if (data.currentStep < 3) router.push("/kyc")
        else if (data.currentStep > 3) router.push("/finance")
      } catch (err) {
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setError("")
  }

  const handleNomineeChoice = (choice: string) => {
    setWantsNominee(choice)
    setError("")
    if (choice === "yes") {
      setNomineeOptOutConfirmed(false)
    }
  }

  const validateForm = () => {
    // If user chose not to add nominee
    if (wantsNominee === "no") {
      if (!nomineeOptOutConfirmed) {
        setError("Please confirm that you do not want to nominate anyone at this time")
        return false
      }
      return true
    }

    // If user chose to add nominee, validate all fields
    if (wantsNominee === "yes") {
      // Check allocation percentage
      const allocation = parseFloat(formData.nomineeAllocation)
      if (isNaN(allocation) || allocation < 1 || allocation > 100) {
        setError("Nominee allocation must be between 1-100%")
        return false
      }

      // Validate ID number based on type
      if (formData.nomineeIdType === "PAN") {
        if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.nomineeIdNumber)) {
          setError("Invalid PAN format. Example: ABCDE1234F")
          return false
        }
      } else if (formData.nomineeIdType === "AADHAAR") {
        if (!/^\d{4}$/.test(formData.nomineeIdNumber)) {
          setError("Please enter last 4 digits of Aadhaar")
          return false
        }
      }
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!wantsNominee) {
      setError("Please select whether you want to add a nominee")
      return
    }

    if (!validateForm()) {
      return
    }

    try {
      setSubmitting(true)
      setError("")
      
      let payload: any = {
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        maritalStatus: formData.maritalStatus,
        education: formData.education,
        gender: formData.gender,
        residentialStatus: formData.residentialStatus,
        occupationType: formData.occupationType,
        countryOfBirth: formData.countryOfBirth,
        nationality: formData.nationality,
      }

      // Only include nominee data if user chose to add nominee
      if (wantsNominee === "yes") {
        payload = {
          ...payload,
          nomineeName: formData.nomineeName,
          nomineeRelation: formData.nomineeRelation,
          nomineeAllocation: parseFloat(formData.nomineeAllocation),
          nomineeIdType: formData.nomineeIdType,
          nomineeIdNumber: formData.nomineeIdNumber,
          nomineeEmail: formData.nomineeEmail,
          nomineeMobile: formData.nomineeMobile,
          nomineeAddressLine1: formData.nomineeAddressLine1,
          nomineeAddressLine2: formData.nomineeAddressLine2,
          nomineeCity: formData.nomineeCity,
          nomineePincode: formData.nomineePincode,
          nomineeCountry: formData.nomineeCountry,
          nomineeDob: formData.nomineeDob,
        }
      }

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/personal`,
        payload,
        { withCredentials: true }
      )

      if (res.data.success) {
        setSuccess(true)
        setTimeout(() => router.push("/finance"), 1500)
      }
    } catch (err: any) {
      console.error(err)
      setError(err?.response?.data?.error || "Failed to save personal details")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Details Saved!</h2>
          <p className="text-gray-600">Your personal information has been saved successfully.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">Personal</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Finance</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Bank</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Sign</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Personal Information</h1>
            <p className="text-gray-600 mt-2">Please provide your personal details</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Father&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    placeholder="Enter father's name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mother&apos;s Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    placeholder="Enter mother's name"
                    value={formData.motherName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                    <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marital Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select Marital Status</option>
                    <option value="SINGLE">Single</option>
                    <option value="MARRIED">Married</option>
                    <option value="DIVORCED">Divorced</option>
                    <option value="WIDOWED">Widowed</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select Education</option>
                    <option value="UNDERGRADUATE">Undergraduate</option>
                    <option value="GRADUATE">Graduate</option>
                    <option value="POST_GRADUATE">Post Graduate</option>
                    <option value="DOCTORATE">Doctorate</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Residential Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="residentialStatus"
                    value={formData.residentialStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select Residential Status</option>
                    <option value="RESIDENT_INDIVIDUAL">Resident Individual</option>
                    <option value="NRI">NRI</option>
                    <option value="FOREIGN_NATIONAL">Foreign National</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occupation Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="occupationType"
                    value={formData.occupationType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select Occupation Type</option>
                    <option value="PRIVATE_SECTOR">Private Sector</option>
                    <option value="PUBLIC_SECTOR">Public Sector</option>
                    <option value="GOVERNMENT_SERVICE">Government Service</option>
                    <option value="BUSINESS">Business</option>
                    <option value="PROFESSIONAL">Professional</option>
                    <option value="STUDENT">Student</option>
                    <option value="RETIRED">Retired</option>
                    <option value="HOUSEWIFE">Housewife</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Birth
                  </label>
                  <input
                    type="text"
                    name="countryOfBirth"
                    placeholder="Enter country of birth"
                    value={formData.countryOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    name="nationality"
                    placeholder="Enter nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40"
                  />
                </div>
              </div>
            </div>

            {/* Nominee Section with Choice */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2 pb-2 border-b">Nominee Details</h2>
              
              {/* Nominee Choice */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-4">
                  Do you want to add a nominee? <span className="text-red-500">*</span>
                </p>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:bg-gray-50"
                    style={{ borderColor: wantsNominee === "yes" ? "#3b82f6" : "#d1d5db" }}>
                    <input
                      type="radio"
                      name="nomineeChoice"
                      value="yes"
                      checked={wantsNominee === "yes"}
                      onChange={() => handleNomineeChoice("yes")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      Yes, I want to add a nominee now
                    </span>
                  </label>

                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition hover:bg-gray-50"
                    style={{ borderColor: wantsNominee === "no" ? "#3b82f6" : "#d1d5db" }}>
                    <input
                      type="radio"
                      name="nomineeChoice"
                      value="no"
                      checked={wantsNominee === "no"}
                      onChange={() => handleNomineeChoice("no")}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm font-medium text-gray-700">
                      No, I&apos;ll do it later
                    </span>
                  </label>
                </div>
              </div>

              {/* Show nominee form if Yes */}
              {wantsNominee === "yes" && (
                <div className="space-y-6 bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm text-blue-800">
                      Please provide complete nominee information. This ensures your investments are transferred to your chosen beneficiary.
                    </p>
                  </div>

                  {/* Basic Nominee Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nomineeName"
                        placeholder="Enter nominee's full name"
                        value={formData.nomineeName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                        required={wantsNominee === "yes"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Relationship <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="nomineeRelation"
                        value={formData.nomineeRelation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        required={wantsNominee === "yes"}
                      >
                        <option value="">Select Relationship</option>
                        <option value="SPOUSE">Spouse</option>
                        <option value="CHILD">Child</option>
                        <option value="FATHER">Father</option>
                        <option value="MOTHER">Mother</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="nomineeDob"
                        value={formData.nomineeDob}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        required={wantsNominee === "yes"}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Share Allocation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="nomineeAllocation"
                        placeholder="100"
                        min="1"
                        max="100"
                        value={formData.nomineeAllocation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                        required={wantsNominee === "yes"}
                      />
                      <p className="text-xs text-gray-600 mt-1">Percentage share (1-100%)</p>
                    </div>
                  </div>

                  {/* Identity Details */}
                  <div>
                    <h3 className="text-md font-semibold text-gray-700 mb-4">Identity Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ID Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="nomineeIdType"
                          value={formData.nomineeIdType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                          required={wantsNominee === "yes"}
                        >
                          <option value="">Select ID Type</option>
                          <option value="PAN">PAN</option>
                          <option value="AADHAAR">Aadhaar (Last 4 digits)</option>
                          <option value="DRIVING_LICENCE">Driving Licence</option>
                          <option value="PASSPORT">Passport/OCI</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ID Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomineeIdNumber"
                          placeholder={
                            formData.nomineeIdType === "PAN" ? "ABCDE1234F" :
                            formData.nomineeIdType === "AADHAAR" ? "1234 (last 4 digits)" :
                            "Enter ID number"
                          }
                          value={formData.nomineeIdNumber}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                        {formData.nomineeIdType === "AADHAAR" && (
                          <p className="text-xs text-gray-600 mt-1">For privacy, enter only last 4 digits</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-md font-semibold text-gray-700 mb-4">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="nomineeEmail"
                          placeholder="nominee@example.com"
                          value={formData.nomineeEmail}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="nomineeMobile"
                          placeholder="9876543210"
                          maxLength={10}
                          value={formData.nomineeMobile}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address Details */}
                  <div>
                    <h3 className="text-md font-semibold text-gray-700 mb-4">Address Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address Line 1 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomineeAddressLine1"
                          placeholder="House/Flat number, Building name"
                          value={formData.nomineeAddressLine1}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address Line 2
                        </label>
                        <input
                          type="text"
                          name="nomineeAddressLine2"
                          placeholder="Street, Locality (optional)"
                          value={formData.nomineeAddressLine2}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomineeCity"
                          placeholder="Enter city"
                          value={formData.nomineeCity}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PIN Code <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomineePincode"
                          placeholder="110001"
                          maxLength={6}
                          value={formData.nomineePincode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nomineeCountry"
                          placeholder="India"
                          value={formData.nomineeCountry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:opacity-40 bg-white"
                          required={wantsNominee === "yes"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Show opt-out declaration if No */}
              {wantsNominee === "no" && (
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="flex items-start mb-4">
                    <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-amber-900 mb-2">Nominee Declaration</h3>
                      <p className="text-sm text-amber-800 mb-4 leading-relaxed">
                        I hereby declare that I do not wish to nominate any person at this time. I understand and acknowledge that:
                      </p>
                      <ul className="text-sm text-amber-800 space-y-2 ml-4 list-disc mb-4">
                        <li>In the absence of a nominee, the legal heirs/successors as per applicable laws will be entitled to my investments</li>
                        <li>I can add or update nominee details at any time by contacting customer support or through my account settings</li>
                        <li>Adding a nominee helps ensure smooth transmission of assets to intended beneficiaries</li>
                        <li>This declaration is being recorded as per regulatory requirements</li>
                      </ul>
                      
                      <label className="flex items-start cursor-pointer">
                        <input
                          type="checkbox"
                          checked={nomineeOptOutConfirmed}
                          onChange={(e) => {
                            setNomineeOptOutConfirmed(e.target.checked)
                            setError("")
                          }}
                          className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="ml-3 text-sm font-medium text-amber-900">
                          I confirm that I have read and understood the above declaration, and I choose not to nominate anyone at this time <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Saving..." : "Save and Continue"}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
            <p>🔒 Your information is encrypted and stored securely</p>
          </div>
        </div>
      </div>
    </div>
  )
}
