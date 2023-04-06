import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "reactstrap";
import githubService from "../../services/githubService";
import { setRepo, setUser } from "../../store/githubSlices";
import Item from "../Item";

/** *****************************************************************
  | Author            : @deniprobow
  | Name              : Component Result
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : component function for displaying data result from searchUser api service
  *******************************************************************/
export default function Result(){

    const users:any = useSelector((state:any)=>state.github.users); //get users from redux
    const repos:any = useSelector((state:any)=>state.github.repos); //get repos from redux
    const userSearch:any = useSelector((state:any)=>state.github.userSearch); //get user's search string from redux
    const dispatch = useDispatch();

    //search user's repo on click expand
    const searcUserRepo = async (userSearch:string)=>{
            const repos = await githubService.searchRepo(userSearch);
            dispatch(setRepo(repos));
    }
    

    //spinner
    const Spinner = () =>{
        return(
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">&nbsp;
        </svg>
        )
    }
    
    return(
        <div id='result'>
            {users.length>0&&
                <>
                {/* <Suspense fallback={<Spinner />} > */}
                    <div className="block w-full text-slate-500 py-4 text-left">Showing users for "{userSearch}"</div>
                    
                    {
                        users.map((user:any)=>{
                            return(
                                <div key={user.id} className="py-2  clear-both">
                                    
                                    <div className="w-full flex items-center">
                                        <Item title={user.login} id={user.id} content="-" items={repos} handleClick={searcUserRepo} className="w-full" />
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                {/* </Suspense> */}
                    
                </>
            }
        </div>
    )
}