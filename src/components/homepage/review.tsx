import React, { useState } from "react";

type Review = {
  date: string;
  name: string;
  text: string;
  image: string;
};

const reviews: Review[] = [
  {
    date: "24 MAY 2025",
    name: "Sasha Turner",
    text: "I would like to express my gratitude to hairdresser Nellie Russell! She is a real master of her craft...",
    image: "https://i.pinimg.com/1200x/82/af/05/82af05ab699fb56fbb3dd3ddadaff545.jpg",
  },
  {
    date: "4 JUNE 2025",
    name: "Alia Bonner",
    text: "The result exceeded my expectations – the new haircut looks natural and stylish.",
    image: "https://i.pinimg.com/1200x/68/34/13/6834134437084405768b02bf665a00f8.jpg",
  },
  {
    date: "15 JUNE 2025",
    name: "Flynn Monroe",
    text: "Kate took into account all my wishes and created the perfect haircut that suits my face type perfectly.",
    image: "https://i.pinimg.com/1200x/32/00/4c/32004c278adeb39a551ada3115ebdadc.jpg",
  },
  {
    date: "20 JUNE 2025",
    name: "Michael Reed",
    text: "Very friendly staff and professional service. I will definitely come back again!",
    image: "https://i.pinimg.com/736x/fd/9a/34/fd9a34708ac302bb4e30ae1654d49780.jpg",
  },
  {
    date: "10 JULY 2025",
    name: "Chloe Daniels",
    text: "I booked an appointment online and everything went smoothly. My stylist was punctual and professional.",
    image: "https://i.pinimg.com/736x/fc/3c/e6/fc3ce65baa79adda701f3beb63b7c96f.jpg",
  },
  {
    date: "14 JULY 2025",
    name: "Aaron Patel",
    text: "The breads was done beautifully, and the stylist gave me tips on how to maintain my hair at home.",
    image: "https://i.pinimg.com/736x/85/e1/97/85e1974f4930ba42ef3b9617e6639df1.jpg",
  },
];

const ReviewSection: React.FC = () => {
  const initialCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleToggle = () => {
    if (visibleCount >= reviews.length) {
      setVisibleCount(initialCount); 
    } else {
      setVisibleCount(reviews.length); 
    }
  };

  return (
    <section className="py-12 bg-primary m-2 font-bebasNeue ">
      <div className="container mx-auto px-6">
      <div className="flex -center justify-end mt-8">
          <button
            onClick={handleToggle}
            className=" cursor-pointer px-6 py-2 border border-tertiary text-tertiary hover:bg-white hover:text-tertiary transition"
          >
            {visibleCount >= reviews.length ? "Show Less" : "Show More"}
          </button>
        </div>
        <h2 className="text-4xl font-bold mb-8">REVIEWS</h2>
        

     
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.slice(0, visibleCount).map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={review.image}
                alt={review.name}
                className="h-96 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-secondary">{review.date}</p>
                <h3 className="font-semibold text-lg text-tertiary">{review.name}</h3>
                <p className="mt-2 text-secondary">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

     
     
      </div>
    </section>
  );
};

export default ReviewSection;
