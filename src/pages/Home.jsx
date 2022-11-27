import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NextSvg from '../assets/images/next.svg'

const Home = () => {

   return (
      <>

         {/* <!-- Banner Section Start --> */}
         <div className="banner-section">
            <Navbar />
            <div className="d-table">
               <div className="d-table-cell">
                  <div className="container">
                     <div className='row'>
                        <div className='col-12 col-md-4'>
                           <div className="banner-content">
                              <h2 className='mb-4'>We Make A Difference To Your Business</h2>
                              <label className='w-100 mb-4'>Mr.X Solution fully managed software development and consulting to help you build great digital products.</label>
                              <button type="submit" className="find-btn mb-4">
                                 Get in Touch
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- Banner Section End --> */}

         {/* <!-- Our Services --> */}
         <section className="categories-section pt-100 pb-70">
            <div className="container">
               <div className="section-title text-center">
                  <h2>OUR SERVICES</h2>
                  <p>We Provide Web & Mobile Solutions in Latest Technologies</p>
               </div>

               <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-accounting'></i> */}
                           <img alt="next" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
                           <h3>React JS</h3>
                           <p>JavaScript / TypeScrip</p>
                        </div>
                     </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-graduation-cap'></i> */}
                           <img alt="next" src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' />
                           <h3>Next JS</h3>
                           <p>SSR SEO</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-wrench-and-screwdriver-in-cross'></i> */}
                           <img alt="next" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
                           <h3>React Native</h3>
                           <p>React Native CLI / Expo</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-consultation'></i> */}
                           <img alt="next" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAqFBMVEX///9F0f1g2P4CU5o6vu912v2u6f9Z1/0ARpS/y905z/2F1fFay+9z0fLq+f/t9fgxyvhHzvc50v34/f+14PCj5/5W0fq/5PEmk8ye2/GQ2PG27f7w+//H8P47wvKo5v7a9P6W4v4ATJUARpZy3/524P63y+BLx/MATZWuxNyNrM7f8ffV7PWG4f7P8v+z7f55yu0Di8h+n8WYs9IAOpHL1+au3/GK0upXyLLjAAAFoklEQVR4nO3cf3vaNhAHcBMgZDLGpqZQHJJA6bofULY1G3v/72yWZBsBxuj2UKQ73/efYoNTfXInyW6fhyDgcDgcDofD+dH51gdm53rEwPwsOpAI8eh6xLCkQGDnw7PrIQMDBv7hesTAcAWRA3kOngHJz0FkwPQLECiQtSgYiK2CAXkg9VUU3qIM9CzU5yD5CpIHwluUOlDwHPQr5IHk5yD5CjIQO5DnIAM9TwuAMB9CIPkKMpCBXmfxQByYkgdyi2IHUq8g/TlIHUh/DlIHcosy0PO0AAjz4QMOqFdwwBVkoNdpQYuSBxJv0REDkQPJtyh54Ij6KkoeSH4fJF9B+Dbx4nrIsJDfB1vQotSBU+LABdCHDki/RclvE9TnILfoGRBbi96wgrtHWD4ukQFfBsCs7gK83b3obvAAyuDjXYDQCl6egy80gE0tysCjTO8BDEYfgMDbteh9gNB1BtscLIhOWvR+QAgR3Rwss7Cci0grKGM3FxED7RoVNdBm00AOvN6oKLeJ4zQT0VdQpmkukgA2zUUCLapzqVGJVFCmntgAnHVwAevnYlMFe70pLmDdfwA3zcFeD0T0AXjeqA3A514PRPQDeNqo1yoIIN73aaIpJtEGaEn0pYIyB6Id0IroE/BAbF5FQUS/gCXRHniV6M8cLCOf+m1b1ILoH1BWEQZsJPrWojojILCB6CewIReAF4l0gBeIlIC1RFrAGiI14BnRx22iMVeBJ0R6FTwh0gQaRIotekSkWsGKOHhzPWJgAEBFxFfBV4iwN8UHBPny/Ol6xNAAS/j66emr6yFDs4MQXz997n5GR1zaEyWwS5mogd0uvkZd/mIJ/LXbxUq0qWJZwS7KRh1dr6IJzIm/uR4yNFeJx0CMjXqFeAok16jnQIzExWViHZBUo9YDCREP+yDRRr1UQaTEKQiYNyq6fXExtG5RrHMxnQIqiLNRgykIiLKKEQjY7a7xEu2AGKsYRCAgWqI9EOOmkTfqtW3iOGt0xKD/FwSI8ZE4+P4EEiJs1OC7/TRUQdiov7egimsYEeFcbEEVoUSMc3FNv4otINJv1Hf6xBY0KrSKLSAibNT3Nf0qtoDYgkZtAXENI2Js1PUTKH+/ux4xOP/8BMvX1PWIORzPs/+2yjN3PYzbJOufJg6CUMgMGy6byU/uy6Pt0ZFniU6+T0GMpVC9bBKG+WWiKnImj7I7jPb/JDr9rgErYSq/2fUgHHbICTeJKYwTBEJRxUq4F6ZwJvwXivC5+vLU1BRuqnOHl/Hjc199IMoP86NH/TOiZ/25PLNwLLsh2sf6OFVXboJtpHvEhXB2dPIgnKi6JnLkM/0yDrZJuTrJdzbmkRr9ZCyKUyLRhY3H8tLJXnZz4p1QviqEHT3ArbH8SqFxJEefmauzGKZKqIosqs+gFu5FNbHVn1ElNH4L9xd2wrciWwthp/wW8Ol0nG7GxlGs19X89TZIdTGT7ZFQuBJWS+n8ujCPGnG1lg7VkZ5y+gK9nKifLcKDUIz1PZMLYfUrthKml4X60tDQDiuhyO6tk7m18OwOQl5cCJtuA3+4ENalDcLhuTAuhMLNw0qxlr4ti4xuIzzcI4lkUwonLoWQ3cKiS8N0IZOqlPNQuHm+shNK1txKqLeISL2Ohyqx10JdODn6bdI5ERaOsjP1OlJcoLbVedkAPguLOxbx0BedM2EnCkPZv1ooojBKy4NxttuFovw9+Cw010Zjx6/Oqhla7RDyzaLW5V2bcU/jqXBW3naK4b8H4V6YwokwhMF2bNy3CvWT3Qr1ij6rOakn1iTRnwhzrCgfkIIsEYfnqmBeHqk342xc7RTRRp1R7yduhIuRSlp3Uh/E+9VqJZ9lU+NksJBns/2mPMryo/myeDPeztU/R87Ku7S6v4TD4XA4HA6Hw+FwOBwOh8PhcDicluY/6jTLXQGvUg4AAAAASUVORK5CYII=' />
                           <h3>Flutter</h3>
                           <p>...</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-heart'></i> */}
                           <img alt="next" src='https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png' />
                           <h3>Node JS</h3>
                           <p>Express</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3  col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-computer'></i> */}
                           <img alt="next" src='https://cdn.pixabay.com/photo/2013/07/12/17/22/database-152091__340.png' />
                           <h3>SQL & NoSQL</h3>
                           <p>SQL / MongoDB / Firebase</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-worker'></i> */}
                           <img alt="next" src='https://marvel-b1-cdn.bc0a.com/f00000000236551/dt-cdn.net/wp-content/uploads/2021/07/13429_ILL_DevOpsLoop.png' />
                           <h3>DevOps</h3>
                           <p>AWS / CI CD</p>
                        </div>
                     </a>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-6">
                     <a href="job-list.html">
                        <div className="category-card">
                           {/* <i className='flaticon-auction'></i> */}
                           <img alt="next" src='' />
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