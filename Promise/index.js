// Promise

let deuCerto = true

console.log('iniciando...')

const promessa = new Promise((resolve, reject) => {
  if (deuCerto) {
    return resolve('deu certo!!')
  }
  return reject('deu errado!!')
})
promessa
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
  .finally(() => console.log('FIM!!'))

console.log('aguardando...')
