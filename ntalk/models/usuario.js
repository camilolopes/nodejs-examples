module.exports = function(app) {

  var usuario = function(nome, email){
    this.nome = nome;
    this.email = email;
    this.contatos = [];
  };

  return usuario;
};