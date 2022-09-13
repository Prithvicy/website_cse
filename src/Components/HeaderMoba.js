import React from "react";
import "./HeaderMoba.css";
import logo from "../Assets/logoDummy.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HeaderMoba = () => {
  React.useEffect(() => {
    window.addEventListener('load', closeNav());
  });
  const dropdownH = {
    'faculty': {
      heading: "Faculty",
      subInfo: [
        ["Staff or Faculty", "/faculty/stafforfaculty"],
        ["Mentor", "/faculty/mentor"],
        ["Student Welfare Committee", "/faculty/studentwelfarecommittee"],
      ]
    },
    'research': {
      heading: "Research",
      subInfo: [
        ["Supervisors", "/research/supervisors"],
        ["PhD Awarded Dept Faculty", "/research/phdawardedfaculty"],
        ["Scholars", "/research/scholars"],
        ["Projects", "/research/projects"],
        ["Patents", "/research/patents"],
        ["Publications", "/research/publications "],
      ]
    },
    'students': {
      heading: "Students",
      subInfo: [
        ["Achievements", "/students/achievements"],
        ["Guest Lecture", "/students/guestlecture"],
        ["Workshop ", "/students/workshop"],
        ["Industrial Visit", "/students/industrialvisit"],
        ["Value Added Course", "/students/valueaddedcourse"],
        ["Project Expo", "/students/projectexpo"],
        ["Social Programs", "/students/socialprograms"],
        ["Excel In Sports", "/students/excelinsports"],
      ]
    },
  };
  return (
    <div>
      <span onClick={bodyAddClass}>
        <div className="menu-icon">
          <span className="menu-icon__line menu-icon__line-left"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line menu-icon__line-right"></span>
        </div>
        
      </span>
      
      <a href="/" className="mobalogo">
          <img src={logo} alt="" />
        </a>
      <div className="nav" id='nav'>
        <div className="nav__content">
          <div className="nav__list">
            <a href='/peoandpso' className="nav__list-item">
              <span>PEO and PSO</span>
            </a>
            <a href='/regulations' className="nav__list-item">
              <span>Curriculum Regulations</span>
            </a>
            <span className="nav__list-item"><Dropdown data={dropdownH['faculty']} /></span>
            <span className="nav__list-item"><Dropdown data={dropdownH['research']} /></span>
            <a href='/infrastructure' className="nav__list-item">
              <span>Infrastructure</span>
            </a>
            <a href='/testimonials' className="nav__list-item">
              <span>Testimonials</span>
            </a>
            <a href='/placemenets' className="nav__list-item">
              <span>Placements</span>
            </a>
            <a href='/higherstudies' className="nav__list-item">
              <span>Higher Studies</span>
            </a>
            <a href='/rankholders' className="nav__list-item">
              <span>Rank Holders </span>
            </a>
            <span className="nav__list-item"><Dropdown data={dropdownH['students']} /></span>
            <a href='/elitealumni' className="nav__list-item">
              <span>Elite Alumni </span>
            </a>
            <a href='/chapter' className="nav__list-item">
              <span>Chapter</span>
            </a>
            <a href='/club' className="nav__list-item">
              <span>Club </span>
            </a>
            <a href='/bosmembers' className="nav__list-item">
              <span>bos members</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const bodyAddClass = () => {
  let body = document.querySelector('body');
  if (body.classList.contains('nav-active')) {
    body.classList.remove('nav-active');
    document.getElementById('nav').style.zIndex = '-1';
  }
  else {
    body.classList.add('nav-active');
    document.getElementById('nav').style.zIndex = '1';
  }
}

const closeNav = () => {
  let body = document.querySelector('body');
  if (body.classList.contains('nav-active')) {
    body.classList.remove('nav-active');
    document.getElementById('nav').style.zIndex = '-1';
  }
}


export default HeaderMoba;

