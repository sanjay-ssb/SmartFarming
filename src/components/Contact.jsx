import React, {useState} from "react";
import "../index.css";
import { db} from "../Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
 const Contact=()=>{
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[subject,setSubject]=useState("");
const[feedback,setFeedback]=useState("");

const sendData=(e)=> {
    e.preventDefault();
     db.collection("feedback").add({
        Name:name,
        Email:email,
        Subject:subject,
        Feedback:feedback,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert(`Feed back Submitted ${name}` );
      setName("");
      setEmail("");
      setSubject("");
      setFeedback("");
}

return(
    <>
     <div className="container">
            <div className="row">
                
               
                <div id="content" >
                <div className="text-center">
        <h1 className="display-4 head">FeedBack </h1>
        <hr className="w-25 mx-auto" />
        </div>

                    <form role="form" name="myform" onSubmit={sendData}>
                        <div className="form-group contacttext">
                            <label htmlFor="username" className="iconic user text_bold " /> Name <span className="required">*</span>
                            <input type="text" className="form-control " name="username" id="username"  required="required" placeholder="Hi friend, how may I call you ?" value={name} onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                        <div className="form-group contacttext">
                            <label htmlFor="usermail" className="iconic mail-alt" /> E-mail address <span className="required">*</span> 
                            <input type="email" className="form-control" name="usermail" id="usermail" placeholder="I promise I hate spam as much as you do" required="required"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="form-group contacttext">
                            <label htmlFor="subject" className="iconic quote-alt" /> Subject 
                            <input type="text" className="form-control" name="subject" id="subject"  required="required" placeholder="What would you like to talk about?" value={subject} onChange={(e)=>{setSubject(e.target.value)}} />
                        </div>
                        <div className="form-group contacttext">
                            <label htmlFor="message" className="iconic comment" /> FeedBack
                            <textarea name="message" id="message"  className="form-control" rows="3" placeholder="Don't be shy, live me a friendly message and I'll answer as soon as possible"  required="required"  value={feedback} onChange={(e)=>{setFeedback(e.target.value)}} />
                        </div>
                        <input style={{float:"right"}} type="submit" className=" zoom" value=" Submit!"/>    	
                    </form>
                </div>
            </div>
            
        </div>
    </>
);
}
export default Contact;