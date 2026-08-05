import { Schema, Document, models, model } from "mongoose";
export interface ICustomer extends Document {
  name: string;
  email: string;

  orderId: string;
  cfOrderId: string;

  amount: number;

  paymentStatus: "PENDING" | "PAID" | "FAILED";

  // Email
  emailSent: boolean;

  // Download (Old System)
  downloadToken?: string;
  downloadExpiresAt?: Date;
  downloadCount: number;

  // Reader Access (New System)
  bookAccess: boolean;

  readerToken?: string;
  readerTokenExpiry?: Date;

  // Reading Progress
  lastReadPage: number;
  totalPages: number;
  completed: boolean;
  completedAt?: Date;

  // Analytics
  lastReadAt?: Date;
  totalReadingTime: number;

  createdAt: Date;
  updatedAt: Date;

  affiliateCode?: string | null;
}

const customerSchema = new Schema<ICustomer>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    cfOrderId: {
      type: String,
      required: true,
      unique: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PENDING",
    },
    affiliateCode: {
      type: String,
      default: null,
    },

    emailSent: {
      type: Boolean,
      default: false,
    },

    // Old Download System
    downloadToken: String,

    downloadExpiresAt: Date,

    downloadCount: {
      type: Number,
      default: 0,
    },

    // Secure Reader
    bookAccess: {
      type: Boolean,
      default: true,
    },

    readerToken: String,

    readerTokenExpiry: Date,

    // Reading Progress
    lastReadPage: {
      type: Number,
      default: 1,
    },

    totalPages: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedAt: Date,

    // Analytics
    lastReadAt: Date,

    totalReadingTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Customer ||
  model<ICustomer>("Customer", customerSchema);