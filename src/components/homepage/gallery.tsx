import { useState } from "react";


type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  title: string;
};

export default function Gallery() {
  const allData: GalleryItem[] = [
    { id: 1, src: "https://i.pinimg.com/1200x/ff/da/a2/ffdaa23342d8816c973e56b2dc84320a.jpg", alt: "Annette", title: "AFRO" },
    { id: 2, src: "https://i.pinimg.com/1200x/9a/01/3f/9a013fab68e84278c7c8e87425920942.jpg", alt: "Wolf Cut", title: "WOLF CUT" },
    { id: 3, src: "https://i.pinimg.com/736x/98/54/6e/98546e4e972f3c98b8ef7020c01e1ebc.jpg", alt: "Cascade", title: "AFROCENTIC" },
    { id: 4, src: "https://i.pinimg.com/736x/d0/b1/9a/d0b19acd2b48e6597c081c24e76954cb.jpg", alt: "Classic", title: "BIG BRAIDS" },
    { id: 5, src: "https://i.pinimg.com/736x/08/f1/92/08f19276e6ae2982bfad14d8de8450af.jpg", alt: "Stik", title: "STIK" },
    { id: 6, src: "https://i.pinimg.com/1200x/16/d7/6c/16d76c09e2c43780e914ec0eed477122.jpg", alt: "Fade", title: "AFROCENTIC" },
    { id: 7, src: "https://i.pinimg.com/1200x/2a/c7/2f/2ac72f30b339701045ccf7bd18c36dea.jpg", alt: "Smart Cut", title: "BALDIE" },
    { id: 8, src: "https://i.pinimg.com/736x/ac/fe/63/acfe6345d7f2aa2cd440e18295392e7d.jpg", alt: "Mullet Washion", title: "MULLET WASHION" },
    { id: 9, src: "https://i.pinimg.com/1200x/e8/da/4b/e8da4baa4177ebd292dd74a269740fa3.jpg", alt: "Pixie", title: "PIXIE" },
    { id: 10, src: "https://i.pinimg.com/736x/47/bb/4c/47bb4c7ef82d24cf35092c4a3ae3c417.jpg", alt: "Bob Cut", title: "BRAIDS" },
    { id: 11, src: "https://i.pinimg.com/736x/1c/e8/c4/1ce8c4ccfdb068831d1d337c8a0401f6.jpg", alt: "Bob Cut", title: "CORNROWS" },
    { id: 12, src: "https://i.pinimg.com/736x/9e/d4/3e/9ed43e50ef4412291ed06328e707713d.jpg", alt: "Bob Cut", title: "BOB CUT" },
  
  ];
  const initialCount = 8;
  const [visibleCount, setVisibleCount] = useState<number>(initialCount);
  
  const handleToggle = (): void => {
    if (visibleCount >= allData.length) {
      setVisibleCount(initialCount); 
    } else {
      setVisibleCount(allData.length);
    }
  };
  
  return (
    <div className="relative bg-tertiary text-primary min-h-screen px-6 py-12">
  
    <div className="flex justify-between items-center mb-12 relative z-50">
      <div></div>
      <button
        onClick={handleToggle}
        className="text-sm md:text-base uppercase tracking-wide text-primary -300 hover:text-purple-400 transition"
      >
        {visibleCount >= allData.length ? "View Less ↑" : "View More ↓"}
      </button>
    </div>
  
     
      <h1 className="font-bebasNeue absolute top-10 left-6 text-[8rem] md:text-[12rem] font-extrabold uppercase tracking-tight mix-blend-difference pointer-events-none z-50 leading-none">
        <span className="text-primary">GALL</span>
        <span className="text-purple-500">ERY</span>
      </h1>
  
    
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 relative z-20">
        {allData.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="break-inside-avoid relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm uppercase tracking-wide text-primary -200">
              {item.title}
            </p>
          </div>
        ))}
      </div>
  
     
      <p className="mt-12 font-bebasNeue text-primary -400 max-w-2xl relative  line-height-1 z-20">
        In the gallery you will find bright and stylish images created by our
        specialists, as well as the results of various procedures and cosmetic
        imaginations. We are proud of our achievements and are happy to share
        them with you.
      </p>
    </div>
  );
}

