import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 4/2/2024

Welcome to WealthWell!

By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our website.

1. Description of Service

WealthWell (referred to as "We," "Us," or "Our") provides a personalized finance coaching platform powered by AI to empower your financial journey. Our services include setting achievable goals, financial analysis, and personalized recommendations to help you achieve prosperity.

2. Ownership

By purchasing a subscription, you agree to allow us to collect and use your personal data, including name, email, payment information, and financial transactions. You may request a full refund within 7 days of purchase by contacting us at admin@wealthwell.com.

3. User Data Collection

We collect and use user data, including personal and financial information, to provide our services and improve user experience. We also collect non-personal data through web cookies.

4. Governing Law

These terms and conditions shall be governed by and construed in accordance with the laws of the State of Florida, United States.

5. Updates to the Terms

We may update these terms from time to time. Users will be notified of any changes via email.

By using our website, you agree to these terms and conditions. If you do not agree with any part of these terms, please do not use our website.

For any questions or concerns regarding these terms, please contact us at admin@wealthwell.com.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
