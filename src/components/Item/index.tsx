import React from "react";


 /** *****************************************************************
  | Author            : @deniprobow
  | Name              : user's repos list
  | Updater           : @deniprobow
  | last_change       : 2023-04-05
  | Description_update: -
  | Description       : Component function for list of user's repo that expand and fetching data from github's api when clicked by user
  *******************************************************************/
function Item(props:any) {

    //check if props.item contain current activer that search for repo
    let checkOwner = props.items.filter((item:any)=>{
        return item.owner.login === props.title
    })

    
    return(
    <div className="relative overflow-hidden w-full">
        <input type="checkbox" data-testid={"itemDetail"+props.id}  onClick={()=>props.handleClick(props.title)} className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
        <div  className=" text-left text-black-500 bg-slate-200 h-12 w-full pl-5 flex items-center">
            
                {props.title}
            
        </div>
        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </div>
        <div className="overflow-hidden bg-slate-500 transition-all duration-500 max-h-0 max-h peer-checked:max-h-fit">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 m-2">
            {
                props.items.length>0 && checkOwner.length>0  &&
                props.items.map((row:any) => {
                    return(
                        <div className="block bg-slate-300 p-3 text-left">
                            <h5><strong>{row.name}</strong></h5>
                            <p>{row.description===null?"-":row.description}</p>
                         </div>
                    )
                })
                
            }
            </div>
            
        </div>
    </div>
    )
};

export default Item;