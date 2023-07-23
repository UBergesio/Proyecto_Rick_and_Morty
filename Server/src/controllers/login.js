const users = require("../utils/users")

const miFuncion = (req, res) => {
  const { email, password } = req.query
  const usuarios = users.find(user => 
    user.email === email && user.password === password
  )
  if (usuarios) {
    const obj1 = {access: true}
    res.status(200).json(obj1)
  } else {
    const obj2 = {access: false}
    res.status(200).json(obj2)
  }
};


module.exports = miFuncion;
