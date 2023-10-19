import React, {  useState,useEffect } from "react";
import ReactLoading from "react-loading";
import '../index.css'
function News() {
  const [value, setValue] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(()=>{
    const search=async()=>{
      const response = await fetch(
        // "https://newsapi.org/v2/everything?q=farming&from=2022-05-29&sortBy=relevancyAt&apiKey=ddcb39105bea496680da542f2a57ac7a"
        "https://newsapi.org/v2/everything?q=farming&sortBy=relevancyAt&apiKey=d55a6f3e4b7b4c1385615c98bf657e49"
      );
      const result = await response.json();
      console.log(result);
      const p = result.articles.map((a) => {
        return (
          <div className="col-lg-4 col-md-12 col-12 col-xxl-4" key={a.source.id}>
          <div className="card" style={{width: "18rem" }}>
            <picture>
            <img
              className="card-img-top img-fluid zoom"
              src={a.urlToImage}
              alt="Card"
            />
            </picture>
            <div className="card-body">
              <center>
            <h5 className="card-title " style={{fontSize:"20px" , fontFamily:"fantasy"}}><em><b>{a.title}</b></em></h5>
              
              <p className="card-text" >
                {a.description}
              </p>
              <a href={a.url} class="btn btn-primary zoom">
                Visit the News
              </a>
              </center>
            </div>
          </div>
          </div>
        );
      });
      console.log(p);
      setValue(p);
      setDone(true);
    }
    search();
  },[]);

  return (
    <>
     {
      !done ? (
       
        <ReactLoading
          type={"spin"}
          color={"#03fc4e"}
          height={100}
          width={100}
          className={"spinner"}
          
        />
       
      ):
       (<center>
     <h1 className="mt-5 caro_text">NEWS</h1>
     <div className="container flex">
            <div className="row gy-2 gx-2">
            {value}
            </div>
      </div>
     </center>)}
    </>
  );
}

export default News;
