import React from "react";

const ManageUser =()=>{

    return(
        <div className="mt-[88px] px-[150px]">
            <div className="border-b p-[20px]">
                <h1 className="m-[10px]"> My Account</h1>
                <ul className="flex justify-center"> 
                    <li className="mr-[10px]">My profile</li>
                    <li className="mr-[10px]">My orders</li>
                    <li className="mr-[10px]">My addresses</li>
                    <li className="mr-[10px]">Logout</li>
                </ul>
            </div>
            <div className="">
                <div className="flex justify-between">
                    <h3>MY PROFILE</h3>
                    <p>Edit your profile</p>
                    
                </div>
                <div className="mt-[40px] mb-[200px]">
                    <p>nguyen ngoc huyen</p>
                    <p>nguyen ngoc huyen</p>
                </div>
            </div>
        </div>
    )
}
export default ManageUser