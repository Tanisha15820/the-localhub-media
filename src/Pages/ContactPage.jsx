import { useState } from "react";
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

    formData.append("access_key", "eb2c4d3b-d719-410a-ba89-51c45bfe6916");

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
   <>
    <section className="min-h-screen bg-bgMain py-20 px-6 font-main overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold uppercase tracking-[3px] text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
            Let's Build Something
            <span className="text-primary"> Amazing Together</span>
          </h2>

          <p className="text-textSecondary mt-5 text-base leading-relaxed">
            Have a project, brand, or idea in mind? Fill out the form and our
            team will get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT INFO */}
          <div className="space-y-6">
            <div className="bg-card border border-black/5 rounded-3xl p-7 hover:shadow-xl transition duration-500">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Mail className="text-primary" size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    Email Us
                  </h3>
                  <p className="text-textSecondary">
                    hello@yourcompany.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-black/5 rounded-3xl p-7 hover:shadow-xl transition duration-500">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <Phone className="text-primary" size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    Call Us
                  </h3>
                  <p className="text-textSecondary">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-black/5 rounded-3xl p-7 hover:shadow-xl transition duration-500">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-primary/10">
                  <MapPin className="text-primary" size={26} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-textPrimary mb-2">
                    Location
                  </h3>
                  <p className="text-textSecondary">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-card border border-black/5 rounded-[32px] p-8 md:p-10 shadow-xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-textPrimary block mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-textPrimary block mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-textPrimary block mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-textPrimary block mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project"
                  rows="5"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-black/10 outline-none focus:border-primary transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition duration-300"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {success && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-2xl px-4 py-3 mt-4">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">
                    Message sent successfully!
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 px-6">
  <div className="max-w-5xl mx-auto bg-primary rounded-[40px] p-10 md:p-16 text-center text-white relative overflow-hidden">

    {/* Glow */}
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 blur-[100px]" />
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white/10 blur-[100px]" />

    <p className="uppercase tracking-[4px] text-sm mb-4 text-white/70">
      Free Consultation
    </p>

    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Ready For Your <br />
      Strategy Call?
    </h2>

    <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
      Let’s discuss your goals, brand positioning, and how we can
      help scale your business digitally.
    </p>

    <a
      href="https://calendly.com/tanisha15820/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-8 bg-white text-primary px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
    >
      Book Strategy Call
    </a>
  </div>
</section>
   </>
  );
}
