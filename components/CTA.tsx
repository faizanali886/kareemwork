import Image from "next/image";
import ButtonLead from "./ButtonLead";
import { FC } from "react";

const CTA: FC = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
          Ready to take control of your financial future?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
          Sign up for WealthWell today and unlock personalized financial coaching, AI-driven insights, 
          and powerful tools to achieve your goals. Start your journey to financial empowerment now!
          </p>

          {/* ***REMOVE THE COMMENT THIS WHEN READY FOR PROD*** 
          
          <button className="btn btn-primary btn-wide">
            Get {config.appName}
              </button>*/}
          <ButtonLead />
        </div>
      </div>
    </section>
  );
};

export default CTA;
