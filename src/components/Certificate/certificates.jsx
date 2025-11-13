import React, { useState } from "react";
import { certificates } from "../../constants"; // Import from constants

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My professional certifications and achievements showcasing continuous
          learning and expertise.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            onClick={() => handleOpenModal(certificate)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certificate.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {certificate.organization}
              </p>
              <div className="mb-4">
                <span className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2">
                  {certificate.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[80%] md:w-[70%] max-w-2xl max-h-[80vh] overflow-auto relative">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:p-6 p-4 text-center">
                <h3 className="lg:text-2xl font-bold text-white mb-3 text-md">
                  {selectedCertificate.title}
                </h3>
                <p className="text-gray-400 mb-5 lg:text-base text-xs">
                  Issued by <strong>{selectedCertificate.organization}</strong>
                </p>
                <div className="flex justify-center mb-5">
                  <span className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1">
                    {selectedCertificate.date}
                  </span>
                </div>
                <a
                  href={selectedCertificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-5 py-2 rounded-xl text-sm font-semibold"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
