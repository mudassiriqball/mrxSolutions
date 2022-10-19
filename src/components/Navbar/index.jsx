import React from 'react'
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLangAction } from '../../redux/ducks/lang';
import routeNames from '../../routes/routeNames';

const LANGS = [
   {
      value: 'en',
      label: 'English',
   },
   {
      value: 'ar',
      label: 'العربية',
   },
];

const Navbar = ({ t }) => {
   const { lang } = useSelector((state) => state);
   const dispatch = useDispatch();
   const pathname = window.location.href;
   console.log('first', pathname)

   const handleLangChange = (lang) => {
      dispatch(setLangAction(lang));
   };

   return (
      <div className="navbar-area">
         {/* <!-- Menu For Mobile Device --> */}
         <div className="mobile-nav">
            <a href="index.html" className="logo">
               <img width="30px" src="logo.png" alt="logo" />
            </a>
         </div>

         {/* <!-- Menu For Desktop Device --> */}
         <div className="main-nav">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="index.html">
                     <img width="100px" src="logo.png" alt="logo" />
                  </a>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                     <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                           <a href={routeNames.home} className={`nav-link ${pathname?.includes(routeNames.home) ? 'active' : ''}`}>{'Home'}</a>
                        </li>
                        <li className="nav-item">
                           <a href={routeNames.ourServices} className={`nav-link dropdown-toggle ${pathname?.includes(routeNames.ourServices) ? 'active' : ''}`}>Our Services</a>
                           <li class="nav-item">
                        <ul class="dropdown-menu">
                           <li class="nav-item">
                              <a href="index.html" class="nav-link">Managed Team Augmentation</a>
                           </li>
                           <li class="nav-item">
                              <a href="index-two.html" class="nav-link">Agile Squads</a>
                           </li>
                           <li class="nav-item">
                              <a href="index-three.html" class="nav-link">MVP Builder</a>
                           </li>
                        </ul>
                     </li>
                        </li>
                        <li className="nav-item">
                           <a href={routeNames.ourExpertise} className={`nav-link ${pathname?.includes(routeNames.ourExpertise) ? 'active' : ''}`}>Our Expertise</a>
                        </li>
                        <li className="nav-item">
                           <a href={routeNames.ourTeam} className={`nav-link ${pathname?.includes(routeNames.ourTeam) ? 'active' : ''}`}>Our Team</a>
                        </li>
                        <li className="nav-item">
                           <a href={routeNames.contactUs} className={`nav-link ${pathname?.includes(routeNames.contactUs) ? 'active' : ''}`}>Contact Us</a>
                        </li>
                     </ul>
                     {/* <Link
                        onClick={() => handleLangChange(LANGS[lang === 'ar' ? 0 : 1].value)}
                        sx={{
                           cursor: 'pointer',
                           marginLeft: 2,
                           marginRight: 2,
                        }}
                     >
                        {LANGS[lang === 'ar' ? 0 : 1].label}
                     </Link> */}
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default withTranslation()(Navbar);