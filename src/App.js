import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';


import Login from "./components/Login"
import {Signup} from './components/Signup';

import Sidebar from './components/Sidebar';
import TenantsDashboard from './components/TenantsDashboard';
import {Payrent} from './Pages/payrent';

// import ServiceProvidersDashboard from './components/ServiceProvidersDashboard';
// import CaretakersDashboard from './components/CaretakersDashboard';
// import LandlordsDashboard from './components/LandlordsDashboard';

import Fake from "./Pages/Fakes";
import Tests from "../src/Pages/Test";
import Empty from './Pages/Empty';

import Nest from "./Pages/Nest"
import Verify from "./components/VerifyComponent"
import Verifysuccess from "./components/VerificationSuccess"
import Verifyfail from './components/verifyfail';
import Passwordreset from "./components/Forgotpasscomp"

// import Addproperty from "./Pages/Addproperty"
// // import Addproperty2 from "./Pages/Addproperty2"

import Addpropstep1 from "./Pages/Addpropstep1";
import Addpropstep2 from "./Pages/Addpropstep2";
import Addpropstep3 from "./Pages/Addpropstep3";
import Addpropstep4 from "./Pages/Addpropstep4";
import Addpropstep5 from "./Pages/Addpropstep5";
import Addpropstep6 from "./Pages/Addpropstep6";
import Addpropstep7 from "./Pages/Addpropstep7";
import Addpropstep8 from "./Pages/Addpropstep8";
import Addpropstep9 from "./Pages/Addpropstep9";
import Addpropstep10 from "./Pages/Addpropstep10";
import Addpropstep11 from "./Pages/Addpropstep11";
import RendermapContainer from "./Pages/Addpropstep12";

import RendermapContainercopy from "./Pages/autocompletecopy"

import Setpoimarkers from "./Pages/SetpoiMarkers";

import Mapandautocomplete from "./Pages/mapandautocomplete"




// import Listallproperties from "./Pages/Listallproperties";

// import Nameless from "./Pages/nameless"
// import Addpropstep7 from "./Pages/Addpropfolder/Addpropstep7";

const App = () => {
  return(

    <Router>
      
      <Routes>
        <Route path="/confirm/:verificationcode" element={<Verify/>} />
        <Route path="/verifysuccess" element={<Verifysuccess/>} />
        <Route path="/verifyfail" element={<Verifyfail/>} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/passwordreset" element={<Passwordreset />}  />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Setpoimarkers/>}/>
        <Route path="/testmapautocomplete" element={<Mapandautocomplete/>}/>

        <Route path="/agency" element={<Sidebar />} >
            <Route>
              <Route path="dashboard" element={<Tests />} />  
              <Route index element={<Tests />  } />  
            </Route>

            <Route path="properties" >
              <Route path="list-property" element={<Nest/>} >                  
                <Route path="step1" element={<Addpropstep1 />} />                       
                <Route path="step2" element={<Addpropstep2 />} />             
                <Route path="step3" element={<Addpropstep3 />} />            
                <Route path="step4" element={<Addpropstep4 />} />            
                <Route path="step5" element={<Addpropstep5 />} />                          
                <Route path="step6" element={<Addpropstep6 />} />  
                <Route path="step7" element={<Addpropstep7 />} />   
                <Route path="step8" element={<Addpropstep8 />} />   
                <Route path="step9" element={<Addpropstep9 />} />   
                <Route path="step10" element={<Addpropstep10 />} />   
                <Route path="step11" element={<Addpropstep11 />} />                         
                <Route path="step12" element={<RendermapContainer />} />                         
               
                {/* <Route index element={<Addpropstep1 />  } />   */}
              </Route>
          
              <Route>
                <Route path="view-all-properties" element={<Empty />} />
                <Route index element={<Tests />  } />   
              </Route>
            
            </Route>
            
            <Route path="landlords" element={<Fake />}>
              <Route path="all-landlords" element={<Fake />} />
              <Route path="create-new-landlord" element={<Tests />} />
              <Route path="find-landlord" element={<Fake />} />
              <Route index element={<Empty />  } />   
            </Route>

            <Route path="units" element={<Fake />} > 
              <Route path="all-units" element={<Tests />} /> 
              <Route path="create-new-unit" element={<Fake />} /> 
              <Route path="find-unit" element={<Tests />} /> 
              <Route index element={<Tests />} /> 
            </Route>

            <Route path="service-providers" element={<Empty/>}>
              <Route path="all-technicians" element={<Fake />} />
              <Route path="add-new-technician" element={<Tests />} />
              <Route index element={<Empty />  } />   
            </Route>

            <Route path="caretakers" element={<Tests/>}>
              <Route path="all-caretakers" element={<Tests />} />
              <Route path="create-new-caretaker" element={<Fake />} />
              <Route path="find-caretaker" element={<Empty />} />
              <Route index element={<Empty />  } />   
            </Route>

            <Route path="attachments" element={<Empty />} > 
              <Route path="work-orders" element={<Tests />} />
              <Route path="evacuation-notice" element={<Fake />} />
              <Route path="invoices" element={<Fake />} />
              <Route path="payment-receipt" element={<Tests />} />
              <Route path="rental-Agreement" element={<Fake />} />
              <Route index element={<Empty />  } />   
            </Route>

            <Route path="reports" element={<Empty />}>
              <Route path="monthy-expenses" element={<Tests />} />
              <Route path="monthly-income" element={<Fake />} />
            </Route>

            <Route>
              <Route path="support" element={<Fake />} />  
              <Route index element={< Fake/>  } />  
            </Route>
          

        </Route>

        <Route path="/tenant" element={<TenantsDashboard />} >
            <Route>
              <Route path="dashboard" element={<Fake />} />  
              <Route index element={<Tests />  } />  
            </Route>

            <Route >
              <Route path="payrent" element={<Payrent />} />    
              <Route path="payservice" element={<Addpropstep1 />} />                       
            </Route>

            <Route >
              <Route path="create-work-order" element={<Tests />} />    
              <Route path="create-work-order" element={<Addpropstep1 />} />                       
            </Route>

            <Route path="service-providers" >
              <Route path="mama-fua" element={<Fake />}/>
              <Route path="electricians" element={<Tests />}/>
              <Route path="plumbers" element={<Fake />}/>
              <Route path="baby-sitters" element={<Empty />}/>
              <Route path="nannies" element={<Tests />}/>
              <Route path="masons" element={<Fake />}/>
              <Route path="carpenters" element={<Empty />}/>
              <Route path="house-cleaners" element={<Tests />}/>
              <Route path="chefs" element={<Fake />}/>
              <Route path="house-helps" element={<Tests />}/>         
              <Route path="fundis" element={<Empty />}/>         

            </Route>


            <Route path="attachments"  > 
                <Route path="my-work-orders" element={<Tests />} />
                <Route path="evacuation-notices" element={<Empty />} />
                <Route path="monthly-rent-invoices" element={<Fake />} />
                <Route path="monthly-rent-receipts" element={<Tests />} />
                <Route path="rental-agreements" element={<Fake />} />
                <Route index element={<Empty />  } />   
              </Route>

              <Route path="reports" >
                <Route path="monthy-expenses-report" element={<Tests />} />
                <Route path="monthly-income-report" element={<Fake />} />
              </Route>

              <Route>
                <Route path="support" element={<Fake />} />  
                <Route index element={< Fake/>  } />  
              </Route>
            











        </Route>


      </Routes>
      
        
          
    </Router>

  )
};

export default App;
