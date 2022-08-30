//Lista HTML a partir de array JS

const url = 'https://api.github.com/users/eltonrp'

//Usando Promises (Fetch / Then)

// const consult = fetch(url)
//   .then(response => response.json())
//   .then(repos => fetch(repos.repos_url))
//   .then(data => data.json())
//   .then(datas => {
//     datas.forEach(item => {
//       document.getElementById('list').innerHTML += `<li>${item['name']}</li>`
//     })
//   })


//Usando Promises (Async / Await)

// const consult = async () => {
//   const consultUrl = await (await fetch(url)).json()
//   const repos = await (await fetch(consultUrl.repos_url)).json()
//   repos.forEach(item => {
//     document.getElementById('list').innerHTML += `<li>${item['name']}</li>`
//   })
// }
// consult()


//Usando Promises (Async / Await)

const consult = async () => {
  try {
    const consultUrl = await (await fetch(url)).json()
    const repos = await (await fetch(consultUrl.repos_url)).json()
    const list = document.getElementById('list')
    repos.forEach(item => {
      const li = document.createElement('li')
      li.innerText = item['name']
      list.append(li)
    })
  } catch(error) {
    console.error(error)
  }
}
consult()