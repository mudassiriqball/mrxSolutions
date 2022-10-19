import React from 'react'
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLangAction } from '../../redux/ducks/lang';

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

   const handleLangChange = (lang) => {
      dispatch(setLangAction(lang));
   };

   return (
      <div className="navbar-area">
         {/* <!-- Menu For Mobile Device --> */}
         <div className="mobile-nav">
            <a href="index.html" className="logo">
               <img src="assets/logo.jpeg" alt="logo" />
            </a>
         </div>

         {/* <!-- Menu For Desktop Device --> */}
         <div className="main-nav">
            <div className="container">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="index.html">
                     <img width="30px" height="30px" src="assets/img/logo.jpeg" alt="logo" />
                  </a>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                     <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                           <a href="#" className="nav-link active">{t('navbar.home')}</a>
                        </li>
                        <li className="nav-item">
                           <a href="about.html" className="nav-link">About The Firm</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="nav-link">Subscriptions</a>
                        </li>
                        <li className="nav-item">
                           <a href="#" className="nav-link">Our Services</a>
                        </li>
                        <li className="nav-item">
                           <a href="contact.html" className="nav-link">Contact Us</a>
                        </li>
                     </ul>
                     <Link
                        onClick={() => handleLangChange(LANGS[lang === 'ar' ? 0 : 1].value)}
                        sx={{
                           cursor: 'pointer',
                           marginLeft: 2,
                           marginRight: 2,
                        }}
                     >
                        {LANGS[lang === 'ar' ? 0 : 1].label}
                     </Link>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
};

export default withTranslation()(Navbar);