import axios from "axios"

const options = {
    method: 'GET',
    headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
   }

  export const fetchData = async (url) =>{
    const response = await axios.get(`${url}`, options)
    return response
  }