import React from 'react';
import logo from "./image/bookmyshow-removebg-preview.png"
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./foot.css"

export default function Footer (){

    return(

        <div className='foot'>
            <p>  MOVIES NOW SHOWING IN CHENNAI</p>
            <p>  Kalki 2898 AD | Maharaja | A Quiet Place Day One | Garudan | Inside Out 2 | Paradise | Chandu Champion | Bad Boys: Ride or Die | Munjya | Rockstar</p>
            <p>  UPCOMING MOVIES IN CHENΝΑΙ</p>
            <p>  T20 World Cup 2024: India Vs South Africa | Kaagada | Dharma Daiva | Sita-Sangharsa Ra Kahani | Kaadaadi | Handa | Bisi-Bisi Ice-Cream | Doaansh | Kill | 14 (Telugu)</p>
            <p>  MOVIES BY GENRE</p>
            <p>  Drama Movies | Comedy Movies | Action Movies | Thriller Movies | Horror Movies | Romantic Movies | Sports Movies | Animation Movies | Adventure Movies | Crime Movies</p>
            <p>  MOVIES BY LANGUAGE</p>
            <p>  Movies in Tamil | Movies in Hindi | Movies in English | Movies in Telugu | Movies in Malayalam | Movies in Khasi | Movies in Nepali | Movies in Portuguese | Movies in English 7D | Movies in Sindhi</p>
            <p>  SPORTS EVENTS IN CHENNAI</p>
            <p>  Running | Chess | Archery | Athletics | Badminton | Basketball | Baseball | Boat Race | Bowling | Boxing</p>
            <p>  EVENTS IN TOP CITIES</p>
            <p>  Events in Mumbai | Events in Delhi-NCR | Events in Chennai | Events in Bengaluru | Events in Hyderabad | Events in Pune | Events in Ahmedabad | Events in Kolkata | Events in Kochi</p>
            <p>  CINEMAS IN TOP CITIES</p>
            <p>  Cinemas in Mumbai | Cinemas in Delhi-NCR | Cinemas in Chennai | Cinemas in Bengaluru | Cinemas in Hyderabad | Cinemas in Pune Cinemas in Ahmedabad | Cinemas in Kolkata | Cinemas in Kochi</p>
            <p>  PLAYS IN TOP CITIES</p>
            <p>  Plays in Mumbai Plays in Delhi-NCR | Plays in Chennai Plays in Bengaluru | Plays in Hyderabad Plays in Pune | Plays in Ahmedabad | Plays in Kolkata | Plays in Kochi</p>
            <p>  ACTIVITIES IN TOP CITIES</p>
            <p>  Activities in Mumbai | Activities in Delhi-NCR | Activities in Chennai | Activities in Bengaluru | Activities in Hyderabad | Activities in Pune | Activities in Ahmedabad | Activities in Kolkata | Activities in Kochi  </p>
            <div className='flx'>
                <img src={logo} alt="" />
                <p>copy rights issued @ 2024</p>
                <div>
                    <span><FaFacebookF /></span>
                    <span><IoLogoInstagram /></span>
                    <span><FaXTwitter /></span>
                    <span><FaLinkedin /></span>
                </div>
            </div>
        </div>

    )

}