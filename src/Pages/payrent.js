// @ts-nocheck

import {Link} from 'react-router-dom'
import React,{useRef,useState} from 'react'
import styled from "@emotion/styled"

import * as MdIcons from "react-icons/md"





import airtelmoney from "../easyclicksimages/airtelmoney.png";
import airtelmoneylogo from "../easyclicksimages/airtelmoneylogo.png";
import airtelstk from "../easyclicksimages/airtelstk.jpeg";
import mpesalogo from "../easyclicksimages/mpesalogo.jpeg";
import safmpesa from "../easyclicksimages/safmpesa.jpeg";
import safstk from "../easyclicksimages/safstk.png";

import Form from 'react-validation/build/form';
// import Input  from 'react-validation/build/input';
import Checkbutton  from 'react-validation/build/button';
// import LoadingIcons from "react-loading-icons";
// import {isEmail} from 'validator';



const Wholediv=styled.div`
    overflow-y:scroll;
    overflow-x:none;
    width:95%;
    height:96%;
    font-size:2rem;
    background-color:blue;
    color:white;
    text-align:left;
    border-radius:20px;
    margin:20px auto;




    @media (max-width: 768px) {
        width:${({sidebar})=> sidebar ? "85%": "85%"};
        // left:${({sidebar})=>sidebar ? "15%": "15%"}
        margin:10px;
        padding:0;
    }
`

const Div= styled.div`
    width:60%;
    margin:0 auto;





    @media (max-width: 768px) {
        width:${({sidebar})=> sidebar ? "95%": "95%"};
        // left:${({sidebar})=>sidebar ? "15%": "15%"}
        font-size:1.2rem;

        margin:10px;
        padding:0;
    }
`

const Accountdetails=styled.div`

`



const Accountheader=styled.div`
    margin:0.5rem 0 0 0.5rem;



`
const Tenantdetails=styled.div`



`


const Propertyname=styled.div`
    display:flex;
    justify-content:space-between;
    align-content:center;


`
const Tenantunit=styled.div`
   display:flex;
    justify-content:space-between;
    align-content:center;



`
const Tenantname=styled.div`
   display:flex;
    justify-content:space-between;
    align-content:center;



`
const Tenantid=styled.div`
   display:flex;
    justify-content:space-between;
    align-content:center;



`
const Rentamount=styled.div`
   display:flex;
    justify-content:space-between;
    align-content:center;



`


const Paymentoptionsdiv=styled .div`

`

const Paymentdetailsdiv=styled.div`

`


const Payoptionbutton=styled.button`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:2rem 0;
    padding:0.5rem;
    border-radius:5px;
    outline:none;
    box-shadow:none;
    border:none;
    transition:0.5s;

    &:hover{
        cursor:pointer;
        background-color:white-smoke;
        color:black;
        margin-left:0.2rem;
        border:3px solid white;
      
    }

`
const Paymentoptionlogo=styled.div`
    border-radius:5px;

`
const Paymentoptiondescription=styled .div`

`
const Paymentoptionforwardlogo=styled .div`

`

const Choosepaymentheader=styled.div`
    margin:1rem 0 -1.2rem 0.5rem;

`





const Paymentamountlabel=styled.div`
    font-size:1rem;
    padding:0;
    margin-bottom:-0.4rem;
`


const AmountInputContainer = styled.div`
    position: relative;
    width: 100%;
    margin:1rem 0.2rem;

`;

const AmountInputField = styled.input`
  width: 100%;
  padding: 10px 2.6rem;
  border: 0.2px solid ${(props) => (props.errror && props.errror.length>0 ? "red":"#007bff")};
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  transition: 0.3s;
  background: transparent;

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -4px;
    left: 10px;
    font-size: 12px;
    color: #007bff;
    background: white;
    padding: 0 5px;
`;

const FloatingAmountLabel= styled.label`

  position: absolute;
  top: 15px;
  left: 2.4rem;
  font-size: 16px;
  color: gray;
  transition: 0.3s;
  pointer-events: none;
//   background: ;
  padding: 0 5px;
`;


const Currencyprefix=styled.span`
    position:absolute;
    top:15px;
    font-size:1rem;
    color:black;
    padding:0 5px;

`


const Phonenumberlabel=styled.div`
    font-size:1rem;
    padding:0;
    margin-bottom:-0.4rem;
`

const MobileInputContainer=styled.div`
    position: relative;
    width: 100%;
    margin:1rem 0.2rem;

`
const MobileInputField=styled.input`
    width: 100%;
    padding: 10px 2.7rem;
    border: 0.2px solid ${(props) => (props.errror && props.errror.length>0 ? "red":"#007bff")};
    border-radius: 5px;
    outline: none;
    font-size: 18px;
    transition: 0.3s;
    background: transparent;

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
        top: -4px;
        left: 10px;
        font-size: 12px;
        color: #007bff;
        background: white;
        padding: 0 5px;
`
const FloatingMobileLabel=styled.label`

    position: absolute;
    top: 15px;
    left: 2.6rem ;
    font-size: 16px;
    color: black;
    transition: 0.3s;
    pointer-events: none;
    //   background: ;
    padding: 0 5px;
        
`

const Countrycodeprefix=styled.span`
    position:absolute;
    top:15px;
    font-size:1rem;
    color:grey;
    padding:0 5px;
`








const Paybutton=styled.button`
    width:100%;
    background-color:${(props)=> ( !props.errror.amount && !props.errror.phonenumber ? "green": "gray")  };
    border-radius:5px;
    shadow-box:none;
    border:none;
    padding:0.5rem;
    margin:0.5rem;
    color:white;



    &:hover{
        cursor:pointer;
    }
`
const Paylink=styled(Link)`
    text-decoration:none;
    color:white;
`
const ErrorText=styled.div`
    margin:0.5rem 0 -0.5rem 0;
    padding:0;
    color:red;
    // border:2px solid red;
    font-size:14px;
`










export const Payrent=()=> { 

    const checkbtn=useRef()
    const form= useRef()
    
    const phonenumberRef=useRef();
    const paymentamountRef=useRef();

    const [errors,setErrors]=useState({
        phonenumber:"",
        amount:"",
    })






    const handlePhonenumberChange=(e)=>{

    }


    const handleAmountChange=(e)=>{

    }

    
    const validatePhonenumber=()=>{
        // e.preventdefault();
        const phoneValue = phonenumberRef.current.value.trim();
        if (!phoneValue) {
          setErrors((prev) => ({ ...prev, phonenumber: "Phone number Required!" }));

          console.log(" prev, phone: Phone number is required! })");

        }

        else if (!/^0[71]/.test(phoneValue)) {
            setErrors((prev) => ({ ...prev, phonenumber: "Invalid Phone Number!Should Start with 07 or 01!" }));
  
            console.log("Invalid Phone Number!Should Start with 07 or 01!");
        }

        else if (!/\d{10}$/.test(phoneValue)) {
          setErrors((prev) => ({ ...prev, phonenumber: "Phone Number too Short! Required 10 Digits" }));

          console.log("Phone Number too Short!");
        }

        else if (phoneValue.length>10) {
            setErrors((prev) => ({ ...prev, phonenumber: "Phonenumber Too Long! Required 10 Digits " }));
  
            console.log("Phone Number too Long!");
          }
         else {
          setErrors((prev) => ({ ...prev, phonenumber: "" }));
          console.log("No Phone Errors")
        }
    }
    
    const validateAmount=()=>{
        // e.preventdefault();
        const amountValue = paymentamountRef.current.value.trim();
        if (!amountValue) {
          setErrors((prev) => ({ ...prev, amount: "Amount is required!" }));

          console.log(" mount is required!  ")
        } 
        else if (!/^\d+(\.\d{1,2})?$/.test(amountValue)) {
          setErrors((prev) => ({ ...prev, amount: "Invalid amount format!" }));
          console.log("Invalid amount format! ")
        }
         else {
          setErrors((prev) => ({ ...prev, amount: "" }));
          console.log(" No Amount Errors")
        }
    }
    
    
    

    const handlePayrent=(e)=>{
        e.preventDefault();
        validateAmount();
        validatePhonenumber()

        console.log("Console.log I just  clicked On the Pay Rent  payrent")


        
    }
    
    
    return (
        <Wholediv>

            <Div styled={{backgroundColor:"green"}}>
                <Accountdetails>
                    <Accountheader>
                        <h5>RENT PAYMENT:</h5>
                    </Accountheader>

                    <Tenantdetails>
                        <Propertyname>
                            <div>
                                Property Name:
                            </div>

                            <div>
                                Print Property Name
                            </div>
                        </Propertyname>

                        <Tenantunit>
                            <div>
                                Tenant Unit:
                            </div>

                            <div>
                                Print Property Name
                            </div>
                            
                        </Tenantunit>             



                        <Tenantname>
                            <div>
                                Tenant Name:
                            </div>

                            <div>
                                Print Tenant Name
                            </div>
                        </Tenantname>

                        <Tenantid>
                            <div>
                                Tenant Id Number:
                            </div>

                            <div>
                                Print Tenant Id Number 
                            </div>
                        </Tenantid>

                        <Rentamount>
                            <div>
                                Rent Amount:
                            </div>

                            <div>
                                Print Tenant Id Number 
                            </div>
                        </Rentamount>

                    </Tenantdetails>


                    <Paymentoptionsdiv>

                        <Choosepaymentheader>
                            <h5>CHOOSE PAYMENT METHOD:</h5>
                        </Choosepaymentheader>
                        
                        
                        <Payoptionbutton>                        
                            <Paymentoptionlogo>
                                <h1><img src={safstk} alt="STK LOGO" width="35px" heigth="35px"/>  </h1>
                            </Paymentoptionlogo>

                            <Paymentoptiondescription>
                                <h4>Pay with SIM Toolkit</h4>
                                <p>Pay using Normal SIM Toolkit</p>
                            </Paymentoptiondescription>

                            <Paymentoptionforwardlogo>
                                <div><MdIcons.MdOutlineArrowForwardIos/></div>
                            </Paymentoptionforwardlogo>
                        </Payoptionbutton>

                        <Payoptionbutton>                        
                            <Paymentoptionlogo>
                                <h1><img src={mpesalogo} alt="MPESA LOGO" width="35px" heigth="35px"/>  </h1>
                            </Paymentoptionlogo>

                            <Paymentoptiondescription>
                                <h4>Pay with Safaricom MPESA</h4>
                                <p>Pay Directly with Safaricom Mpesa</p>
                            </Paymentoptiondescription>

                            <Paymentoptionforwardlogo>
                                <div><MdIcons.MdOutlineArrowForwardIos/></div>
                            </Paymentoptionforwardlogo>
                        </Payoptionbutton>



                        <Payoptionbutton>                        
                            <Paymentoptionlogo>
                                <h1><img src={airtelmoneylogo} alt="AIRTEL LOGO" width="35px" heigth="35px" border-radius="5px" />  </h1>
                            </Paymentoptionlogo>

                            <Paymentoptiondescription>
                                <h4>Pay with Airtel Money</h4>
                                <p>Pay directly with Airtel Money</p>
                            </Paymentoptiondescription>

                            <Paymentoptionforwardlogo>
                                <div><MdIcons.MdOutlineArrowForwardIos/></div>
                            </Paymentoptionforwardlogo>
                        </Payoptionbutton>


                

                    </Paymentoptionsdiv>




                    <Paymentdetailsdiv>
                        <Form method="" ref={form} onSubmit={handlePayrent} >

                            <Paymentamountlabel>Enter Amount to Pay:</Paymentamountlabel>     
                            {errors.amount && <ErrorText>{errors.amount}</ErrorText>}               

                            <AmountInputContainer>
                                <Currencyprefix><p>KSH</p></Currencyprefix>
                                <AmountInputField ref={paymentamountRef} onChange={()=>{setErrors((prev)=>({...prev,amount:""}));validateAmount()}}  errror={errors.amount} type="number" placeholder=" " id="floating-amount-input" />
                                <FloatingAmountLabel htmlFor="floating-amount-input">Enter Amount To Pay</FloatingAmountLabel>
                            </AmountInputContainer>

                            <Phonenumberlabel>Enter Mobile Money Phone Number:</Phonenumberlabel>      
                            {errors.phonenumber && <ErrorText>{errors.phonenumber}</ErrorText>}              
                            <MobileInputContainer>
                                <Countrycodeprefix><p>+254</p></Countrycodeprefix>
                                <MobileInputField ref={phonenumberRef} onChange={()=>{setErrors((prev)=>({...prev,phonenumber:"" }));validatePhonenumber()}}  errror={errors.phonenumber} type="number" placeholder=" " id="floating-mobile-input" />
                                <FloatingMobileLabel htmlFor="floating-mobile-input">Enter Mobile Money Phone Number </FloatingMobileLabel>
                            </MobileInputContainer>



                            <Paybutton errror={errors} type="submit"  ref={checkbtn} ><Paylink >PAY</Paylink></Paybutton>
                            {/* <Checkbutton display="none" ref={checkbtn}></Checkbutton> */}

                        </Form>
                    </Paymentdetailsdiv>


                    {/* <div style={{marginLeft:"1rem"} }>Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.             Work still in progress, therefore if you land on this page, just know that this is just for testing of the routing of the application purposes, when ready you will have all the time to test our products EasyClicks PMS software to your satisfaction, kindly bare with us as we work to complete this project, Thanks You.   </div> */}

                </Accountdetails>
            
            </Div>
        </Wholediv>
        
        );
}



// export default Payrent