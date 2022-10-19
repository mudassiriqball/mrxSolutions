import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {

   return (
      <>
         {/* <!-- Pre-loader Start --> */}
         {/* <div className="loader-content">
            <div className="d-table">
               <div className="d-table-cell">
                  <div className="sk-circle">
                     <div className="sk-circle1 sk-child"></div>
                     <div className="sk-circle2 sk-child"></div>
                     <div className="sk-circle3 sk-child"></div>
                     <div className="sk-circle4 sk-child"></div>
                     <div className="sk-circle5 sk-child"></div>
                     <div className="sk-circle6 sk-child"></div>
                     <div className="sk-circle7 sk-child"></div>
                     <div className="sk-circle8 sk-child"></div>
                     <div className="sk-circle9 sk-child"></div>
                     <div className="sk-circle10 sk-child"></div>
                     <div className="sk-circle11 sk-child"></div>
                     <div className="sk-circle12 sk-child"></div>
                  </div>
               </div>
            </div>
         </div> */}
         {/* <!-- Pre-loader End --> */}

         <Navbar />

         {/* <!-- Banner Section Start --> */}
         <div className="banner-section">
            <div className="d-table">
               <div className="d-table-cell">
                  <div className="container">
                     <div className="banner-content text-center">
                        <p>Find Jobs, Employment & Career Opportunities</p>
                        <h1>Drop Resume & Get Your Desire Job!</h1>
                        <button type="submit" className="find-btn">
                           Get in Touch
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Banner Section End --> */}

         {/* <!-- Category Section Start --> */}
         <section className="categories-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Choose Your Category</h2>
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

         {/* <!-- Jobs Section Start --> */}
         <section className="job-section pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Jobs You May Be Interested In</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
               </div>

               <div className="row">
                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/1.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">Post-Room Operate</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">Tourt Design LTD</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       Wellesley Rd, London
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Accountancy
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <span>Full Time</span>
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    1 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/2.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">Data Entry</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">Techno Inc.</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       Street 40/A, London
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Data Entry
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    3 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/3.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">Graphic Designer</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">Devon Design</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       West Sight, USA
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Graphics
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    4 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/4.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">Web Developer</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">MegaNews</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       San Francisco, California
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Development
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    5 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/5.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">Digital Marketor</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">AB Marketer LTD</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       Wellesley Rd, London
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Marketing
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    6 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-sm-6">
                     <div className="job-card">
                        <div className="row align-items-center">
                           <div className="col-lg-3">
                              <div className="thumb-img">
                                 <a href="job-details.html">
                                    <img src="assets/img/company-logo/6.png" alt="company logo" />
                                 </a>
                              </div>
                           </div>

                           <div className="col-lg-6">
                              <div className="job-info">
                                 <h3>
                                    <a href="job-details.html">UI/UX Designer</a>
                                 </h3>
                                 <ul>
                                    <li>Via <a href="#">Design Hunter</a></li>
                                    <li>
                                       <i className='bx bx-location-plus'></i>
                                       Zoo Rd, London
                                    </li>
                                    <li>
                                       <i className='bx bx-filter-alt' ></i>
                                       Accountancy
                                    </li>
                                    <li>
                                       <i className='bx bx-briefcase' ></i>
                                       Freelance
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className="col-lg-3">
                              <div className="job-save">
                                 <a href="#">
                                    <i className='bx bx-heart'></i>
                                 </a>
                                 <p>
                                    <i className='bx bx-stopwatch' ></i>
                                    8 Hr Ago
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Jobs Section End --> */}

         {/* <!-- Way To Use Section Start --> */}
         <section className="use-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Easiest Way To Use</h2>
               </div>

               <div className="row">
                  <div className="col-md-4 col-sm-6">
                     <div className="use-text">
                        <span>1</span>
                        <i className='flaticon-website'></i>
                        <h3>Browse Job</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                     </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                     <div className="use-text">
                        <span>2</span>
                        <i className='flaticon-recruitment'></i>
                        <h3>Find Your Vaccancy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                     </div>
                  </div>

                  <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                     <div className="use-text">
                        <span>3</span>
                        <i className='flaticon-login'></i>
                        <h3>Submit Resume</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Way To Use Section End --> */}

         {/* <!-- Companies Section Start --> */}
         <section className="company-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Top Companies</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
               </div>

               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="company-card">
                        <div className="company-logo">
                           <a href="job-grid.html">
                              <img src="assets/img/top-company/1.png" alt="company logo" />
                           </a>
                        </div>
                        <div className="company-text">
                           <h3>Trophy  & Sans</h3>
                           <p>
                              <i className='bx bx-location-plus'></i>
                              Green Lanes, London
                           </p>
                           <a href="job-grid.html" className="company-btn">
                              25 Open Position
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                     <div className="company-card">
                        <div className="company-logo">
                           <a href="job-grid.html">
                              <img src="assets/img/top-company/2.png" alt="company logo" />
                           </a>
                        </div>
                        <div className="company-text">
                           <h3>Trout Design</h3>
                           <p>
                              <i className='bx bx-location-plus'></i>
                              Park Avenue, Mumbai
                           </p>
                           <a href="job-grid.html" className="company-btn">
                              35 Open Position
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                     <div className="company-card">
                        <div className="company-logo">
                           <a href="job-grid.html">
                              <img src="assets/img/top-company/3.png" alt="company logo" />
                           </a>
                        </div>
                        <div className="company-text">
                           <h3>Resland LTD</h3>
                           <p>
                              <i className='bx bx-location-plus'></i>
                              Betas Quence, London
                           </p>
                           <a href="job-grid.html" className="company-btn">
                              20 Open Position
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-3 col-sm-6">
                     <div className="company-card">
                        <div className="company-logo">
                           <a href="job-grid.html">
                              <img src="assets/img/top-company/4.png" alt="company logo" />
                           </a>
                        </div>
                        <div className="company-text">
                           <h3>Lawn Hopper</h3>
                           <p>
                              <i className='bx bx-location-plus'></i>
                              Wellesley Rd, London
                           </p>
                           <a href="job-grid.html" className="company-btn">
                              45 Open Position
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Companies Section End --> */}

         {/* <!-- Why Choose Section Start --> */}
         <section className="why-choose">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-lg-7 p-0">
                     <div className="why-choose-text pt-100 pb-70">
                        <div className="section-title text-center">
                           <h2>Why You Choose Jovie?</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorei.</p>
                        </div>

                        <div className="row">
                           <div className="col-sm-6">
                              <div className="media">
                                 <i className="flaticon-group align-self-center mr-3"></i>
                                 <div className="media-body">
                                    <h5 className="mt-0">Best Talented People</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-6">
                              <div className="media">
                                 <i className="flaticon-research align-self-center mr-3"></i>
                                 <div className="media-body">
                                    <h5 className="mt-0">Easy To Find Canditate</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-6">
                              <div className="media">
                                 <i className="flaticon-discussion align-self-center mr-3"></i>
                                 <div className="media-body">
                                    <h5 className="mt-0">Easy To Communicate</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-sm-6">
                              <div className="media">
                                 <i className="flaticon-recruitment align-self-center mr-3"></i>
                                 <div className="media-body">
                                    <h5 className="mt-0">Global Recruitment Option</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="row counter-area">
                           <div className="col-md-3 col-6">
                              <div className="counter-text">
                                 <h2><span>127</span></h2>
                                 <p>Job Posted</p>
                              </div>
                           </div>

                           <div className="col-md-3 col-6">
                              <div className="counter-text">
                                 <h2><span>137</span></h2>
                                 <p>Job Filed</p>
                              </div>
                           </div>

                           <div className="col-md-3 col-6">
                              <div className="counter-text">
                                 <h2><span>180</span></h2>
                                 <p>Company</p>
                              </div>
                           </div>

                           <div className="col-md-3 col-6">
                              <div className="counter-text">
                                 <h2><span>144</span></h2>
                                 <p>Members</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-5 p-0">
                     <div className="why-choose-img">
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Why Choose Section End --> */}

         {/* <!-- Job Info Section Start --> */}
         <div className="job-info pt-100 pb-70">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <div className="looking-job">
                        <div className="media">
                           <i className='flaticon-group align-self-start mr-3'></i>
                           <div className="media-body">
                              <h5 className="mt-0">Looking For a Job</h5>
                              <p>Your next role could be with one of these top leading organizations</p>

                              <a href="job-list.html">
                                 Apply Now
                                 <i className='bx bx-chevrons-right'></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6">
                     <div className="recruiting-card">
                        <div className="media">
                           <i className='flaticon-resume align-self-start mr-3'></i>
                           <div className="media-body">
                              <h5 className="mt-0">Are You Recruiting?</h5>
                              <p>Your next role could be with one of these top leading organizations</p>

                              <a href="post-job.html">
                                 Apply Now
                                 <i className='bx bx-chevrons-right'></i>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Job Info Section End --> */}

         {/* <!-- Pricing Section Start --> */}
         <section className="pricing-section pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Buy Our Plans & Packages</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
               </div>

               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="price-card">
                        <div className="price-top">
                           <h3>Free Forever</h3>
                           <i className='bx bx-user'></i>
                           <h2>0<sub>/Month</sub></h2>
                        </div>

                        <div className="price-feature">
                           <ul>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Appear in results
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 <strong>Accept mobile app</strong>
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Manage canditates directly
                              </li>
                           </ul>
                        </div>

                        <div className="price-btn">
                           <a href="post-job.html">Find A  Job</a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                     <div className="price-card mt-12">
                        <div className="price-top">
                           <h3>Sponsor</h3>
                           <i className='bx bx-user'></i>
                           <h2>10<sub>/Month</sub></h2>
                        </div>

                        <div className="price-feature">
                           <ul>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Premium placement
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 <strong>PPC on your job</strong>
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Reach more candidates
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Desktop, mobile job alerts
                              </li>
                           </ul>
                        </div>

                        <div className="price-btn">
                           <a href="post-job.html">Find A  Job</a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                     <div className="price-card">
                        <div className="price-top">
                           <h3>Premium Plan</h3>
                           <i className='bx bx-user'></i>
                           <h2>30<sub>/Month</sub></h2>
                        </div>

                        <div className="price-feature">
                           <ul>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Job ad live for six-weeks
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 <strong>Premium placement</strong>
                              </li>
                              <li>
                                 <i className='bx bx-check'></i>
                                 Desktop, mobile job alerts
                              </li>
                           </ul>
                        </div>

                        <div className="price-btn">
                           <a href="post-job.html">Find A  Job</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Pricing Section End --> */}

         {/* <!-- Candidate Section Start --> */}
         <section className="candidate-section pb-100">
            <div className="container">
               <div className="section-title text-center">
                  <h2>Featured Candidates</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
               </div>

               <div className="condidate-slider owl-carousel owl-theme">
                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/1.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Mibraj Alex</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Construction & Property
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Botchergate, Carlisle
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              9D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/2.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Felica Kareon</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              SEO Expart
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Georgetown, USA
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              8D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart' ></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/3.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Malisha Patel</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Project Management
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Madison, USA
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              1D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/1.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Mibraj Alex</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Construction & Property
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Botchergate, Carlisle
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              9D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/4.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Quence Joes</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Web Developer
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Augusta, Maine
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              8D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/2.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Felica Kareon</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              SEO Expart
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Georgetown, USA
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              8D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/3.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Malisa Petel</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Project Management
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Madison, USA
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              1D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="condidate-item">
                     <div className="candidate-img">
                        <img src="assets/img/candidate/4.jpg" alt="candidate image" />
                     </div>
                     <div className="candidate-social">
                        <a href="#" target="_blank"><i className='bx bxl-facebook'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-twitter'></i></a>
                        <a href="#" target="_blank"><i className='bx bxl-instagram'></i></a>
                     </div>
                     <div className="candidate-text">
                        <h3><a href="candidate-details.html">Quence Joes</a></h3>
                        <ul>
                           <li>
                              <i className='bx bx-filter-alt'></i>
                              Web Developer
                           </li>
                           <li>
                              <i className='bx bx-location-plus'></i>
                              Augusta, Maine
                           </li>
                        </ul>

                        <div className="bottom-text">
                           <p>
                              <i className='bx bx-stopwatch'></i>
                              8D ago
                           </p>
                           <a href="#">
                              <i className='bx bx-heart'></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Candidate Section End --> */}

         {/* <!-- Testimonial Section Start --> */}
         <section className="testimonial-section ptb-100">
            <div className="container">
               <div className="section-title text-center">
                  <h2>What Client’s Say About Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
               </div>

               <div className="row">
                  <div className="testimonial-slider owl-carousel owl-theme">
                     <div className="testimonial-items">
                        <div className="row align-items-center">
                           <div className="col-lg-5 col-md-6 offset-md-3 offset-lg-0 p-0">
                              <div className="testimonial-img">
                                 <img src="assets/img/testimonial-img.jpg" alt="testimonial image" />
                              </div>
                              <div className="testimonial-img-text">
                                 <h3>Alisa Meair</h3>
                                 <p>CEO of  Company</p>
                              </div>
                           </div>
                           <div className="col-lg-7 p-0">
                              <div className="testimonial-text">
                                 <i className='flaticon-left-quotes-sign'></i>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="testimonial-items">
                        <div className="row align-items-center">
                           <div className="col-lg-5 col-md-6 offset-md-3 offset-lg-0 p-0">
                              <div className="testimonial-img">
                                 <img src="assets/img/testimonial-img-2.jpg" alt="testimonial image" />
                              </div>
                              <div className="testimonial-img-text">
                                 <h3>John Doe</h3>
                                 <p>Web Designer</p>
                              </div>
                           </div>
                           <div className="col-lg-7 p-0">
                              <div className="testimonial-text">
                                 <i className='flaticon-left-quotes-sign'></i>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Testimonial Section End --> */}

         {/* <!-- Blog Section Start --> */}
         <section className="blog-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>News, Tips & Articles</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
               </div>

               <div className="row">
                  <div className="col-lg-4 col-sm-6">
                     <div className="blog-card">
                        <div className="blog-img">
                           <a href="blog-details.html">
                              <img src="assets/img/blog/1.jpg" alt="blog image" />
                           </a>
                        </div>
                        <div className="blog-text">
                           <ul>
                              <li>
                                 <i className='bx bxs-user'></i>
                                 Admin
                              </li>
                              <li>
                                 <i className='bx bx-calendar'></i>
                                 7 Feb, 2021
                              </li>
                           </ul>

                           <h3>
                              <a href="blog-details.html">
                                 How to Indroduce in Yourself in Job Interview?
                              </a>
                           </h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                           <a href="blog-details.html" className="blog-btn">
                              Read More
                              <i className='bx bx-plus bx-spin'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4 col-sm-6">
                     <div className="blog-card">
                        <div className="blog-img">
                           <a href="blog-details.html">
                              <img src="assets/img/blog/2.jpg" alt="blog image" />
                           </a>
                        </div>
                        <div className="blog-text">
                           <ul>
                              <li>
                                 <i className='bx bxs-user'></i>
                                 Admin
                              </li>
                              <li>
                                 <i className='bx bx-calendar'></i>
                                 7 Feb, 2021
                              </li>
                           </ul>

                           <h3>
                              <a href="blog-details.html">
                                 Looking for Highly Motivated Product to Build
                              </a>
                           </h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                           <a href="blog-details.html" className="blog-btn">
                              Read More
                              <i className='bx bx-plus bx-spin'></i>
                           </a>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                     <div className="blog-card">
                        <div className="blog-img">
                           <a href="blog-details.html">
                              <img src="assets/img/blog/3.jpg" alt="blog image" />
                           </a>
                        </div>
                        <div className="blog-text">
                           <ul>
                              <li>
                                 <i className='bx bxs-user'></i>
                                 Admin
                              </li>
                              <li>
                                 <i className='bx bx-calendar'></i>
                                 7 Feb, 2021
                              </li>
                           </ul>

                           <h3>
                              <a href="blog-details.html">
                                 The Reason Why Software Develope is the Best Job
                              </a>
                           </h3>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                           <a href="blog-details.html" className="blog-btn">
                              Read More
                              <i className='bx bx-plus bx-spin'></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- Blog Section End --> */}

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

export default Home