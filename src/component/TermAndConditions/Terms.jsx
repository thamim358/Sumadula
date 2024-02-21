import React, { useEffect } from "react";
import WOW from "wow.js";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Terms = () => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <section id="terms">
        <div
          className="section pb-10 min-h-screen p-6"
          id="terms"
          style={{ textAlign: "justify", textJustify: "auto" }}
        >
          <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
            <p className="text-4xl sm:text-4xl lg:text-5xl text-[#70C64F] font-Achi font-bold text-center wow fadeInUp pt-4 ">
              Terms And Conditions
            </p>
            <div className="">
              <p className="mt-6 text-gray-500 text-base  wow fadeInUp">
                Welcome to Sumadula, your trusted provider of educational support for girl child education. By using our services, you agree to comply with and be bound by the following terms and conditions:
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">1. Acceptance of Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                By accessing or using the services provided by Sumadula, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">2. Services</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Sumadula offers a range of educational support services for girl child education. The specific details, including the type of support provided, eligibility criteria, and application process, will be outlined on our website or in communication materials.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">3. Eligibility</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Our services are aimed at supporting the education of girls from underprivileged backgrounds. Eligibility criteria may vary depending on the specific program or initiative. Please refer to the relevant documentation for details.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">4. Application Process</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                To apply for educational support from Sumadula, applicants must follow the instructions outlined in the application guidelines. Submission deadlines and required documentation will be specified in the application materials.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">5. Use of Funds</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Funds provided by Sumadula are intended solely for educational purposes. Recipients must use the funds responsibly and in accordance with the terms specified in the grant agreement or scholarship terms.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">6. Accountability</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Sumadula is committed to transparency and accountability in its operations. Recipients of educational support may be required to provide periodic reports or updates on their educational progress.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">7. Changes to Terms</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                Sumadula reserves the right to make changes to these terms and conditions at any time without prior notice. Applicants and recipients will be notified of any significant changes that may affect their rights or obligations.
              </p>

              <h2 className="mt-6 text-black font-bold text-xl  wow fadeInUp">8. Contact Information</h2>
              <p className="mt-1 text-gray-500 text-base  wow fadeInUp">
                If you have any questions or concerns regarding these terms and conditions, please contact us at{" "}
                <a href="mailto:info@sumadula.org">info@sumadula.com</a>.
              </p>

              <p>These terms and conditions were last updated on 2024.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
