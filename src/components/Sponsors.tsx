import React from 'react';
import { motion } from 'motion/react';

const sponsors = [
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png', tier: 'Title' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png', tier: 'Platinum' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png', tier: 'Platinum' },
  { name: 'GitHub', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png', tier: 'Gold' },
  { name: 'Postman', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Postman_%28software%29.png/800px-Postman_%28software%29.png', tier: 'Gold' },
  { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_and_wordmark.svg/2560px-Vercel_logo_and_wordmark.svg.png', tier: 'Silver' },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-slate-400">Supporting the next generation of innovators.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer group border-white/5"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-8 md:h-10 object-contain mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{sponsor.tier} Sponsor</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">Interested in sponsoring Devcation?</p>
          <button className="px-8 py-3 glass text-white rounded-full font-bold hover:bg-white/10 transition-all border-primary/30">
            Download Sponsorship Deck
          </button>
        </div>
      </div>
    </section>
  );
};
