import React from "react";
import "../src/App.css"
import axios from 'axios';
import { useState } from "react";
import { MDBContainer, MDBRow, MDBCol,MDBInput   } from 'mdbreact';
function App(){
  const [hideStep2, setHideStep2] = useState(true);
  const[hideStep3,setHideStep3]=useState(true)
  
  React.useEffect(() => {
    var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=AIzaSyBtYtgn4VMfPVe62LWwflxo8ADf2fHKj6M';
    axios(url, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      }})
      .then(response => console.log(response))
     
  }); // <-- Have to pass in [] here!

// Gets the latitude and longitude in console
// React.useEffect(()=>{
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);
//   });
// })

// Genrale example of api call(random user api)

// React.useEffect(() => {
//   fetch('https://randomuser.me/api/')
//     .then(results => results.json())
//     .then(data => {
//      console.log("Data",data.results)
//     });
// }); 

  return (
   
 
    <div class="container-fluid" id="grad1">
        <div class="row justify-content-center ">
            <div class="col-11 col-sm-9 col-md-7 col-lg-6 text-center">
                <div class="card px-0 pt-4 pb-0 mt-5 mb-5">
                    <h2 Style="text-align:center">Property Form</h2>
                    
                    <div class="row">
                        <div class="col-md-12  center-form">
                            <form id="msform">
                                
                                <div >
                                <button type="button" class="btn btn-info btn-circle btn-xl">Step 1</button>
                                    
                                    {hideStep2 ?
                                     <button class="btn btn-secondary btn-circle btn-xl">Step 2</button> 
                                     : <button type="button" class="btn btn-info btn-circle btn-xl">Step 2</button> 
                                     }
                                    {hideStep3 ?
                                     <button type="button" class="btn btn-secondary btn-circle btn-xl">Step 3</button> 
                                     :<button type="button" class="btn btn-info btn-circle btn-xl">Step 3</button>
                                      }
                                </div> 
                               {hideStep2?
                                    <div class="welcome-form">
                                        <h2 class="title">Welcome, Please Enter Detail:</h2>  
                                         <button onClick={()=>setHideStep2(!hideStep2)
                                        }>
                                          Add from Scratch</button>
                                         <br/>
                                         
                                    </div>      
                              :
                                
                                    <div>
                                        <h4 class="fs-title"> Information</h4> 
                                        <MDBContainer>
                                        <MDBRow>
                                          <MDBCol md="6">
                                            <form>
                                              
                                              <div className="grey-text">
                                                <MDBInput required label="Enter address" onFocus="geolocate()" type="text" validate error="wrong"
                                                  success="right" />
                                                <MDBInput required label="Bathroom"   type="number" max={9999999999} validate error="wrong"
                                                  success="right" />
                                                <MDBInput required label="Bedroom" max={9999999999} type="number"  validate error="wrong" success="right" />
                                                <MDBInput required label="Description of Property"  type="textarea" rows="2" />
                                              </div>
                                              <div className="text-center">
                                              <button onClick={()=>alert("Submitted")}>Submit</button>
                                              </div>
                                              <br/><br/>
                                              <h4 Style="color:lightblue">OR</h4>
                                            </form>
                                          </MDBCol>
                                        </MDBRow>
                                      </MDBContainer>
                     
                                          
                                    </div>
                                    
                            }
                                {hideStep3?
                                    <div >
                                        
                                         <button onClick={()=>setHideStep3(!hideStep3)
                                        }>
                                          Upload CSV</button>
                                         <br/>
                                         
                                    </div>      
                              :
                        
                                       <div> 
                                       
                                              <input type="file" id="myFile" name="filename"></input>

                                          <button onClick={()=>alert("Submitted")}>Submit</button>
                                    </div>
                                    
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
   
    );
  };


export default App;