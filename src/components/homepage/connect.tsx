import { useState } from "react";
import Backarrow from "./backarrow";

export default function Connect() {
  const [notification, setNotification] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    if (!name || !email || !message) {
      setNotification("⚠️ Please fill in all fields.");
      setTimeout(() => setNotification(null), 3000);
      return;
    }
           
   
    const newEntry = { name, email, message, date: new Date().toISOString() };

    
    const existing = JSON.parse(localStorage.getItem("messages") || "[]");

  
    localStorage.setItem("messages", JSON.stringify([...existing, newEntry]));

   
    setNotification("✅ Your message has been sent successfully!");
    setTimeout(() => setNotification(null), 3000);

   
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-primary text-secondary flex flex-col items-center justify-center px-6 font-bebasNeue relative">
    <Backarrow />
      <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
      <p className="text-secondary-300 max-w-lg text-center mb-8">
        We’d love to hear from you! Whether you have questions about our
        services, want to book an appointment, or just want to say hi, feel free
        to reach out.
      </p>

    
      {notification && (
        <div className="absolute top-5 right-5 bg-secondary text-primary px-4 py-2 rounded shadow-lg transition">
          {notification}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 rounded bg-tertiary border border-secondary focus:outline-none font-bebasNeue"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-tertiary border border-secondary focus:outline-none font-bebasNeue"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-3 rounded bg-tertiary border border-secondary focus:outline-none font-bebasNeue"
        />
        <button
          type="submit"
          className="bg-secondary text-primary font-semibold py-3 rounded hover:bg-tertiary transition font-bebasNeue"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
