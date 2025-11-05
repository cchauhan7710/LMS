import React from 'react';

const logos = [
  { src: "public/BrandImg/Brand1.png", alt: "HDFC Bank" },
  { src: "public/BrandImg/Brand2.png", alt: "ICICI Bank" },
  { src: "public/BrandImg/Brand3.png", alt: "Axis Bank" },
  { src: "public/BrandImg/Brand4.png", alt: "State Bank of India" },
  { src: "public/BrandImg/Brand5.png", alt: "Kotak Mahindra Bank" },
  { src: "public/BrandImg/Brand6.png", alt: "Punjab National Bank" },
  { src: "public/BrandImg/Brand7.png", alt: "Bank of Baroda" },
  { src: "public/BrandImg/Brand8.png", alt: "Canara Bank" },
  { src: "public/BrandImg/Brand9.png", alt: "Union Bank of India" },
  { src: "public/BrandImg/Brand10.png", alt: "Yes Bank" },
  { src: "public/BrandImg/Brand11.png", alt: "IndusInd Bank" },
  { src: "public/BrandImg/Brand12.png", alt: "IDBI Bank" },
  { src: "public/BrandImg/Brand13.png", alt: "Federal Bank" },
  { src: "public/BrandImg/Brand14.png", alt: "DBS Bank" },
  { src: "public/BrandImg/Brand15.png", alt: "Standard Chartered" },
  { src: "public/BrandImg/Brand16.png", alt: "Citi Bank" },
  { src: "public/BrandImg/Brand17.png", alt: "HSBC" },
  { src: "public/BrandImg/Brand18.png", alt: "JPMorgan Chase" },
  { src: "public/BrandImg/Brand19.png", alt: "Goldman Sachs" },
  { src: "public/BrandImg/Brand20.png", alt: "Morgan Stanley" },
  { src: "public/BrandImg/Brand21.png", alt: "Deutsche Bank" },
  { src: "public/BrandImg/Brand22.png", alt: "Barclays" },
  { src: "public/BrandImg/Brand23.png", alt: "Credit Suisse" },
  { src: "public/BrandImg/Brand24.png", alt: "UBS" },
  { src: "public/BrandImg/Brand25.png", alt: "Bank of America" },
  { src: "public/BrandImg/Brand26.png", alt: "Wells Fargo" },
  { src: "public/BrandImg/Brand27.png", alt: "BNP Paribas" },
  { src: "public/BrandImg/Brand28.png", alt: "Société Générale" },
  { src: "public/BrandImg/Brand29.png", alt: "Mizuho Financial Group" },
  { src: "public/BrandImg/Brand30.png", alt: "Sumitomo Mitsui FG" },
  { src: "public/BrandImg/Brand31.png", alt: "Mitsubishi UFJ FG" },
  { src: "public/BrandImg/Brand32.png", alt: "Commonwealth Bank" },
  { src: "public/BrandImg/Brand33.png", alt: "Westpac" },
  { src: "public/BrandImg/Brand34.png", alt: "ANZ" },
  { src: "public/BrandImg/Brand35.png", alt: "National Australia Bank" },
  { src: "public/BrandImg/Brand36.png", alt: "Royal Bank of Canada" },
  { src: "public/BrandImg/Brand37.png", alt: "TD Bank Group" },
  { src: "public/BrandImg/Brand38.png", alt: "Scotiabank" },
  { src: "public/BrandImg/Brand39.png", alt: "BMO" },
  { src: "public/BrandImg/Brand40.png", alt: "CIBC" },
  { src: "public/BrandImg/Brand41.png", alt: "Santander" },
  { src: "public/BrandImg/Brand42.png", alt: "BBVA" },
  { src: "public/BrandImg/Brand43.png", alt: "Nordea" },
  { src: "public/BrandImg/Brand44.png", alt: "SEB" },
  { src: "public/BrandImg/Brand45.png", alt: "Handelsbanken" },
  { src: "public/BrandImg/Brand46.png", alt: "Danske Bank" },
  { src: "public/BrandImg/Brand47.png", alt: "ING Group" },
  { src: "public/BrandImg/Brand48.png", alt: "Rabobank" },
  { src: "public/BrandImg/Brand49.png", alt: "KBC Group" },
  { src: "public/BrandImg/Brand50.png", alt: "Intesa Sanpaolo" },
  { src: "public/BrandImg/Brand51.png", alt: "UniCredit" },
  { src: "public/BrandImg/Brand52.png", alt: "AIB" },
  { src: "public/BrandImg/Brand53.png", alt: "Permanent TSB" },
];
const logos1 = logos.slice(0, Math.ceil(logos.length / 2));
const logos2 = logos.slice(Math.ceil(logos.length / 2));

// Duplicate for seamless scrolling
const allLogos1 = [...logos1, ...logos1];
const allLogos2 = [...logos2, ...logos2];

const BrandCarousel = () => {
    return (
       <>
      {/* This is the only custom CSS required to power the continuous scrolling.
        All styling and layout are handled by Tailwind utility classes.
      */}
      <style>{`
        /* Keyframes for continuous scroll */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); } 
          100% { transform: translateX(0); } 
        }

        /* Apply the animation and pause on hover */
        .animate-scroll {
          animation: scroll 90s linear infinite;
        }
        
        /* PAUSE ON HOVER ADDED HERE */
        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 90s linear infinite;
        }
        
        /* PAUSE ON HOVER ADDED HERE */
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section id="brands" className="py-24 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-gray-400 mb-12">
            Powering the teams at world-class companies
          </h2>

          <div className="space-y-8">
            {/* Row 1: Scroll Left */}
            <div 
              // Tailwind classes for overflow and masking gradient
              className="relative overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]" 
              aria-hidden="true"
            >
              {/* Tailwind classes flex and w-max applied directly */}
              <div className="flex w-max py-12 animate-scroll">
                {allLogos1.map(({ src, alt }, index) => (
                  <div key={`fwd-${index}`} className="shrink-0 mx-6 flex items-center justify-center" title={alt}>
                    {/* h-20 class ensures the desired size */}
                    <img className="h-20 w-auto object-contain" src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Scroll Right (Reverse) */}
            <div 
              className="relative overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
              aria-hidden="true"
            >
              <div className="flex w-max animate-scroll-reverse">
                {allLogos2.map(({ src, alt }, index) => (
                  <div key={`rev-${index}`} className="shrink-0 mx-6 flex items-center justify-center" title={alt}>
                    <img className="h-20 w-auto object-contain" src={src} alt={alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default BrandCarousel;