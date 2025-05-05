import { use, useEffect, useState } from "react";
import ListComponent from "../listComponent/ListComponent";
import "./ViewList.css"
import useFetch from "../useFetch";

const ViewList = () => {
   const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <main>
            <h1>List of Users</h1>
            {loading && <p>Loading ...</p>}
            {error && <p>Error:  {error}</p>}    
            
            {!loading && !loading && ( 
                <ListComponent 
                    items={data} 
                    renderItem={(user)=>(
                        <div>
                            <strong>{user.name}: </strong> - {user.email} 
                        </div>
                    )}
                />)
            }
        
        </main>
    )
};

export default ViewList;