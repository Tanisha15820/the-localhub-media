import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "fbfcb500-8fcc-4a83-bbf7-e94a47a6d03a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      setSuccess(true);
      e.target.reset();
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-bgMain py-16 md:py-20 px-4 sm:px-6 font-main overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <Reveal>
          <div className="max-w-3xl mx-auto mb-12 md:mb-16">
            <SectionHeader
              tag="Contact Us"
              title="Let's Turn Your"
              highlight="Vision"
              endText="Into Growth."
              subtitle="Whether you're launching a brand, scaling your business, or improving your digital presence — we're here to help make it happen."
            />
          </div>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">

          {/* LEFT INFO */}
          <div className="space-y-4 md:space-y-6">

            <Reveal delay={100}>
              <div className="bg-card border border-black/5 rounded-2xl md:rounded-3xl p-5 md:p-7 hover:shadow-xl transition duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-2xl bg-primary/10">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-1 md:mb-2">
                      Email Us
                    </h3>
                    <p className="text-textSecondary text-sm md:text-base break-all">
                      info@thelocalhubmedia.com
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-card border border-black/5 rounded-2xl md:rounded-3xl p-5 md:p-7 hover:shadow-xl transition duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-2xl bg-primary/10">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-1 md:mb-2">
                      Call Us
                    </h3>
                    <p className="text-textSecondary text-sm md:text-base">
                      +1 437-313-5874
                    </p>
                    <p className="text-textSecondary text-sm md:text-base">
                      +91 9999887009
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-card border border-black/5 rounded-2xl md:rounded-3xl p-5 md:p-7 hover:shadow-xl transition duration-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-2xl bg-primary/10">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-textPrimary mb-1 md:mb-2">
                      Location
                    </h3>
                    <p className="text-textSecondary text-sm md:text-base">
                      Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          {/* FORM */}
          <Reveal delay={150}>
            <div className="bg-card border border-black/5 rounded-2xl md:rounded-[32px] p-6 md:p-10 shadow-xl backdrop-blur-sm">

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

                {/* NAME */}
                <div>
                  <label className="text-sm font-medium text-textPrimary block mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-textPrimary block mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-medium text-textPrimary block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-textPrimary block mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your project"
                    rows="5"
                    className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition duration-300 text-sm md:text-base"
                >
                  {loading ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>

                {/* SUCCESS */}
                {success && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-xl md:rounded-2xl px-4 py-3 mt-4">
                    <CheckCircle2 size={20} />
                    <p className="text-sm font-medium">
                      Message sent successfully!
                    </p>
                  </div>
                )}

              </form>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}