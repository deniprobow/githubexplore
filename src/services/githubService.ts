import 'whatwg-fetch';

/** *****************************************************************
  | Author            : @deniprobow
  | Name              : github service
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : service function to manage any data consume from github api.
  *******************************************************************/
export default {
    //api service for search user by username query
    searchUser: async function(username:string){
        try{
            const request0ptions = {
                method: 'GET',
                headers:{'Content-Type':'application/json'},
            }
            let url = 'https://api.github.com/search/users?q='+username;

            const response = await fetch(url,request0ptions);   
            const datas = await response.json();
            return datas.items;
        }catch(error){
            return [];
        }
       
    },
    //api service for search user's repos by username query
    searchRepo: async function(username:string){
        try{
            const request0ptions = {
                method: 'GET',
                headers:{
                    'Content-Type':'application/json', 
                    'Authorization':`Bearer ${process.env.REACT_APP_TOKEN}`},
            }

            let url =  `https://api.github.com/users/${username}/repos`;

            const response = await fetch(url,request0ptions);   
            const datas = await response.json();
            return datas;
        }catch(error){
            return [];
        }
       
    },
    
}


