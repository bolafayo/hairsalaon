import Backarrow from "./backarrow";
export default function About() {
    return (
    
      <section className="bg-primary min-h-screen flex flex-col items-center justify-center px-6 py-16">
         <Backarrow />
       
        <div className="max-w-6xl w-full text-center mb-12">
          <h1 className="text-[6rem] font-bebasNeue font-bold text-tertiaryleading-none relative">
          
            <span className="text-tertiary">ABO</span>
        <span className="text-secondary -500">UT</span>
          </h1>
        </div>
  
      
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
         
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/b5/d9/0a/b5d90aeee4ee1de954d412a5a15e2b11.jpg"
              alt="Salon Interior"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
  
        
          <div>
            <h2 className="text-3xl font-bold font-bebasNeue text-tertiary mb-4">Our Philosophy</h2>
            <p className="text-lg text-tertiary font-bebasNeue -200 leading-relaxed">
              Our philosophy revolves around celebrating your natural beauty and
              enhancing it through the latest trends and techniques. We pride
              ourselves on creating a relaxing environment where every client feels
              valued and transformed.
            </p>
          </div>
        </div>
  
       
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center mt-16">
        
          <div>
            <h2 className="text-3xl font-bold text-tertiary font-bebasNeue mb-4">Our Story</h2>
            <p className="text-lg text-tertiary font-bebasNeue -200 leading-relaxed">
              Established with passion and dedication, our salon has become a hub
              for creativity, style, and innovation. From modern cuts to classic
              treatments, we bring years of experience together with a love for
              hair artistry.
            </p>
          </div>
  
         
          <div className="relative">
            <img
              src="https://i.pinimg.com/1200x/13/fd/f4/13fdf42477ef8fa0a6e74baddd5ca900.jpg"
              alt="Team Working"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
  
      
        <div className="max-w-6xl w-full mt-16 text-center">
          <h2 className="text-3xl font-bold text-tertiary font-bebasNeue mb-6">Our Space</h2>
          <p className="text-lg text-tertiary font-bebasNeue -200 mb-8">
            Step into a modern, welcoming salon designed to provide both comfort
            and inspiration. Every corner reflects our commitment to style and
            detail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://i.pinimg.com/1200x/30/d6/ff/30d6ffc36971bfd8990754155b73ab4e.jpg"
              alt="Salon view"
              className="rounded-2xl shadow-lg w-full h-[250px] object-cover"
            />
            <img
              src="https://i.pinimg.com/1200x/b3/ad/4b/b3ad4bcee3024d0b6d3f186089e5f430.jpg"
              alt="Hair stylist at work"
              className="rounded-2xl shadow-lg w-full h-[250px] object-cover"
            />
            <img
              src="https://i.pinimg.com/1200x/45/6b/de/456bde87315ef09b16eb9436d9009cce.jpg"
              alt="Products"
              className="rounded-2xl shadow-lg w-full h-[250px] object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  