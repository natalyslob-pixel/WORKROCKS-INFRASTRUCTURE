/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Building2, GraduationCap, Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('EN');
  const dir = lang === 'HE' ? 'rtl' : 'ltr';
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang.toLowerCase();
  }, [lang, dir]);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="text-3xl font-black text-blue-900 tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif' }}>WORKROCKS</div>
        </div>
        
        <div className="hidden lg:flex gap-8 font-bold text-gray-700 uppercase text-sm">
          <a href="#about" className="hover:text-blue-600 transition">{t.nav.about}</a>
          <a href="#help-form" className="hover:text-blue-600 transition">{t.nav.getHelp}</a>
          <a href="#profiles" className="hover:text-blue-600 transition">{t.nav.housing}</a>
          <a href="#conference" className="hover:text-blue-600 transition">{t.nav.conference}</a>
        </div>

        <div className="flex items-center gap-2 flex-wrap justify-end">
          {(['HE', 'EN', 'RU', 'FR', 'ES'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 py-1 border rounded font-bold transition text-xs sm:text-sm ${
                lang === l 
                  ? 'bg-blue-900 text-white border-blue-900' 
                  : 'hover:bg-blue-50 hover:text-blue-900 border-gray-200 text-gray-600'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-24 px-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#help-form" className="bg-white text-blue-900 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition shadow-xl uppercase inline-block">
              {t.hero.getHelpBtn}
            </a>
            <a href="#conference-form" className="border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-blue-900 transition uppercase inline-block">
              {t.hero.conferenceBtn}
            </a>
          </div>
        </motion.div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full bg-blue-400 blur-3xl"></div>
        </div>
      </section>

      {/* Profiles Grid */}
      <section id="profiles" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-black text-center mb-16 uppercase text-blue-900 tracking-wide"
        >
          {t.profiles.title}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Business */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-blue-600 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
              <Building2 className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">{t.profiles.business.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">{t.profiles.business.desc}</p>
            <button className="text-blue-700 font-bold hover:text-blue-900 flex items-center gap-2 group/btn">
              {t.profiles.business.btn.replace(' \u2192', '').replace(' \u2190', '')}
              <ArrowIcon className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
            </button>
          </motion.div>

          {/* Senior Advisor */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-amber-500 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <GraduationCap className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">{t.profiles.advisor.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">{t.profiles.advisor.desc}</p>
            <button className="text-amber-600 font-bold hover:text-amber-700 flex items-center gap-2 group/btn">
              {t.profiles.advisor.btn.replace(' \u2192', '').replace(' \u2190', '')}
              <ArrowIcon className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
            </button>
          </motion.div>

          {/* Housing */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-emerald-600 transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <Home className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-gray-900">{t.profiles.housing.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">{t.profiles.housing.desc}</p>
            <button className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-2 group/btn">
              {t.profiles.housing.btn.replace(' \u2192', '').replace(' \u2190', '')}
              <ArrowIcon className={`w-4 h-4 transition-transform ${dir === 'rtl' ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Forms Section */}
      <section id="help-form" className="py-24 bg-blue-50/50 px-6 border-t border-blue-100">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          
          <h2 className="text-3xl font-black mb-10 text-blue-900 border-b border-gray-100 pb-6 tracking-tight">
            {t.form.title}
          </h2>
          
          <form action="https://formspree.io/f/zaks.natali@gmail.com" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">{t.form.name}</label>
                <input type="text" name="name" placeholder={t.form.name} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">{t.form.email}</label>
                <input type="email" name="email" placeholder={t.form.email} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">Profession</label>
                <select name="profession" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium text-gray-700 appearance-none cursor-pointer">
                  {t.form.professions.map((prof, idx) => (
                    <option key={idx} value={prof}>{prof}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600 ml-1">{t.form.city}</label>
                <input type="text" name="city" placeholder={t.form.city} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all" />
              </div>
            </div>
            
            <div className="space-y-2 pt-2">
              <label className="text-sm font-bold text-gray-600 ml-1">Details</label>
              <textarea name="description" rows={5} placeholder={t.form.desc} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"></textarea>
            </div>
            
            <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-xl font-black text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4">
              {t.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-4xl font-black mb-10 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>WORKROCKS</div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm uppercase font-bold text-gray-400">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-10 opacity-50"></div>
          
          <p className="text-gray-400 italic mb-8 text-lg font-light max-w-2xl mx-auto">
            {t.footer.quote}
          </p>
          
          <a href="mailto:zaks.natali@gmail.com" className="inline-block text-blue-400 font-bold hover:text-blue-300 transition-colors text-lg mb-16">
            zaks.natali@gmail.com
          </a>
          
          <div className="text-gray-600 text-xs tracking-wider">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}
