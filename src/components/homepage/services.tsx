import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Backarrow from "./backarrow";

export default function Services() {
  const navigate = useNavigate();

  
  const tabs = [
    { id: "color", label: "COLOR & HIGHLIGHTS" },
    { id: "cut", label: "CUT & STYLING" },
    { id: "care", label: "TREATMENTS & CARE" },
    { id: "texture", label: "TEXTURE & PERMS" },
  ];

  
  const [activeTab, setActiveTab] = useState("cut");


  const content: Record<string, { title: string; img1: string; img2: string; desc: string }> = {
    color: {
      title: "Color & Highlights",
      img1: "https://i.pinimg.com/736x/b1/54/07/b15407dd6c62e6d2bcd4ed282e8b0aef.jpg",
      img2: "https://i.pinimg.com/1200x/63/e5/ba/63e5ba06107b3a6f3487c3900131e876.jpg",
      desc: "Professional coloring and highlights to bring out your style. Transform your look with vibrant colors and natural highlights tailored to your skin tone and personal style. Whether you want subtle balayage, bold fashion shades, or classic tones, our stylists use premium products to ensure long-lasting results with a healthy shine.",
    },
    cut: {
      title: "Cut & Styling",
      img1: "https://i.pinimg.com/1200x/0f/1f/f2/0f1ff292890a425d4c8c7b269492c10a.jpg",
      img2: "https://i.pinimg.com/736x/d7/36/c8/d736c89628a41666049fb4c0f4c7f9ac.jpg",
      desc: "Trendy cuts and styling for all occasions.From precision cuts to effortless styling, we craft looks that highlight your features and fit your lifestyle. Whether it’s a fresh trim, a bold new haircut, or a special occasion style, our team ensures you leave looking polished and feeling confident.",
    },
    care: {
      title: "Treatments & Care",
      img1: "https://i.pinimg.com/1200x/1b/e4/ae/1be4ae30d56dbaff48881baafb21f38c.jpg",
      img2: "https://i.pinimg.com/1200x/39/8e/47/398e4790fc5757779928f0e4c83d2c01.jpg",
      desc: "Relaxing treatments and care for healthy, shiny hair.Give your hair the nourishment it deserves with our deep conditioning treatments and restorative therapies. Perfect for dry, damaged, or stressed hair, our care services restore vitality, leaving your hair silky, strong, and full of natural shine.",
    },
    texture: {
      title: "Texture & Perms",
      img1: "https://i.pinimg.com/736x/27/35/a7/2735a72e3afd04ab1407e418a14cee3c.jpg",
      img2: "https://i.pinimg.com/1200x/d3/87/bc/d387bc1116a9d6a5d5215569bc9d556a.jpg",
      desc: "Add texture and perms to reinvent your hairstyle. Reinvent your style with added volume, waves, or curls through our expert texture and perm services. Whether you’re seeking a beachy, relaxed vibe or a bold, defined look, we customize every treatment to enhance your natural beauty and keep your hair healthy.",
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen px-10 py-12">
     <Backarrow />
      <div className="flex justify-between items-start mt-3">
        <h1 className="text-5xl font-bebasNeue">SERVICES</h1>
     
        <div className="flex space-x-6 text-sm font-semibold tracking-wide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-1 ${
                activeTab === tab.id
                  ? "border-b-2 border-tertiary text-tertiary"
                  : "text-secondary -600 hover:text-tertiary"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 w-fit m-32">
        <img
          src={content[activeTab].img1}
          alt={content[activeTab].title}
          className="w-full h-[550px] object-cover"
        />
        <img
          src={content[activeTab].img2}
          alt={content[activeTab].title}
          className="w-full h-[550px] object-cover"
        />
      </div>

     
      <p className="mt-6 text-lg text-secondary font-bebasNeue -600">{content[activeTab].desc}</p>

    
      <div className="mt-10">
        <button
          onClick={() => navigate("/#contact")}
          className="w-full bg-tertiary text-primary py-3 font-bebasNeue rounded-lg hover:bg-secondary uppercase"
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}
