import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Licensing() {
  return (
    <>
      <Header />
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
          <h1 className="text-3xl font-semibold mb-6 text-[#70C64F]">
            Licensing
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              1. Licensing Information
            </h2>
            <p>
              Sumadula, established in 2023, is an educational trust with a dedicated mission: to empower and support girl child education. We focus on making a tangible difference by donating essential products that directly enhance the educational journey of young students.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">
              2. Licensing Compliance
            </h2>
            <p>
              We ensure compliance with industry standards and regulations through our licensing and certifications. Our commitment to quality, craftsmanship, and adherence to regulatory requirements is fundamental to our operations.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              For any inquiries or further information regarding our licensing and certifications, please contact us at{" "}
              <a
                href="mailto:info@sumadula.com"
                className="text-blue-500"
              >
                info@sumadula.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Licensing;
