import User from "../models/User.js";


import passport from "passport";

export const renderSignUpForm = (req, res) =>   { 
  const ini = true;
res.render("auth/signup", {ini})};

export const signup = async (req, res) => {

  const { name, apellido, email, tipo_usuario, cedula, celular, ciudad, profesional, termsAndConditions, marca} = req.body;
 
  if (termsAndConditions != "on") {
    req.flash("error_msg", "Debe Leer y aceptar los términos y condiciones .");
    return res.redirect("/auth/signup");
  }

  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
    req.flash("error_msg", "El Email ya existe.");
    return res.redirect("/auth/signup");
  }

  let errors = [];

//  const { name, apellido, email, tipo_usuario} = req.body;
console.log(profesional, marca)
  const newUser = new User({ name, apellido, email,  tipo_usuario, cedula, celular, ciudad, profesional, marca}); 
  newUser.tipo_usuario = "Jugador";
  newUser.password = "1234";
  newUser.puntos=0; 
  newUser.posicion = 0;
//  newUser.codigo1 = "S";
 // newUser.codigo2 = "N";
 // newUser.codigo3 = "N";
 // newUser.codigo4 = "N";
  
  await newUser.save();

  req.flash("success_msg", "Registro Completado");
  //envio del email a administrador para aprobar


  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) =>{ 
  const ini = true;
  res.render("auth/signin", {ini})};

export const renderSigningrupos = (req, res) => 
  { 
    const ini = true;
  res.render("auth/grupos", {ini})};
export const renderSigninsedes = (req, res) => 
  { 
    const ini = true;
  res.render("auth/sedes", {ini})};


export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Cerrando Sesion");

      res.redirect("/");
  });
};



  