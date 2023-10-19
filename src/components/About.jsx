import React from "react";

 const About=()=>{
return(
    <>
    <section style={{marginBottom:"100px"}}>
        <div className="text-center mt-5">
        <h1 className="display-4 head">About-us </h1>
        <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
            <figure>
            <img src={require("../photos/aboutus.jpg")}  alt="about image" className="img-fluid about_image" />
            </figure>
            </div>
            <div className="col-lg-6 col-md-6 col-12 col-xxl-6 mar">
            <h1 className="txt1">Hii There</h1>
            <p>
            <span> <p> My self Shubham Bhatt, founder of this website</p></span>
            
            Agriculture has been connected to humankind for thousands of years – this makes farming a business with a long tradition. At the same time humans sought to make farming easier and more efficient ever since: With a large variety of machines, ingenious production methods and more.

Under that perspective farming and the IoT are nothing contradictory, in fact both can form a beneficial symbiosis!

<span> <p><br /><b>What is Smart Farming?
</b><br /> Smart Farming is a new concept in modern information and communication technology and changes the way we work in agriculture. Smart Farming with IoT relies increasingly on smart technology for the management of agricultural enterprises. And it does so in order to increase the quality and quantity of the products. </p></span>
</p>
<br />
<p> <b><i>in conclusion the goal of this application is to build a community and  provide information regarding smart farming and will provide a platform where farmers can talk with other people and clerify their doubts </i></b></p>
            </div>
            </div>
        </div>
    </section>
    </>
);
}
export default About;