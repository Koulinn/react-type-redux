import axios from "axios";
const { request } = axios

// interface Query {
//     q:string
// }

// interface Options {
//     method: string,
//         url: string,
//         params: Query,
//         headers: {
//             'x-rapidapi-host': string,
//             'x-rapidapi-key':string
//         }

// }

const getFromDeezerRapid = async (search:string) => {
    const options = {
        // method: 'POST',
        url: (process as any).env.REACT_APP_DEEZER_ENDPOINT_SEARCH,
        params: { q: search },
        // headers: {
        //     'x-rapidapi-host': (process as any).env.REACT_APP_DEEZER_HOST,
        //     'x-rapidapi-key': (process as any).env.REACT_APP_DEEZER_KEY
        // }
    };

    try {

        const response = await request(options)
        // console.log(response.data, 'Data from getFromDeezerAPI function')
        return response.data.data
    } catch (error) {
        console.log(error, 'Error from getFromDeezerAPI function')
    }



}


const requests = {
    getRequest:getFromDeezerRapid
}

export default requests