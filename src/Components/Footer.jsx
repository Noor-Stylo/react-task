import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faGoogle, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-violet-400 text-white py-8 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4  ml-14"> {/* Updated margin here */}
          {/* Services Section */}
          <div className='text-left ml-16'>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <ul>
              <li className="mb-2">
                <a href="#">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> G-8, Islamabad, Pakistan
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  <FontAwesomeIcon icon={faPhone} /> +92 345 2348987
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  <FontAwesomeIcon icon={faEnvelope} /> ismmart@.com
                </a>
              </li>
              <li className="mb-2">
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} /> +92 345 2348987
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className='text-left ml-16' > 
            <h2 className="text-lg font-bold mb-4">Services</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Shipping & Delivery</a>
              </li>
              <li className="mb-2">
                <a href="#">Returns & Exchanges</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Menu Links Section */}
          <div className='text-left ml-16'>
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">Products</a>
              </li>
              <li className="mb-2">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className=' text-left '>
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="text-xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            {/* Subscribe to Newsletter Section */}
            <div className="mt-4">
              <h2 className="text-lg font-bold mb-2">Subscribe to Newsletter</h2>
              <div className="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" text-gray rounded px-4 py-2 mr-2 focus:outline-none focus:border-purple-500"
                />
                <button className="bg-violet-500 hover:bg-purple-600 text-white px-4 py-2 mt-1 rounded transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Line above the company name */}
        <div className="w-full h-px bg-white my-4"></div>

        {/* Company Name and Copyright */}
        <div className="text-center text-white mt-8">
          <p>© 2023 Ismmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
