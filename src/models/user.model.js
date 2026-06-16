import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema(
  {
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://placehold.co/200x200`,
        localPath: '',
      },
    },
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      email: unique,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    forgotPasswordToken: {
      type: String,
    },
    forgotPasswordExpiry: {
      type: Date,
    },
    EmailVerificationEpiry: {
      type: Date,
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  
  // overwriting existing pasword (normal text to hash password)
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model('Users', userSchema);
