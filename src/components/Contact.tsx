import { useState } from "react";
import {
  Mail,
  Linkedin,
  Send,
  Github,
  CheckCircle2,
  Heart,
  X,
} from "lucide-react"; // Added 'X' for the close button
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // New state for modal
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    try {
      setIsSending(true);

      const response = await fetch("https://formsubmit.co/ajax/usamatoor28@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Contact: New Message`,
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      // TRIGGER THE CUSTOM CENTERED MODAL HERE
      setShowSuccessModal(true);

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Problem sending",
        description: "Please email me directly at usamatoor28@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const socialLinks = [
    {
      name: "Email Me",
      icon: Mail,
      href: "mailto:usamatoor28@gmail.com",
      label: "usamatoor28@gmail.com",
      gradient: "from-red-500 via-rose-500 to-red-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/usama-toor-01178724b/",
      label: "linkedin.com/in/usamatoor",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/UsamaToor28",
      label: "github.com/usamatoor",
      gradient: "from-gray-700 via-gray-800 to-black",
    },
  ];

  const availability = [
    "Full-time opportunities",
    "Freelance projects",
    "Design consultations",
    "Creative collaborations",
  ];

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden border-t border-gray-200"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full mb-6">
            <Heart className="h-4 w-4 text-teal-600" />
            <span className="text-sm font-bold text-teal-700">
              Let's Work Together
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight block text-black mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form - Left Side */}
          <Card className="border-2 border-gray-200 shadow-xl rounded-2xl animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-3xl font-black text-gray-800 mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 text-base rounded-lg border-2 border-gray-200 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 text-base rounded-lg border-2 border-gray-200 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="text-base rounded-lg resize-none border-2 border-gray-200 focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-base font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] rounded-lg"
                  disabled={isSending}
                >
                  {isSending ? "Sending…" : "Send Message"}
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info - Right Side */}
          <div className="space-y-8 animate-scale-in">
            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                if (link.name === "Email Me") {
                  return (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();

                        // Universal mailto
                        const mailtoLink =
                          "mailto:usamatoor28@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Usama,%20I%20saw%20your%20portfolio...";
                        window.location.href = mailtoLink;

                        // Gmail fallback
                        setTimeout(() => {
                          window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=usamatoor28@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Usama,%20I%20saw%20your%20portfolio...",
                            "_blank"
                          );
                        }, 500);
                      }}
                      className="group relative block"
                    >
                      {/* same inner divs as before */}
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl blur opacity-0 group-hover:opacity-35 transition duration-500`}
                      ></div>
                      <div className="relative flex items-center gap-5 bg-white border-2 border-gray-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6`}
                        >
                          <link.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-gray-800">{link.name}</h4>
                          <p className="text-sm text-gray-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                            {link.label}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                }

                // Default case for LinkedIn, Github, etc.
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-2xl blur opacity-0 group-hover:opacity-35 transition duration-500`}
                    ></div>
                    <div className="relative flex items-center gap-5 bg-white border-2 border-gray-200 rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <link.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-gray-800">{link.name}</h4>
                        <p className="text-sm text-gray-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all">
                          {link.label}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}

            </div>

            {/* Availability Info */}
            <Card className="border-2 border-gray-200 rounded-2xl shadow-xl">
              <CardContent className="p-8">
                <h4 className="text-2xl font-black text-gray-800 mb-4">
                  Available for
                </h4>
                <ul className="space-y-3">
                  {availability.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal-500" />
                      <span className="text-base text-gray-700 font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* --- SUCCESS POPUP MODAL --- */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full shadow-2xl transform transition-all scale-100 animate-in zoom-in-95 duration-200 relative border border-teal-100">
            
            {/* Minimal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Message Sent!
              </h3>
              <button 
                onClick={closeSuccessModal}
                className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Minimal Text */}
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Thank you for your message. I'll get back to you soon.
            </p>

            {/* Minimal Button */}
            <button 
              onClick={closeSuccessModal}
              className="w-full py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;