export const formatDate = date => {
   return new Date(date).toString().split(' ')[4].slice(0, 5)
}