import React, { useState } from "react";
import { Octokit } from "octokit";
import githubService from "../../services/githubService";
import 'whatwg-fetch';
import { useDispatch } from "react-redux";
import { setUser, setRepo,setSearchKeyword } from "../../store/githubSlices";

/** *****************************************************************
  | Author            : @deniprobow
  | Name              : Component FormGroup
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : component function for displaying username's input and button search and also trigger searchUser api service
  *******************************************************************/
export default function FormGroup(){
    //init user variable for input username
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    //searchUser function, trigger by click
    const searchUser = async () => {
        if(username.length>3){
            let datas = await githubService.searchUser(username);

            dispatch(setUser(datas));
            dispatch(setSearchKeyword(username));
        }     
    }
    
    //onChangeUser function, trigger by onchange from input username and set value to variable user
    const onChangeUser = (e:any)=>{
        
        setUsername(e.target.value); 
        
    }
    
    return(
        <div className='form-group'>
            <input type="text" name="username" onChange={onChangeUser} className='block placeholder:text-slate-500 w-full border border-slate-300 bg-slate-200 rounded-sm py-2 pl-3 pr-3 mb-4 shadow-sm focus:border-sky-200 focus:outline-none' placeholder='Enter Username' id="" />
            <button id='search' onClick={searchUser} className='block w-full bg-blue-500 py-3 px-3 text-white hover:bg-blue-700'>Search</button>
        </div>
    )
}