import mongoose, { Schema, model, models } from "mongoose";

const affiliateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
  type: String,
  required: true,
},

    phone: {
      type: String,
      default: "",
    },

    affiliateCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    commissionType: {
      type: String,
      enum: ["PERCENTAGE", "FIXED"],
      default: "PERCENTAGE",
    },

    commissionValue: {
      type: Number,
      default: 20,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    clicks: {
      type: Number,
      default: 0,
    },

    sales: {
      type: Number,
      default: 0,
    },

    revenue: {
      type: Number,
      default: 0,
    },

    commissionEarned: {
      type: Number,
      default: 0,
    },

    commissionPaid: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Affiliate ||
  model("Affiliate", affiliateSchema);