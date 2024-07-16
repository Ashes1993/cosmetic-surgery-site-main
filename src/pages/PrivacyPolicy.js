import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="policy-container">
        <ol>
          <li>
            <h3>Introduction</h3>
            <p>
              This Privacy Policy describes how [Med Travel Iran] collects,
              uses, and discloses your personal information when you use the
              Website (medtravelIran.com)
            </p>
          </li>
          <li>
            <h3>Information We Collect</h3>
            <p>
              We may collect contact information from you. <br />
              We collect this information when you contact us through the phone
              number listed on the Website or through a messaging service.
            </p>
          </li>
          <li>
            <h3>Use of Your Information</h3>
            <p>
              We use your information to respond to your inquiries and provide
              information about our services.
            </p>
          </li>
          <li>
            <h3>Disclosure of Your Information</h3>
            <p>
              We will not share your information with any third party without
              your consent, except as required by law.
            </p>
          </li>
          <li>
            <h3>Security</h3>
            <p>
              We take reasonable steps to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
              However, no website is 100% secure.
            </p>
          </li>
          <li>
            <h3>Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can also opt out of receiving communications from
              us.
            </p>
          </li>
          <li>
            <h3>Children's Privacy</h3>
            <p>
              Our Website is not intended for children under the age of 18. We
              do not knowingly collect personal information from children under
              18.
            </p>
          </li>
          <li>
            <h3>Changes to this Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on the
              Website.
            </p>
          </li>
          <li>
            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at [Your Email Address].
            </p>
          </li>
        </ol>
      </div>
    </>
  );
};

export default PrivacyPolicy;
