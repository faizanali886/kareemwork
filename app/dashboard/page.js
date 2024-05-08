import ButtonAccount from "@/components/ButtonAccount";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
// export default async function Dashboard() {
//  return (
//    <main className="min-h-screen p-8 pb-24">
//      <section className="max-w-xl mx-auto space-y-8">
//        <ButtonAccount /> hello
//        <h1 className="text-3xl md:text-4xl font-extrabold">Private Page</h1>
//      </section>
//    </main>
//  );
//}

import { Suspense } from 'react'
import HeaderAuth from "@/components/HeaderAuth";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>  
        <HeaderAuth />
        
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}