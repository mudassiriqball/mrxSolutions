import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurServices = () => {

   return (
      <>
         <Navbar />

         {/* <!-- Category Section Start --> */}
         <section className="categories-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Our Services</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
               </div>

               <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-accounting'></i>
                           <h3>Accountancy</h3>
                           <p>301 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-graduation-cap'></i>
                           <h3>Education</h3>
                           <p>210 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-wrench-and-screwdriver-in-cross'></i>
                           <h3>Automotive Jobs</h3>
                           <p>281 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-consultation'></i>
                           <h3>Business</h3>
                           <p>122 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-heart'></i>
                           <h3>Health Care</h3>
                           <p>335 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3  col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-computer'></i>
                           <h3>IT & Agency</h3>
                           <p>401 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-worker'></i>
                           <h3>Engineering</h3>
                           <p>100 open position</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           <i className='flaticon-auction'></i>
                           <h3>Legal</h3>
                           <p>201 open position</p>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Category Section End --> */}

         {/* <!-- Footer Section Start --> */}
         <Footer />
         {/* <!-- Footer Section End --> */}

         {/* <!-- Back To Top Start --> */}
         <div className="top-btn">
            <i className='bx bx-chevrons-up bx-fade-up'></i>
         </div>
         {/* <!-- Back To Top End --> */}
      </>
   )
}

export default OurServices;