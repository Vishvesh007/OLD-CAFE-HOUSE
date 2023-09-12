

import React, { Component } from 'react'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import facebook from '../assets/facebook.svg';
// import AddToPhotosIcon from '@material-ui/icons/AddToIcon';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
function Footer() {
    return (
        <div >
            
            <div style={{background:'black'}} className="mt-5 pt-3">
                <div className="container-fluid myfooter ">
                    <div className="row" style={{justifyContent:'left'}}>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>Services</h4>
                            <ul className="list-unstyled" style={{justifyContent:'left'}}>
                                <li ><a href="/" style={{color:'white'}}><b>Venue Booking</b></a></li>
                                <li><a href="/Menu" style={{color:'white'}}><b>Our Menu</b></a></li>
                                <li><a href="/Venue" style={{color:'white'}}><b>Product Gallery</b></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>Contacts deatils</h4>
                            <ul className="list-unstyled" >
                                <li><a href="/Contact" style={{color:'white'}}><b>contact us</b></a></li>
                                <li><a href="/Contact" style={{color:'white'}}><b>address</b></a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 text-light" >
                            <h4 className="h4">Social media</h4>
                            <ul className="list-unstyled">
                                <li href="/albums">
                                    {/* <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                    ></a> */}
                                    <b>Facebook</b></li>
                                <li>
                                    {/* <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">  */}
                                    {/* </a> */}
                                    {/* <i class="fa fa-twitter"></i> */}
                                    <b>twitter</b></li>
                                <li>
                                    {/* <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                                ><i class="fa fa-instagram"></i
                                ></a> */}
                                <b>instagram</b></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 text-light">
                            <h4>About Us</h4>
                            <ul className="list-unstyled" >
                                <li><b>Our Story</b></li>
                                <li><b>Terms of Use</b></li>
                                <li><b>Privacy Policy</b></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row-copy border-top" >
                        <div style={{ backgroundcolor: (0, 0, 0, 0.2) }} class="text-center p-3 text-light" >
                            By: Vishvesh & Rashpinder
                           <br></br> <a class="text-light" href="./Home"><b>oldtowncafe.com</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}
export default Footer