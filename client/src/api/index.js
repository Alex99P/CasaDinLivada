import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchUser=()=>axios.get(url);
// console.log(fetchUser);


// const url = 'http://localhost:5000'

// const getData =async ()=>{
//   const fetchUser=await axios.get(url);
// console.log(fetchUser.data[0].username);

// }
// getData();