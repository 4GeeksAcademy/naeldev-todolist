import React, { useState } from "react";

const Body = ({handleChange, inputValue,addTask,count}) => {
    return (
        <div className="container-fluid text-center ">
            <form onSubmit={addTask}>
                <input 
                    type="text"
                    value={inputValue} 
                    placeholder="Ingresa la tarea"
                    onChange={handleChange}
                    className="form-control"
                
                />
        
                

            </form>
            </div>


        
    )
}

export default Body