import React from "react";
import './careers.css';
import careerImg from '../assets/careers.png';
import { useEffect,useState } from "react";
import { hover } from "@testing-library/user-event/dist/hover";


function Careers() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [uploadedFileName, setuploadedFileName] = useState("");

      
  const attachFiles = (e)=> {
      let fileElement = document.getElementById('file-input');
      if(fileElement) fileElement.click();
  }
      
const handleFileSelection = (e)=> {
      const files = e.target.files;
      setuploadedFileName(files[0].name);
}
function SubmitButton(){
  if (uploadedFileName && designation && email && name){
    return  <button type="submit" className="btn d-flex fw-bold justify-content-center mb-4 mt-5 mx-auto px-4 py-2 rounded-5 send-message w-50">Send</button>
  } else {
    return <button type="submit" className="btn d-flex fw-bold justify-content-center mb-4 mt-5 mx-auto px-4 py-2 rounded-5 send-message w-50" disabled>Send</button>
  }
}

const handleNameChange = (e) => {
  const inputValue = e.target.value;
  const alphabeticRegex = /^[A-Za-z\s]*$/;
  if (alphabeticRegex.test(inputValue)) {
    setName(inputValue);
  } 
};

const handleEmailChange = (e) => {
  const inputValue = e.target.value;
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(inputValue && emailregex.test(inputValue)) {
    setEmail(inputValue);
    document.getElementById("errorMessage").innerText = '';
  }else{
    setEmail("");
    document.getElementById("errorMessage").innerText = 'Please Enter a valid Email';
  }
};
    
    return (
    <div className="d-flex container-fluid p-0">
        <div className="row w-100 mx-0" style={{marginTop:'6rem'}}>
            <div className="career-side-container col">
                    <div className="align-items-center d-flex flex-column justify-content-center">
                      <div className="text-white fw-bold fa-2x" style={{marginTop:'8rem'}}>Apply For Position</div>
                      <div className="align-items-center d-flex mt-5 text-white col-8">
                      “Join our dynamic team and be part of a workplace
                      where innovation thrives,diversity is celebrated
                      and every voice contributes to our collective success !”
                      </div>
                      <div>
                        <img
                        loading="lazy"
                        src={careerImg}
                        className="mx-auto z-1 w-100" style={{marginTop:'16%'}}
                        />
                      </div>
                    </div>
            </div>
                <div className="align-content-center align-items-center career-container-form col justify-content-center">
                    <div class="card justify-content-center mx-auto my-5 w-75">
                      <div class="card-body px-5">
                            <form action="https://formsubmit.co/careers@kitservices.in" method="POST" encType="multipart/form-data">
                                  <div class="form-row">
                                    <div class="form-group col-12 my-4">
                                      <span for="Name" className="fs-5 fw-bold">Name <span class="text-danger ml-2">*</span></span>
                                      <input 
                                        type="text" 
                                        class="form-control p-0 pt-4 py-2 underlined-input" 
                                        name="name" 
                                        placeholder="Your Name" 
                                        value={name} 
                                        onChange={handleNameChange} 
                                        required
                                      />
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="emailID" className="fs-5 fw-bold">Email <span class="text-danger ml-2">*</span></span>
                                      <input 
                                        type="email" 
                                        class="form-control p-0 pt-4 py-2 underlined-input" 
                                        name="emailId" 
                                        placeholder="Your Email" 
                                        onChange={handleEmailChange} 
                                        required
                                      />
                                      <span id="errorMessage" className="mt-2 text-danger fw-bold"></span>
                                    </div>
                                    <div class="col-12 d-flex flex-column form-group my-4">
                                      <span for="Designation" className="fs-5 fw-bold mb-2">Designation <span class="text-danger ml-2">*</span></span>
                                      <select required class="p-0 pt-4 py-2 underlined-input" name="Designation" onChange={ e => setDesignation(e.target.value)}>
                                        <option hidden selected>Your Designation</option>
                                        <option>Developer</option>
                                        <option>HR department</option>
                                        <option>Scrum Master</option>
                                        <option>Test Engineer</option>
                                        <option>Project Manager</option>
                                        <option>Sales & Marketing</option>
                                        <option>UI/UX</option>
                                        <option>Devops</option>                                        
                                      </select>
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="CV" className="fs-5 fw-bold">CV / Resume <span class="text-danger ml-2">*</span></span>
                                      <div class="drag-area p-3">
                                        <div class="icon">
                                          <i class="fa-solid fa-cloud-arrow-up"></i>
                                        </div>
                                        <span className="header text-decoration-underline"><span class="resumeAttachment" onClick={attachFiles}>Upload</span></span>
                                        <span className="fs-6 fw-bold my-1">{uploadedFileName} {uploadedFileName ? <i onClick={()=>{setuploadedFileName("")}} style={{ cursor: 'pointer'}} class="fa-regular fa-circle-xmark mx-2 pdf-upload-icon"></i> : ""}</span> 
                                        <span className="header mt-2">One PDF file only</span>
                                        <input type="file" name="attachments" id="file-input" accept=".pdf,application/pdf" hidden onChange={handleFileSelection} required/>
                                      </div>
                                    </div>
                                    <div class="form-group col-12 my-4">
                                      <span for="textArea" className="fs-5 fw-bold">Message (Optional)</span>
                                      <textarea rows={5} cols={10} class="form-control mt-4 bg-transparent" name="contact-message" placeholder="Type here .......!"/>
                                    </div>
                                  </div>
                                  <SubmitButton/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Careers;