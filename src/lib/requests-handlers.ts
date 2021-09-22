import axios from 'axios'


const getRequest = async (endpoint = '') =>{
        try {
            const response =  await axios.get(process.env.REACT_APP_BASE_URL + endpoint) 
            return response
        } catch (error) {
            console.log(error, 'Inside getRequest')
            return false
        }
    
    }


const requests = {
    getRequest: getRequest
}

export default requests