import axios from "axios";

let token = localStorage.getItem("reachinbox-auth");
token =  token ? JSON.parse(token) : ""; 


export const getMailList = (token: string)=> {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return (axios.get('https://hiring.reachinbox.xyz/api/v1/onebox/list', config).then ((res) => res.data.data)
    .catch(err => console.log(err)))
};

export const getMailMessages = (id:number, token:string)=> {
    return (axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => res.data.data)
    .catch(err => console.log(err)))
};

export const postMailMessages = (id:number,messages:any)=> {
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`, messages ,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res) => {
        console.log("Posted:", res.data);
        return res.data; 
    })
    .catch(err => {
        console.error("Error:", err);
        throw err; 
    });
};


export const deleteMailResponse = (id:number)=> {
    return (axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => {
        console.log(res)
        return res
    })
    .catch(err => console.log(err)))
};

export const resetMail = (token:string |null)=> {
    return (axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/reset`,{
        headers: {
            'authorization': `Bearer ${token}`
        }
    }).then ((res) => {
        console.log(res)
        return res
    })
    .catch(err => console.log(err)))
};