const { consultarCep } = require('correios-brasil');

  const cep = '54783010'
  const cepDois = '50030210'


consultarCep(cep).then( response => {
     console.log(response.data)
  });

  consultarCep(cepDois).then( response => {
    console.log(response.data)
 });




  
