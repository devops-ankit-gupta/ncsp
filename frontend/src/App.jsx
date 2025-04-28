import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Jumbotran from "./components/Jumbotran";
import HowItWork from "./components/HowItWork";
import Login from "./Pages/Login";
import JobList from "./Pages/JobList";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import ChangePasswordDashboard from "./Pages/ChangePassword";
import Error from "./Pages/Error";
import CompanyLogin from "./Pages/CompanyLogin";
// Employer imports
import DashboardLayout from "./components/Employer/Layout";
import Dashboard from "./Pages/employer/Dashboard";
import ApplicantsPerJob from "./Pages/employer/ApplicantsPerJob";
import ChangePassword from "./Pages/employer/ChangePassword";
import PostJob from "./Pages/employer/PostJob";
import ViewAllJobs from "./Pages/employer/viewAllJobs";
import EditJob from "./Pages/employer/EditJob";
import DeleteJob from "./Pages/employer/DeleteJob";
import SendMessage from "./Pages/employer/SendMessage";

// User imports
import UserLayout from "./components/User/Layout";
import GetApplicantDetails from "./Pages/user/Dashboard";
import UserJobsApplied from "./Pages/user/JobsApplied";
import UserChangePassword from "./Pages/user/ChangePassword";
import AddQualification from "./Pages/user/AddQualification";
import SearchJob from "./Pages/user/SearchJob";
import Apply from "./Pages/user/Apply";
import DeleteUser from "./Pages/user/DeleteUser";
import DeletedAcc from "./Pages/user/DeletedAcc";

//Admin imports
import AdminDashboardLayout from "./components/Admin/Layout";
import CompanyRegister from "./Pages/CompanyRegister";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import CompanyVerify from "./Pages/Admin/CompanyVerify";
import DeleteCompany from "./Pages/Admin/DeleteCompany";
import PasswordChange from "./Pages/Admin/PasswordChange";
import GetAllUserDetails from "./Pages/Admin/GetAllUserDetails";
import CheckResponse from "./Pages/user/CheckResponse";


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={
              <>
                <Jumbotran />
                <HowItWork />
              </>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='company-login' element={<CompanyLogin />} />
          <Route path='register' element={<Register />} />
          <Route path='company-register' element={<CompanyRegister/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='jobs' element={<JobList />} />
          <Route path='ChangePassword' element={<ChangePasswordDashboard/>} />
          <Route path='*' element={<Error />} />
        </Route>

        <Route path='/user/dashboard' element={<UserLayout />}>
          <Route index element={<GetApplicantDetails />} />
          <Route path='job-applied' element={<UserJobsApplied />} />
          <Route path='AddQualification' element={<AddQualification />} />
          <Route path='change-password' element={<UserChangePassword />} />        
          <Route path='search-job' element={<SearchJob/>} /> 
          <Route path='apply-job' element={<Apply/>} /> 
          <Route path='delete-user' element={<DeleteUser/>} /> 
          <Route path='acc-deleted' element={<DeletedAcc/>} />
          <Route path='check-response' element={<CheckResponse/>} />
        </Route>

        <Route path='/employer/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='applicants-per-job' element={<ApplicantsPerJob />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='post-job' element={<PostJob />} />
          <Route path='view-all-jobs' element={<ViewAllJobs />} />
          <Route path='edit-job' element={<EditJob />} />
          <Route path='edit-job/:id' element={<EditJob />} />
          <Route path='delete-job' element={<DeleteJob />} />
          <Route path='send-message' element={<SendMessage />} />
          
        </Route>


        <Route path='/Admin/dashboard' element={<AdminDashboardLayout />}>
        <Route index element={<AdminDashboard/>} />
        <Route path='company-verify' element={<CompanyVerify />} /> 
        <Route path='company-delete' element={<DeleteCompany/>} /> 
        <Route path='change-adminpassword' element={<PasswordChange />} />
        <Route path='get-user' element={<GetAllUserDetails/>} />
        </Route>




      </Routes>
    </>
  );
};
export default App;
