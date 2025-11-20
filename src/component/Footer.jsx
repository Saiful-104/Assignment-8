import { FaFacebookF,  FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
return ( <footer className="bg-base-200 text-base-content py-10"> <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">


    <div>
      <h2 className="footer-title mb-3 text-lg font-semibold">Services</h2>
      <ul className="space-y-2">
        <li><a className="link link-hover">Skill Exchange</a></li>
        <li><a className="link link-hover">Find Instructors</a></li>
        <li><a className="link link-hover">Become a Provider</a></li>
        <li><a className="link link-hover">Pricing</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h2 className="footer-title mb-3 text-lg font-semibold">Company</h2>
      <ul className="space-y-2">
        <li><a className="link link-hover">About us</a></li>
        <li><a className="link link-hover">Contact</a></li>
        <li><a className="link link-hover">Career</a></li>
        <li><a className="link link-hover">Press kit</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h2 className="footer-title mb-3 text-lg font-semibold">Legal</h2>
      <ul className="space-y-2">
        <li><a className="link link-hover">Terms of use</a></li>
        <li><a className="link link-hover">Privacy policy</a></li>
        <li><a className="link link-hover">Cookie policy</a></li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h2 className="footer-title mb-3 text-lg font-semibold">Follow Us</h2>
      <div className="flex gap-5 mt-4 text-2xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-all hover:scale-110"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-all hover:scale-110"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-all hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-all hover:scale-110"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>

  </div>

  {/* Bottom copyright */}
  <div className="text-center mt-10 text-sm opacity-70">
    © {new Date().getFullYear()} HERO.IO — All rights reserved.
  </div>
</footer>
);
};

export default Footer;
