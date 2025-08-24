import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    specialist: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    const existingAppointments = JSON.parse(
      localStorage.getItem("appointments") || "[]"
    );

  
    const updatedAppointments = [...existingAppointments, form];

   
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    console.log("Appointment booked:", form);
    alert("Your appointment has been booked!");

  
    setForm({ name: "", phone: "", specialist: "", date: "" });
  };

  return (
   
    <section id="contact" className="py-12 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 font-bebasNeue uppercase">
          Book an Appointment
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-2 bg-tertiary p-6 rounded-lg shadow"
        >
          <div>
            <label className="font-bebasNeue block text-secondary mb-2">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg font-bebasNeue"
                required
              />
            </label>
          </div>

          <div>
            <label className="block text-secondary mb-2 font-bebasNeue">
              Phone
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </label>
          </div>

          <div>
            <label className="font-bebasNeue block text-secondary mb-2 ">
              Specialist
              <input
                type="text"
                name="specialist"
                value={form.specialist}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </label>
          </div>

          <div>
            <label className="block text-secondary mb-2">
              Date
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-secondary custom-date-input"
              />
            </label>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-primary text-tertiary py-3 font-bebasNeue rounded-lg hover:bg-secondary uppercase"
            >
              Book An Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
