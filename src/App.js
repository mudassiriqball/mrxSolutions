import logo from './logo.svg';
// import './App.css';

function App() {
   return (
      <>
         {/* <!-- Pre-loader Start --> */}
         {/* <div class="loader-content">
            <div class="d-table">
               <div class="d-table-cell">
                  <div class="sk-circle">
                     <div class="sk-circle1 sk-child"></div>
                     <div class="sk-circle2 sk-child"></div>
                     <div class="sk-circle3 sk-child"></div>
                     <div class="sk-circle4 sk-child"></div>
                     <div class="sk-circle5 sk-child"></div>
                     <div class="sk-circle6 sk-child"></div>
                     <div class="sk-circle7 sk-child"></div>
                     <div class="sk-circle8 sk-child"></div>
                     <div class="sk-circle9 sk-child"></div>
                     <div class="sk-circle10 sk-child"></div>
                     <div class="sk-circle11 sk-child"></div>
                     <div class="sk-circle12 sk-child"></div>
                  </div>
               </div>
            </div>
         </div> */}
         {/* <!-- Pre-loader End --> */}

         {/* <!-- Navbar Area Start --> */}
         <div class="navbar-area">
            {/* <!-- Menu For Mobile Device --> */}
            <div class="mobile-nav">
               <a href="index.html" class="logo">
                  <img src="assets/img/logo.png" alt="logo" />
               </a>
            </div>

            {/* <!-- Menu For Desktop Device --> */}
            <div class="main-nav">
               <div class="container">
                  <nav class="navbar navbar-expand-lg navbar-light">
                     <a class="navbar-brand" href="index.html">
                        <img src="assets/img/logo.png" alt="logo" />
                     </a>
                     <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                           <li class="nav-item">
                              <a href="#" class="nav-link dropdown-toggle active">Home</a>
                              <ul class="dropdown-menu">
                                 <li class="nav-item">
                                    <a href="index.html" class="nav-link active">Home One</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="index-two.html" class="nav-link">Home Two</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="index-three.html" class="nav-link">Home Three</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="index-four.html" class="nav-link">Home Four</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="index-five.html" class="nav-link">Home Five</a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item">
                              <a href="about.html" class="nav-link">About</a>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="nav-link dropdown-toggle">Jobs</a>

                              <ul class="dropdown-menu">
                                 <li class="nav-item">
                                    <a href="find-job.html" class="nav-link">Find A Job</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="post-job.html" class="nav-link">Post A Job</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="job-list.html" class="nav-link">Job List</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="job-grid.html" class="nav-link">Job Grid</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="job-details.html" class="nav-link">Job Details</a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="nav-link dropdown-toggle">Candidates</a>
                              <ul class="dropdown-menu">
                                 <li class="nav-item">
                                    <a href="candidate.html" class="nav-link">Candidates</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="candidate-details.html" class="nav-link">Candidates Details</a>
                                 </li>
                              </ul>
                           </li>
                           <li class="nav-item">
                              <a href="#" class="nav-link dropdown-toggle">Pages</a>
                              <ul class="dropdown-menu">
                                 <li class="nav-item">
                                    <a href="company.html" class="nav-link">Company</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="pricing.html" class="nav-link">Pricing</a>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Profile</a>
                                    <ul class="dropdown-menu">
                                       <li class="nav-item">
                                          <a href="account.html" class="nav-link">Account</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="#" class="nav-link dropdown-toggle">Member</a>

                                          <ul class="dropdown-menu">
                                             <li class="nav-item">
                                                <a href="sign-in.html" class="nav-link">Sign In</a>
                                             </li>
                                             <li class="nav-item">
                                                <a href="sign-up.html" class="nav-link">Sign Up</a>
                                             </li>
                                             <li class="nav-item">
                                                <a href="reset-password.html" class="nav-link">Reset Password</a>
                                             </li>
                                          </ul>
                                       </li>
                                       <li>
                                          <li class="nav-item">
                                             <a href="resume.html" class="nav-link">Resume</a>
                                          </li>
                                       </li>
                                       <li class="nav-item">
                                          <a href="404.html" class="nav-link">404 Page</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="testimonial.html" class="nav-link">Testimonials</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="faq.html" class="nav-link">FAQ</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="#" class="nav-link">Catagories</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="privacy-policy.html" class="nav-link">Privacy & Policy</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="terms-condition.html" class="nav-link">Terms & Conditions</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Blog</a>
                                    <ul class="dropdown-menu">
                                       <li class="nav-item">
                                          <a href="blog.html" class="nav-link">Blog</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="blog-two" class="nav-link">Blog Two</a>
                                       </li>
                                       <li class="nav-item">
                                          <a href="blog-details.html" class="nav-link">Blog Details</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li class="nav-item">
                                    <a href="contact.html" class="nav-link">Contact Us</a>
                                 </li>
                              </ul>

                              <div class="other-option">
                                 <a href="sign-up.html" class="signup-btn">Sign Up</a>
                                 <a href="sign-in.html" class="signin-btn">Sign In</a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
            </div>
         </div>
         {/* <!-- Navbar Area End --> */}


         {/* <!-- Banner Section Start --> */}
		<div class="banner-section">
			<div class="d-table">
				<div class="d-table-cell">
					<div class="container"> 
						<div class="banner-content text-center">
							<p>Find Jobs, Employment & Career Opportunities</p>
							<h1>Drop Resume & Get Your Desire Job!</h1>

							<form class="banner-form">
								<div class="row">
									<div class="col-md-4">
										<div class="form-group">
											<label for="exampleInputEmail1">Keyword:</label>
											<input type="text" class="form-control" id="exampleInputEmail1" placeholder="Job Title" />
										</div>
									</div>
				
									<div class="col-md-4">
										<div class="form-group">
											<label for="exampleInputEmail2">Location:</label>
											<input type="text" class="form-control" id="exampleInputEmail2" placeholder="City or State" />
										</div>
									</div>
				
									<div class="col-md-4">
										<button type="submit" class="find-btn">
											Find A Job
											<i class='bx bx-search'></i>
										</button>
									</div>
								</div>
							</form>

							<ul class="keyword">
								<li>Trending Keywords:</li>
								<li><a href="#">Automotive,</a></li>
								<li><a href="#">Education,</a></li>
								<li><a href="#">Health</a></li>
								<li>and</li>
								<li><a href="#">Care Engineering</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Banner Section End --> */}
      </>
   );
}

export default App;
