
import React from 'react';
import { motion } from 'framer-motion';

const CertificatesSection = () => {
  const certificates = [
    {
      name: "Front-end Web Development",
      issuer: "Infosys Springboard",
      image: "https://i0.wp.com/opportunitycell.com/wp-content/uploads/2023/01/a477211cb8f419d6c048f962aa2ebd38.jpg?fit=700%2C467&ssl=1",
      link: "https://drive.google.com/file/d/1wBTdGQt1TGmGEdEjurEq0KB-XFsyxNoo/view"
    },
    {
      name: "Prompt Engineering",
      issuer: "DeepLearning.AI",
      image: "https://www.udacity.com/blog/wp-content/uploads/2021/03/AI-vs-Deep-Learning_Blog-scaled.jpeg",
      link: "https://learn.deeplearning.ai/accomplishments/e38ef3a5-36df-4620-9290-6b1f9e83ef6a?usp=sharing"
    },
    {
      name: "Bring AI Work Workshop",
      issuer: "Google Workspace",
      image: "https://www.milesweb.com/blog/wp-content/uploads/2025/02/what-is-google-workspace.png",
      link: "https://drive.google.com/file/d/1QtuyzcUWGE9u87K0uzZjLKjI7xEwFun4/view?usp=drive_link"
    },
    {
      name: "UI/UX Design",
      issuer: "GDGC NIT Silchar",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9bTiy2jTG_brAspNUlyMGrsGnlSO-fMRdA&s",
      link: "http://certificate.givemycertificate.com/c/1f749724-25b7-4e6b-b299-d259be3e36af"
    }
  ];

  return (
    <section id="certificates" className="relative py-20 z-10">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Certificates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-purple-400 text-sm mb-4">{cert.issuer}</p>
                <motion.a
                  href={cert.link}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
