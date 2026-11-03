// async function getUsers() {
//   const usersUrl = 'https://jsonplaceholder.typicode.com/users'
//   try {
//     const response = await fetch(usersUrl)
//     const users = await response.json()
//     console.log('Пользователи', users)
//   } catch {
//     console.log('Что-то пошло не так')
//   }
// }
// getUsers()
// 
// async function getUsersById(id) {
//   const usersIdUrl = `https://jsonplaceholder.typicode.com/users/${id}`
//   const response = await fetch(usersIdUrl)
//   const usersId = await response.json()
//   console.log(`Пользователь с ID ${id}`, usersId)
// }
// 
// getUsersById(1)