import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/20 text-gray-400 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">For the Record</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Communities</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">For Artists</a></li>
            <li><a href="#" className="hover:text-white">Developers</a></li>
            <li><a href="#" className="hover:text-white">Advertising</a></li>
            <li><a href="#" className="hover:text-white">Vendors</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Free Mobile App</a></li>
            <li><a href="#" className="hover:text-white">Popular by Country</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Plans</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Premium Individual</a></li>
            <li><a href="#" className="hover:text-white">Premium Duo</a></li>
            <li><a href="#" className="hover:text-white">Premium Family</a></li>
            <li><a href="#" className="hover:text-white">EchoMix Free</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6 text-xs space-y-4 md:space-y-0">
        <p>© 2025 EchoMix</p>
        <div className="flex space-x-4 text-lg">

          {/* GitHub */}
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6-.9 1.1-1.2-.7-.1-1.4-.4-1.4-1.6 0-.4.2-.8.4-1.1 0-.1-.3-1.2.2-2.5 0 0 .9-.3 2.7 1 .8-.2 1.7-.3 2.6-.3s1.8.1 2.6.3c1.8-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.5.2.3.4.7.4 1.1 0 1.2-.7 1.5-1.4 1.6.6.5 1.1 1.5 1.1 3v4.4c0 .3.2.7.8.6C20.2 21.4 23.5 17.1 23.5 12 23.5 5.6 18.4.5 12 .5z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 5 3.89 6 2.5 6 1.11 6 0 5 0 3.5S1.11 1 2.5 1s2.48 1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.6-2.2 3.4-2.2 3.6 0 4.2 2.3 4.2 5.3V24h-4V13.3c0-2.6-.1-6-3.6-6-3.6 0-4.1 2.8-4.1 5.8V24h-4V8z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3.2A11.4 11.4 0 0 0 12 0C5.4 0 0 5.4 0 12a11.9 11.9 0 0 0 1.7 6.1L0 24l6.1-1.6A11.9 11.9 0 0 0 12 24c6.6 0 12-5.4 12-12a11.4 11.4 0 0 0-4-8.8zM12 22a9.8 9.8 0 0 1-5.3-1.5l-.4-.2-3.6.9.9-3.5-.2-.4A9.8 9.8 0 0 1 2 12c0-5.5 4.5-10 10-10 2.7 0 5.2 1.1 7 3 1.8 1.8 3 4.3 3 7 0 5.5-4.5 10-10 10zm5.1-7.6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1s-.7.8-.9 1c-.2.2-.4.2-.6.1-.2-.1-.9-.4-1.7-1.1-.6-.6-1-1.2-1.2-1.5-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.5.1-.2.2-.4.3-.6.1-.2 0-.4-.1-.6s-1.1-2.5-1.5-3.4c-.4-.9-.7-.8-.9-.8H7c-.2 0-.4 0-.6.2s-.8.8-.8 2c0 1.2.8 2.4.9 2.6.1.2 1.6 2.5 3.9 3.5 1.5.6 2.2.7 2.9.5.4-.1 1.4-.6 1.6-1.2.2-.5.2-1 .1-1.1z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.4.5a4.8 4.8 0 0 1 1.7 1.1 4.8 4.8 0 0 1 1.1 1.7c.2.4.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.4a4.8 4.8 0 0 1-1.1 1.7 4.8 4.8 0 0 1-1.7 1.1c-.4.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.4-.5a4.8 4.8 0 0 1-1.7-1.1 4.8 4.8 0 0 1-1.1-1.7c-.2-.4-.4-1.2-.5-2.4-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .5-2.4a4.8 4.8 0 0 1 1.1-1.7A4.8 4.8 0 0 1 4.8 2.8c.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 2.2c-3.1 0-3.5 0-4.7.1-1 .1-1.6.3-2 .5a2.6 2.6 0 0 0-1 1 3.4 3.4 0 0 0-.5 2c0 1.1 0 1.5-.1 4.7s0 3.5.1 4.7c.1 1 .3 1.6.5 2a2.6 2.6 0 0 0 1 1c.4.2 1 .4 2 .5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.3 2-.5a2.6 2.6 0 0 0 1-1c.2-.4.4-1 .5-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.3-1.6-.5-2a2.6 2.6 0 0 0-1-1c-.4-.2-1-.4-2-.5-1.2-.1-1.6-.1-4.7-.1zM12 5.8a6.2 6.2 0 1 1 0 12.4A6.2 6.2 0 0 1 12 5.8zm0 10.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5.2-10.6a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
            </svg>
          </a>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
