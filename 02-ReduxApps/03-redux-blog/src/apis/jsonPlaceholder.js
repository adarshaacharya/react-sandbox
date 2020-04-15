import Axios from "axios";

// create instance of Axios
const jsonPlaceholder =  Axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com/'
});


export default jsonPlaceholder;