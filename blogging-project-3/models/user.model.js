import mongoose from "mongoose";
import { randomBytes, createHmac } from "crypto";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return;

  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static("matchPassword", async function(email,password){
  const user = await this.findOne({email});
  console.log(user)
  if(!user)  throw new Error("User not found");

  const salt = user.salt;
  const hashedPassword = user.password;

  const userProvidedhash = createHmac("sha256", salt)
  .update(password)
  .digest("hex");

  if(hashedPassword !== userProvidedhash) throw new Error("Incorrect Password")

  return {...user,password:undefined,salt:undefined};
})

export const user = mongoose.model("user", userSchema);


