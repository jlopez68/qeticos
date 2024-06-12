import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, trim: true },
    cedula: {type: Number },
    apellido: { type: String, trim: true },
    ciudad:   { type: String, trim: true },
    celular:  { type: Number,  trim: true },
    tipo_usuario:{ type: String, trim: true },
    password: { type: String, required: true },
    puntos: {type: Number },
    posicion: {type: Number },
    t1:  { type: String, trim: true },
    p1: {type: Number},
    t2:  { type: String, trim: true },
    p2: {type: Number},
    t3:  { type: String, trim: true },
    p3: {type: Number},
    t4:  { type: String, trim: true },
    p4: {type: Number},
    marca:{ type: String, trim: true },
    profesional:{ type: String, trim: true },
  },
  { 
    timestamps: true,
    versionKey: false,
  }
);
/*
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
*/
export default mongoose.model("User", UserSchema);
