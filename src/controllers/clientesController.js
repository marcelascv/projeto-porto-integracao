const clientes = require('../models/clientes');

const getAll = (req, res) => {
  console.log(req.url);
  clientes.find(function(err, clientes){
    res.status(200).send(clientes);
  })     
};

const getCompradores = (req, res) => {
  const comprou = req.params.comprou;
  clientes.find({ comprou: true }, function(err, clientes){
    res.status(200).send(clientes);
  })    
};

const getByCpf = (req, res) => {
  const cpf = req.params.cpf;
  clientes.find({ cpf }, function(err, clientes){
    res.status(200).send(clientes);
  })  
};

const postCliente = (req, res) => {
  console.log(req.body);
  
  let cliente = new clientes(req.body);

  cliente.save(function(err){
    if (err) {
      res.status(500).send({ message: err.message })
    }  
    res.status(201).send(cliente.toJSON());
  })
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
