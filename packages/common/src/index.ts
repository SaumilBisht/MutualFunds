import { z } from "zod";

export const requestOTPSchema = z.object({
  mobile: z.string().regex(/^\d{10}$/, "Invalid Indian mobile number"),
});

export const verifyOTPSchema = z.object({
  mobile: z.string().regex(/^\d{10}$/, "Invalid Indian mobile number"),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

export const personalInfoSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required"),
  motherName: z.string().min(1, "Mother's name is required"),
  maritalStatus: z.enum(["SINGLE", "MARRIED", "DIVORCED", "WIDOWED", "OTHER"]),
  education: z.enum(["UNDERGRADUATE", "GRADUATE", "POST_GRADUATE", "DOCTORATE", "OTHER"]),
  gender: z.enum(["MALE", "FEMALE", "OTHER", "PREFER_NOT_TO_SAY"]),
  residentialStatus: z.enum(["RESIDENT_INDIVIDUAL", "NRI", "FOREIGN_NATIONAL"]),
  occupationType: z.enum([
    "PRIVATE_SECTOR",
    "PUBLIC_SECTOR",
    "GOVERNMENT_SERVICE",
    "BUSINESS",
    "PROFESSIONAL",
    "STUDENT",
    "RETIRED",
    "HOUSEWIFE",
    "OTHER",
  ]),
  countryOfBirth: z.string().optional(),
  nationality: z.string().optional(),
  // Optional Nominee Details (all fields optional)
  nomineeName: z.string().optional(),
  nomineeRelation: z.enum(["SPOUSE", "CHILD", "FATHER", "MOTHER", "OTHER"]).optional(),
  nomineeAllocation: z.number().min(1).max(100, "Allocation must be between 1-100%").optional(),
  nomineeIdType: z.enum(["PAN", "AADHAAR", "DRIVING_LICENCE", "PASSPORT"]).optional(),
  nomineeIdNumber: z.string().optional(),
  nomineeEmail: z.string().email("Invalid email address").optional().or(z.literal("")),
  nomineeMobile: z.string().regex(/^\d{10}$/, "Invalid mobile number").optional().or(z.literal("")),
  nomineeAddressLine1: z.string().optional(),
  nomineeAddressLine2: z.string().optional(),
  nomineeCity: z.string().optional(),
  nomineePincode: z.string().regex(/^\d{6}$/, "Invalid PIN code").optional().or(z.literal("")),
  nomineeCountry: z.string().optional(),
  nomineeDob: z.string().refine(val => {
    if (!val) return true; // Allow empty
    return /^\d{4}-\d{2}-\d{2}$/.test(val);
  }, "Date of Birth must be in YYYY-MM-DD format").optional(),
});

export const financialInfoSchema = z.object({
  annualIncome: z.enum([
    "BELOW_2_LAKH",
    "TWO_TO_FIVE_LAKH",
    "FIVE_TO_TEN_LAKH",
    "TEN_TO_TWENTYFIVE_LAKH",
    "ABOVE_25_LAKH",
    "OTHER",
  ]),
  incomeSource: z.enum([
    "SALARIED",
    "SELF_EMPLOYED",
    "BUSINESS_OWNER",
    "STUDENT",
    "RETIRED",
    "OTHER",
  ]),
  taxResidency: z.enum(["INDIA", "NRI", "FOREIGN_NATIONAL"]),
});

export const panDobSchema = z.object({
  pan: z.string()
    .trim()
    .length(10, "PAN must be 10 characters")
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN format"),
  dob: z.string()
    .refine(val => {
      return /^\d{4}-\d{2}-\d{2}$/.test(val);
    }, "Date of Birth must be in YYYY-MM-DD format"),
});