import React,{ useEffect, useState } from "react";
import axios from "axios";

export default function Newsapi(){
    const[ news,setNews ]=useState([]);
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=33a338dab7d24adab3d32ad996787395")
        .then((res) => {
            console.log(res.data.articles);
            setNews(res.data.articles);
        })
    },[])

    return(
        <div className="container">
            <div className="row text center">
                {
                    news.map((val) =>{
                        return(
                            <div className="col">
                            <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={val.urlToImage} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{val.title}</h5>
    <p class="card-text">{val.description}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
</div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
