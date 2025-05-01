// src/pages/ContactUsPage.tsx

import React from 'react';
import { motion } from 'framer-motion';

const ContactUsPage: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden overflow-y-scroll scrollbar-hide"
      style={{ backgroundColor: '#1C1F26' }} // <<== UPDATED SOLID BACKGROUND COLOR
    >
      <motion.div
        className="flex flex-col lg:flex-row justify-center gap-10 p-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Contact Form */}
        <motion.div
          className="backdrop-blur-md bg-black/10 border-2 border-white rounded-xl p-8 flex-1 shadow-xl hover:scale-[1.02] transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-echo-purple"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h2>

          <p className="mb-6 text-lg text-gray-300">
            Feel free to contact us any time. We will get back to you as soon as we can!
          </p>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-left mb-1 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-gray-400 focus:ring-2 focus:ring-echo-purple transition"
                placeholder="Please enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-left mb-1 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-gray-400 focus:ring-2 focus:ring-echo-purple transition"
                placeholder="Please enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-left mb-1 text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded bg-black/70 border border-white text-white placeholder-gray-400 focus:ring-2 focus:ring-echo-purple transition"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-echo-purple text-white font-semibold py-3 px-8 rounded-xl hover:bg-purple-700 transition shadow-md"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          className="backdrop-blur-md bg-black/10 border-2 border-white rounded-xl p-8 flex-1 shadow-xl hover:scale-[1.02] transition-transform"
          whileHover={{ scale: 1.03 }}
        >
          <motion.h2
            className="text-4xl font-extrabold mb-6 text-echo-purple"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Info
          </motion.h2>

          <div className="space-y-6 text-left">
            <InfoItem iconSrc="/email.jpg" text="echomixsupport@gmail.com" />
            <InfoItem iconSrc="/phone.jpg" text="+24 56 72 289" />
            <InfoItem iconSrc="/clock.jpg" text="9:00 - 18:00" />
            <InfoItem iconSrc="/map.jpg" text="B 63, Bhd Gokhale Market, Tis Hazari Court, Delhi, India" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

interface InfoItemProps {
  iconSrc: string;
  text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ iconSrc, text }) => (
  <motion.div
    className="flex items-center space-x-3 hover:scale-105 transition-transform"
    whileHover={{ scale: 1.1 }}
  >
    <motion.img
      src={iconSrc}
      alt=""
      className="w-10 h-10 rounded-full shadow-lg"
      whileHover={{ rotate: 5 }}
    />
    <span className="text-lg">{text}</span>
  </motion.div>
);

export default ContactUsPage;
