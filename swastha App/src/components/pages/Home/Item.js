import React from 'react';

export default function Item(props){
    const { link, title, imgName, description }=props.data;
    return(
        <>
    <div>
        <div className="content">
                    <img src={imgName } />
                    <p><h4>{title}</h4></p>
                    <div className="info">
                        <p>{ description }</p>
                    </div>

             <a className="btn btn-primary"  href={link}>Learn More ></a> 

        </div>
        </div>
        </>
    
    )

    
}