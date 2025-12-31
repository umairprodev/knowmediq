import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Text Content */}
              <div className="lg:col-span-5 text-center lg:text-left z-10">
                <h1 className="text-4xl sm:text-5xl lg:text-[2.75rem] font-bold tracking-tight text-dark mb-6 leading-[1.2]">
                  A Connected AI Ecosystem <br /> for
                  <span className="text-primary">High-Impact Care</span>
                </h1>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  KnowMediQ bridges the gap between the clinic and the home. Our
                  AI Care Concierge personalizes the health journey—automating
                  patient follow-ups and unifying family coordination — to{" "}
                  <b>reduce avoidable readmissions</b> and drive{" "}
                  <b>increased KPIs</b> for clinicians.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="w-full sm:w-auto bg-primary cursor-pointer hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium transition-all shadow-xl shadow-purple-100 uppercase tracking-wide text-sm">
                    Book a Demo for Your Clinic
                  </button>
                  <button className="w-full sm:w-auto bg-white cursor-pointer hover:bg-purple-50 text-primary border border-purple-200 hover:border-primary px-4 py-2 rounded-md font-medium transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm">
                    Empower Your Caregiving Journey
                  </button>
                </div>
                <p className="mt-6 text-xs text-gray-400">
                  Empowering continuity of care through cultural intelligence.
                </p>
              </div>

              {/* Image Content */}
              <div className="lg:col-span-7 mt-12 lg:mt-0 relative h-[500px] flex items-center justify-end">
                {/* Purple Background Shape */}
                <div className="absolute top-0 right-0 w-[90%] h-full bg-primary rounded-[2rem] -z-10 transform translate-x-4 -translate-y-4"></div>

                {/* Main Image */}
                <div className="relative z-10 w-[90%] h-[90%] rounded-[2rem] overflow-hidden shadow-2xl mr-8">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-holding-hands-old-patient_23-2148962308.jpg"
                    alt="Caregiver holding hands"
                    className="w-full h-full object-cover"
                  />

                  {/* Floating Badge */}
                  <div className="absolute bottom-6 left-6 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    AI Care Concierge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillars Section (Grid Style) */}
        <section className="py-24 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 gap-16">
              {/* Heading Side */}
              <div className="lg:col-span-4 mb-12 lg:mb-0">
                <div className="h-1 w-10 bg-secondary mb-6"></div>
                <h2 className="text-3xl font-bold text-dark mb-6 leading-tight">
                  The "Three Pillars" <br /> of Our Ecosystem
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Our ecosystem connects clinicians, patients, and families in
                  one seamlessly integrated loop.
                </p>
              </div>

              {/* Grid Side */}
              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card 1 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 text-primary mb-6 bg-purple-50 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-3">
                      For Clinicians (B2B)
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Drive efficiency with a real-time dashboard that flags
                      risks before they become readmissions.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 text-secondary mb-6 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-3">
                      For Patients
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Never feel "discharged and forgotten." Receive empathetic,
                      culturally-aligned check-ins.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 text-green-600 mb-6 bg-green-50 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-3">
                      For Caregivers
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      The Ultimate Coordination Hub. Manage your loved one’s
                      health journey without the burnout.
                    </p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 text-purple-400 mb-6 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔄</span>
                    </div>
                    <h3 className="font-bold text-dark text-lg mb-3">
                      Complete Cycle
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      A single, connected view combining patient self-reporting
                      with caregiver observations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Clinicians (Network Style) */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
              {/* Image Side */}
              <div className="relative mb-12 lg:mb-0">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://img.freepik.com/free-photo/african-american-doctor-patient-looking-tablet-solidarity-compassion_482257-23097.jpg"
                    alt="Clinician using tablet"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating card overlap */}
                <div className="absolute -bottom-8 -right-8 w-64 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-6 hidden lg:block border border-gray-50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold text-dark uppercase tracking-wider">
                      Risk Alert Detected
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="pl-0 lg:pl-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-secondary"></div>
                  <span className="text-secondary font-bold text-sm tracking-widest uppercase">
                    For MDs & Healthcare Organizations
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">
                  Turn Patient Follow-ups into <br /> Actionable Insights
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Between appointments is where care often fails. KnowMediQ’s
                  B2B dashboard ensures your patients stay on track, providing
                  the visibility needed to optimize clinic KPIs and patient
                  outcomes.
                </p>
                {/* The Impact */}
                <div className="mb-10">
                  <h4 className="font-bold text-dark text-lg mb-6 border-l-4 border-secondary pl-4">
                    The Impact
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        icon: "📉",
                        color: "bg-red-50 text-red-600",
                        title: "Reduce Avoidable Visits",
                        desc: 'Catch "early signals" (like symptom spikes or non-adherence) through AI-driven triage.',
                      },
                      {
                        icon: "🔗",
                        color: "bg-blue-50 text-secondary",
                        title: "Enhanced Continuity",
                        desc: "A single, connected view combining patient self-reporting with caregiver observations.",
                      },
                      {
                        icon: "⚡",
                        color: "bg-yellow-50 text-yellow-600",
                        title: "AI-Summarized Snapshots",
                        desc: "Don't sift through data. Get concise summaries of patient progress ready for your next consult.",
                      },
                      {
                        icon: "⚙️",
                        color: "bg-gray-50 text-gray-600",
                        title: "Workflow Integration",
                        desc: 'Designed to reduce administrative "click-fatigue" while increasing patient touchpoints.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-dark mb-1">
                            {item.title}
                          </h5>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dashboard Features */}
                <div className="mb-10">
                  <h4 className="font-bold text-dark text-lg mb-6 border-l-4 border-primary pl-4">
                    Dashboard Features
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        icon: "🚨",
                        color: "bg-orange-50 text-orange-600",
                        title: "Risk-Prioritized Inbox",
                        desc: "See which patients need attention first based on AI analysis.",
                      },
                      {
                        icon: "📈",
                        color: "bg-green-50 text-green-600",
                        title: "Vitals & Adherence Trends",
                        desc: "Visual tracking of BP, symptoms, and medication compliance.",
                      },
                      {
                        icon: "📘",
                        color: "bg-purple-50 text-primary",
                        title: 'The Shared "Health Booklet"',
                        desc: "Access the patient’s cultural preferences and caregiver-uploaded documents.",
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div
                          className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-bold text-dark mb-1">
                            {item.title}
                          </h5>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="bg-primary hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium shadow-lg transition-colors uppercase text-sm tracking-wide">
                  Request an MD Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: For Patients (Reverse Layout) */}
        <section className="py-24 bg-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 gap-20 items-center">
              {/* Text Side */}
              <div className="pr-0 lg:pr-10 mb-12 lg:mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-primary"></div>
                  <span className="text-primary font-bold text-sm tracking-widest uppercase">
                    For Patients
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">
                  A Health Journey That <br /> Speaks Your Language
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Recovery shouldn't be confusing. Our AI Concierge checks in on
                  you with the warmth of a human and the precision of
                  technology.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4">
                    <span className="text-2xl">🗣️</span>
                    <div>
                      <h5 className="font-bold text-dark text-sm">
                        Cultural & Language Alignment
                      </h5>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h5 className="font-bold text-dark text-sm">
                        Proactive Care Check-ins
                      </h5>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 flex items-center gap-4">
                    <span className="text-2xl">💊</span>
                    <div>
                      <h5 className="font-bold text-dark text-sm">
                        Medication Adherence Support
                      </h5>
                    </div>
                  </div>
                </div>
                <button className="mt-8 bg-primary hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium shadow-lg transition-colors">
                  Join the Community
                </button>
              </div>

              {/* Image Side */}
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://img.freepik.com/free-photo/senior-woman-talking-her-friendly-doctor_23-2149029990.jpg"
                    alt="Patient talking to doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: Caregivers */}
        <section className="py-24 bg-dark text-white relative overflow-hidden">
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 block">
                For Family Caregivers
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                One Ecosystem. <br /> Total Coordination.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                KnowMediQ centralizes the "paperwork of care" so you can focus
                on being present for your loved one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📄",
                  title: "Digital Health Profile",
                  desc: "Store conditions & routines.",
                },
                {
                  icon: "🔗",
                  title: "Shared Care Hub",
                  desc: "Central repository for notes.",
                },
                {
                  icon: "🌍",
                  title: "Culturally Matched",
                  desc: "Find providers who fit needs.",
                },
                {
                  icon: "💰",
                  title: "Financial Org",
                  desc: "Keep invoices audit-ready.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
