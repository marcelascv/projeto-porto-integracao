const mongoose = require('mongoose');

const clientesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    //CPF obrigatório
    cpf: { type: String, required: true },
    //CPF não obrigatório
    //cpf: { type: String },
    dataNascimento: { type: String },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
}, {
    versionKey: false
})

const clientes = mongoose.model('clientes', clientesSchema)

module.exports = clientes

