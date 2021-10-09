import axios from "axios"
import { CYBERSOFT_TOKEN, DOMAIN,TOKEN } from "../Util/Settings/config"


export class baseService {
    get = (url) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ `${localStorage.getItem(TOKEN)}`,
                'TokenCybersoft': `${CYBERSOFT_TOKEN}`
            }
        })
    }

    post = (url, data) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: data,
            headers: {
                'Authorization': 'Bearer '+ `${localStorage.getItem(TOKEN)}`,
                'TokenCybersoft': `${CYBERSOFT_TOKEN}`
            }
        })
    }

    put = (url, data) => {
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'PUT',
            data: data,
            headers: {
                'Authorization': 'Bearer '+ `${localStorage.getItem(TOKEN)}`,
                 'TokenCybersoft': `${CYBERSOFT_TOKEN}`
            }
        })
    }

    delete = (url,data) =>{
        return axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            data: data,
            headers: {
                'Authorization': 'Bearer '+ `${localStorage.getItem(TOKEN)}`,
                'TokenCybersoft': `${CYBERSOFT_TOKEN}`
            }
    
        })
    }
    
    
}