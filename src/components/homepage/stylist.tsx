import { useState } from "react";

interface Stylist {
  name: string;
  experience: string;
  description: string;
  image: string;
}

const stylists: Stylist[] = [
  {
    name: "Nellie Russell",
    experience: "8 Years of Experience",
    description:
      "I am an expert hairdresser, advising clients and tailoring cuts, colouring and hairstyles to suit their looks.",
    image:
      "https://i.pinimg.com/1200x/63/54/2a/63542a68c5a0c734b74bc2b303d7ef64.jpg",
  },
  {
    name: "Maria Stone",
    experience: "5 Years of Experience",
    description:
      "Specialist in creative styling, modern cuts, and personalized hair treatments.",
    image:
      "https://i.pinimg.com/1200x/51/22/bf/5122bf112471fa5648531b042aed2f7f.jpg",
  },
  {
    name: "Clara Jones",
    experience: "10 Years of Experience",
    description:
      "Passionate about classic styles, professional coloring, and customer-focused results.",
    image:
      "https://i.pinimg.com/1200x/b7/86/3a/b7863a60cb7fe36c7e504412aa4754ea.jpg",
  },
];

export default function StylistsSection() {
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % stylists.length);
  const prev = () => setCurrent((prev) => (prev - 1 + stylists.length) % stylists.length);

  const stylist = stylists[current];

  const chooseStylist = () => {
    setMessage(`✨ You selected ${stylist.name} as your stylist!`);
    setTimeout(() => setMessage(null), 2000); 
  };

  return (
    <section className="bg-primary py-12 px-6 relative">
      <h1 className="font-bebasNeue text-6xl mb-6 text-tertiary">STYLIST</h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      
        <div className="aspect-square overflow-hidden">
          <img
            src={stylist.image}
            alt={stylist.name}
            className="object-cover w-full h-full grayscale"
          />
        </div>

       
        <div className="flex flex-col space-y-4">
          <p className="text-sm font-bebasNeue text-secondary">
            {stylist.experience}
          </p>
          <h3 className="text-tertiary text-2xl font-bebasNeue">{stylist.name}</h3>
          <p className="text-secondary">{stylist.description}</p>

          <button
            onClick={chooseStylist}
            className="bg-tertiary cursor-pointer text-primary px-6 py-3 mt-4 w-fit hover:bg-gray-800 transition"
          >
            Choose a Specialist
          </button>

          <div className="flex justify-between mt-6">
            <button onClick={prev} className=" p-2 border rounded hover:bg-primary-200 cursor-pointer">
              ←
            </button>
            <button onClick={next} className="p-2 border rounded hover:bg-primary-200  cursor-pointer">
              →
            </button>
          </div>
        </div>
      </div>

     
      {message && (
        <div className="fixed bottom-6 right-6 bg-tertiary text-primary px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {message}
        </div>
      )}
    </section>
  );
}
