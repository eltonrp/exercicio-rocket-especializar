const url = 'https://api.github.com/users/eltonrp'

const consult = () => {
  axios(url)
  .then(response => axios(response.data.repos_url))
  .then(result => {
    const list = document.getElementById('render')
    list.innerHTML = '<h1><strong>Lista de repositórios:</strong></h1>'
    result.data.forEach(item => {
      const li = document.createElement('li')
      li.innerText = item.name
      list.append(li)
    })
  })
  
  .catch(error => console.log(error))
}

consult()