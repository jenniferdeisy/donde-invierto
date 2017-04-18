const generateEmpresas = (cant) => {
  let empresas = [];
  for(let i = 0; i < cant; i++) {
    empresas.push({
      nombre: "Facebook",
      id: i,
      periodos: generatePeriodos(cant)
    })
  };
  return empresas;
}

const generatePeriodos = (cant) => {
  let periodos = [];
  for(let i = 0; i < cant; i++) {
    periodos.push({
      nombre: "Q1",
      id: cant + i,
      rango: [Math.floor(Math.random() * 12 + 0),6],
      anio: Math.floor(Math.random() * 24 + 1993),
      cuentas: [
        {
          nombre: "ETIDBA",
          valor: (Math.floor(Math.random() * 4) + 1),
        },
        {
          nombre: "FAFAFA",
          valor: (Math.floor(Math.random() * 4) + 1)
        }
      ]
    })
  }
  return periodos;
}


export default {
  generateEmpresas
}
