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
                  <span className="text-primary"> High-Impact Care</span>
                </h1>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  KnowMediQ bridges the gap between the clinic and the home. Our
                  AI Care Concierge personalizes the health journey—automating
                  patient follow-ups and unifying family coordination — to{" "}
                  <b>reduce avoidable readmissions</b> and drive{" "}
                  <b>increased KPIs</b> for clinicians.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-primary text-center cursor-pointer hover:bg-purple-800 text-white px-4 py-2 rounded-md font-medium transition-all shadow-xl shadow-purple-100 uppercase tracking-wide text-sm"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto bg-white text-center cursor-pointer hover:bg-purple-50 text-primary border border-purple-200 hover:border-primary px-4 py-2 rounded-md font-medium transition-all shadow-md hover:shadow-lg uppercase tracking-wide text-sm"
                  >
                    Empower Your Caregiving Journey
                  </a>
                </div>
                <p className="mt-8 text-lg text-gray-600 font-medium italic">
                  Empowering continuity of care through cultural intelligence.
                </p>
              </div>

              {/* Image Content */}
              <div className="lg:col-span-7 mt-12 lg:mt-0 relative min-h-[300px] sm:min-h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end">
                {/* Purple Background Shape */}
                <div className="absolute top-0 right-0 w-[95%] lg:w-[90%] h-full bg-primary rounded-4xl -z-10 transform translate-x-2 lg:translate-x-4 -translate-y-2 lg:-translate-y-4"></div>

                {/* Main Image Container */}
                <div className="relative z-10 w-full lg:w-[90%] flex flex-col items-center lg:mr-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl w-full mb-6 bg-gray-50">
                    <video
                      src="/knowmediq.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto block"
                    />
                  </div>

                  {/* Title below the picture */}
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary tracking-tight">
                    AI Care Concierge
                  </h3>
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
                <div className="relative rounded-4xl overflow-hidden shadow-xl aspect-square">
                  <img
                    src="https://img.freepik.com/free-photo/african-american-doctor-patient-looking-tablet-solidarity-compassion_482257-23097.jpg"
                    alt="Clinician using tablet"
                    className="w-full h-full object-cover"
                  />
                </div>

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
              <div className="pl-0 lg:pl-10 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="h-0.5 w-12 bg-secondary"></div>
                  <span className="text-secondary font-bold text-sm tracking-widest uppercase">
                    For MDs & Healthcare Organizations
                  </span>
                  <div className="h-0.5 w-12 bg-secondary"></div>
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
                          className={`shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl`}
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
                          className={`shrink-0 w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-xl`}
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

                <a
                  href="#contact"
                  className="inline-block bg-primary hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium shadow-lg transition-colors uppercase text-sm tracking-wide"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive: For Patients (Centered Layout) */}
        <section className="py-24 bg-light overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Centered Label */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-primary"></div>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  For Patients
                </span>
                <div className="h-0.5 w-12 bg-primary"></div>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6 leading-tight">
                A Health Journey That <br /> Speaks Your Language
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                Recovery shouldn't be confusing. Our AI Concierge checks in on
                you with the warmth of a human and the precision of technology.
              </p>

              <div className="space-y-4 max-w-lg mx-auto text-left">
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-4">
                  <span className="text-2xl">🗣️</span>
                  <div>
                    <h5 className="font-bold text-dark text-sm uppercase tracking-wide">
                      Cultural & Language Alignment
                    </h5>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-4">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h5 className="font-bold text-dark text-sm uppercase tracking-wide">
                      Proactive Care Check-ins
                    </h5>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex items-center gap-4">
                  <span className="text-2xl">💊</span>
                  <div>
                    <h5 className="font-bold text-dark text-sm uppercase tracking-wide">
                      Medication Adherence Support
                    </h5>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-12 inline-block bg-primary hover:bg-purple-800 text-white px-10 py-4 rounded-md font-bold shadow-lg transition-transform hover:-translate-y-1"
              >
                Join the Community
              </a>
            </div>
          </div>
        </section>

        {/* Deep Dive: Caregivers */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-secondary"></div>
                <span className="text-secondary font-bold text-sm tracking-widest uppercase">
                  For Family Caregivers
                </span>
                <div className="h-0.5 w-12 bg-secondary"></div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark mb-6">
                One Ecosystem. <br /> Total Coordination.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                Caregiving is a team sport. KnowMediQ centralizes the “paperwork
                of care” so you can focus on being present for your loved
                one—while keeping everyone connected across home care and
                virtual services.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-20">
                {[
                  {
                    icon: "📄",
                    title: "The Digital Health Profile",
                    desc: "Store conditions, medications, routines, and “what works” in a shareable profile for new providers or PSWs.",
                  },
                  {
                    icon: "🔗",
                    title: "The Shared Care Hub",
                    desc: "A central repository for HCP notes, visit summaries, and therapist documents—so nothing gets lost and everyone stays connected.",
                  },
                  {
                    icon: "🌍",
                    title: "Culturally Matched Care",
                    desc: "Use our directory to find providers who fit your family’s specific language and cultural needs—because care isn’t one-size-fits-all.",
                  },
                  {
                    icon: "💰",
                    title: "Financial Organization",
                    desc: "Keep invoices and service logs in one secure, audit-ready location (helpful for reimbursements, budgeting, and peace of mind).",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left"
                  >
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h3 className="font-bold text-xl mb-3 text-dark">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-transparent via-purple-200 to-transparent mx-auto mb-16 opacity-50"></div>

              <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-6">
                Medical AI that personalizes your loved one’s health journey
              </h3>
              <p className="text-lg text-gray-500 leading-relaxed mb-4">
                Care shouldn’t feel like guesswork. KnowMediQ’s medical AI
                supports personalization across the full health journey by
                helping you understand what’s happening now—and what to do next
                (with consent and the right people involved).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: "🧭",
                  title: "Who to see next",
                  desc: "Based on your loved one’s profile, current needs, and preferences, the concierge can suggest the type of support to consider next (e.g., family doctor, nurse, pharmacist, therapist, PSW, nutritionist) and help you prepare questions.",
                },
                {
                  icon: "⚡",
                  title: "Rapid access to care",
                  desc: "When something changes, you get a clearer path to the right next step—so you spend less time unsure, waiting, or bouncing between options.",
                },
                {
                  icon: "🛡️",
                  title: "Preventive care, not just urgent care",
                  desc: "Gentle follow-ups and early signals help catch issues sooner, support healthier routines, and reduce avoidable visits.",
                },
                {
                  icon: "�",
                  title: "Clear summaries for providers",
                  desc: "Turn day-to-day updates into a short, shareable snapshot that helps providers get up to speed faster and make better-informed decisions.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3 text-dark">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* What this changes for families */}
            <div className="max-w-4xl mx-auto mt-24 bg-purple-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
              <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-10 text-center">
                What this changes for families
              </h3>
              <ul className="grid gap-6 mb-12">
                {[
                  "Less repeating the story (everyone sees the same up-to-date profile and notes)",
                  "Fewer missed details between visits (updates are captured while they’re fresh)",
                  "A more connected ecosystem of care around your loved one (family + providers stay aligned)",
                  "Faster, more confident access to the right care (know who to contact next and what to prepare—so you don’t lose time in uncertainty)",
                  "More preventive care, less crisis care (early signals and follow-ups help address issues sooner and reduce avoidable visits)",
                  "A clearer, more personalized path through the health journey—including “what’s next” and “who can help”",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-600 text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-block bg-primary hover:bg-purple-800 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Join the Care Network
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-light relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-4xl shadow-2xl p-8 lg:p-16 border border-gray-50">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                  Book a Demo
                </h2>
                <p className="text-gray-500">
                  Ready to transform your care journey? Fill out the form below
                  and our team will get back to you shortly.
                </p>
              </div>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-light border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-light border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-light border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wide">
                    Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Hospital / Clinic Name"
                    className="w-full bg-light border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-dark uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-light border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 mt-4 text-center">
                  <button className="bg-secondary cursor-pointer text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto duration-300">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
