import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Trial from "./Components/Trial";
import Home from "./Pages/Home";
import HeaderMoba from "./Components/HeaderMoba";
import Body from "./Body";
import PeoAndPso from "./Pages/PeoAndPso";

import Regulations from "./Pages/Regulations";

import Faculty from "./Pages/Faculty";
import Stafforfaculty from "./Pages/faculty/Stafforfaculty";
import Mentor from "./Pages/faculty/Mentor";
import Studentwelfarecommittee from "./Pages/faculty/Studentwelfarecommittee";

import Research from "./Pages/Research";
import Supervisors from "./Pages/research/Supervisors";
import Phdawardedfaculty from "./Pages/research/Phdawardedfaculty";
import Scholars from "./Pages/research/Scholars";
import Projects from "./Pages/research/Projects";
import Patents from "./Pages/research/Patents";
import Publications from "./Pages/research/Publications";

import Infrastructure from "./Pages/Infrastructure";

import Testimonials from "./Pages/Testimonials";

import Placemenets from "./Pages/Placemenets";

import Higherstudies from "./Pages/Higherstudies";

import Rankholders from "./Pages/Rankholders";

import Student from "./Pages/Student";
import Achievements from "./Pages/students/Achievements";
import Guestlecture from "./Pages/students/Guestlecture";
import Workshop from "./Pages/students/Workshop";
import Industrialvisit from "./Pages/students/Industrialvisit";
import Valueaddedcourse from "./Pages/students/Valueaddedcourse";
import Projectexpo from "./Pages/students/Projectexpo";
import Socialprograms from "./Pages/students/Socialprograms";
import Excelinsports from "./Pages/students/Excelinsports";

import Elitealumni from "./Pages/Elitealumni";

import Chapter from "./Pages/Chapter";

import Club from "./Pages/Club";

import Bosmembers from "./Pages/Bosmembers";



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /><HeaderMoba/><Body/></>} />
        <Route path="/about" element={<><Home /><HeaderMoba /><PeoAndPso /></>} />
        <Route path="/regulations" element={<><Home /><HeaderMoba /><Regulations /></>} />
        
        <Route path="/faculty" element={<><Home /><HeaderMoba /><Faculty /></>} />
        <Route path="/faculty/stafforfaculty" element={<><Home /><HeaderMoba /><Stafforfaculty /></>} />
        <Route path="/faculty/mentor" element={<><Home /><HeaderMoba /><Mentor /></>} />
        <Route path="/faculty/studentwelfarecommittee" element={<><Home /><HeaderMoba /><Studentwelfarecommittee /></>} />
        
        <Route path="/research" element={<><Home /><HeaderMoba /><Research /></>} />
        <Route path="/research/supervisors" element={<><Home /><HeaderMoba /><Supervisors /></>} />
        <Route path="/research/phdawardedfaculty" element={<><Home /><HeaderMoba /><Phdawardedfaculty /></>} />
        <Route path="/research/scholars" element={<><Home /><HeaderMoba /><Scholars /></>} />
        <Route path="/research/projects" element={<><Home /><HeaderMoba /><Projects /></>} />
        <Route path="/research/patents" element={<><Home /><HeaderMoba /><Patents /></>} />
        <Route path="/research/publications" element={<><Home /><HeaderMoba /><Publications /></>} />
        
        <Route path="/infrastructure" element={<><Home /><HeaderMoba /><Infrastructure /></>} />
        <Route path="/testimonials" element={<><Home /><HeaderMoba /><Testimonials /></>} />
        <Route path="/placemenets" element={<><Home /><HeaderMoba /><Placemenets /></>} />
        <Route path="/higherstudies" element={<><Home /><HeaderMoba /><Higherstudies /></>} />
        <Route path="/rankholders" element={<><Home /><HeaderMoba /><Rankholders /></>} />
        
        <Route path="/students" element={<><Home /><HeaderMoba /><Student /></>} />
        <Route path="/students/achievements" element={<><Home /><HeaderMoba /><Achievements /></>} />
        <Route path="/students/guestlecture" element={<><Home /><HeaderMoba /><Guestlecture /></>} />
        <Route path="/students/workshop" element={<><Home /><HeaderMoba /><Workshop /></>} />
        <Route path="/students/industrialvisit" element={<><Home /><HeaderMoba /><Industrialvisit /></>} />
        <Route path="/students/valueaddedcourse" element={<><Home /><HeaderMoba /><Valueaddedcourse /></>} />
        <Route path="/students/projectexpo" element={<><Home /><HeaderMoba /><Projectexpo /></>} />
        <Route path="/students/socialprograms" element={<><Home /><HeaderMoba /><Socialprograms /></>} />
        <Route path="/students/excelinsports" element={<><Home /><HeaderMoba /><Excelinsports /></>} />
        
        <Route path="/elitealumni" element={<><Home /><HeaderMoba /><Elitealumni /></>} />
        <Route path="/chapter" element={<><Home /><HeaderMoba /><Chapter /></>} />
        <Route path="/club" element={<><Home/><HeaderMoba/><Club/></>}/>
        <Route path="/bosmembers" element={<><Home /><HeaderMoba /><Bosmembers/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
