import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      "My favorite solution in the market. We work 5x faster with COMPANY.",
    date: "January 01, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=1",
  },
  {
    tempId: 1,
    testimonial:
      "I'm confident my data is safe with COMPANY. I can't say that about other providers.",
    date: "January 03, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=2",
  },
  {
    tempId: 2,
    testimonial:
      "I know it's cliche, but we were lost before we found COMPANY. Can't thank you guys enough!",
    date: "January 06, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=3",
  },
  {
    tempId: 3,
    testimonial:
      "COMPANY's products make planning for the future seamless. Can't recommend them enough!",
    date: "January 09, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=4",
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12.",
    date: "January 12, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=5",
  },
  {
    tempId: 5,
    testimonial:
      "SO SO SO HAPPY WE FOUND YOU GUYS!!!! I'd bet you've saved me 100 hours so far.",
    date: "January 15, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=6",
  },
  {
    tempId: 6,
    testimonial:
      "Took some convincing, but now that we're on COMPANY, we're never going back.",
    date: "January 18, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=7",
  },
  {
    tempId: 7,
    testimonial:
      "I would be lost without COMPANY's in-depth analytics. The ROI is EASILY 100X for us.",
    date: "January 21, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=8",
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    date: "January 24, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=9",
  },
  {
    tempId: 9,
    testimonial: "I switched 5 years ago and never looked back.",
    date: "January 27, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=10",
  },
  {
    tempId: 10,
    testimonial:
      "I've been searching for a solution like COMPANY for YEARS. So glad I finally found one!",
    date: "January 30, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=11",
  },
  {
    tempId: 11,
    testimonial:
      "It's so simple and intuitive, we got the team up to speed in 10 minutes.",
    date: "February 02, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=12",
  },
  {
    tempId: 12,
    testimonial:
      "COMPANY's customer support is unparalleled. They're always there when we need them.",
    date: "February 05, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=13",
  },
  {
    tempId: 13,
    testimonial:
      "The efficiency gains we've seen since implementing COMPANY are off the charts!",
    date: "February 08, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=14",
  },
  {
    tempId: 14,
    testimonial:
      "COMPANY has revolutionized how we handle our workflow. It's a game-changer!",
    date: "February 11, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=15",
  },
  {
    tempId: 15,
    testimonial:
      "The scalability of COMPANY's solution is impressive. It grows with our business seamlessly.",
    date: "February 14, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=16",
  },
  {
    tempId: 16,
    testimonial:
      "I appreciate how COMPANY continually innovates. They're always one step ahead.",
    date: "February 17, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=17",
  },
  {
    tempId: 17,
    testimonial:
      "The ROI we've seen with COMPANY is incredible. It's paid for itself many times over.",
    date: "February 20, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=18",
  },
  {
    tempId: 18,
    testimonial:
      "COMPANY's platform is so robust, yet easy to use. It's the perfect balance.",
    date: "February 23, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=19",
  },
  {
    tempId: 19,
    testimonial:
      "We've tried many solutions, but COMPANY stands out in terms of reliability and performance.",
    date: "February 26, 2024",
    imgSrc: "https://i.pravatar.cc/150?img=20",
  },
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[#0F3652] text-white border-[#0F3652]"
          : "z-0 bg-white text-[#0F3652] border-gray-200 hover:border-[#F3831C]/50",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 8px 0px 4px rgba(15, 54, 82, 0.2)"
          : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#F3831C]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`#`}
        className="mb-4 h-48 w-full bg-gray-200 object-cover object-top"
        loading="lazy"
        style={{
          boxShadow: "3px 3px 0px rgba(15, 54, 82, 0.1)",
        }}
      />
      <h3
        className={cn(
          "text-base  font-medium",
          isCenter ? "text-white" : "text-[#0F3652]",
        )}
      >
        "{testimonial.testimonial}"
      </h3>

      <div className="flex flex-row items-center justify-between">
        <p
          className={cn(
            " text-sm italic",
            isCenter ? "text-white/80" : "text-[#0F3652]/80",
          )}
        >
          - {testimonial.date}
        </p>

        <button
          className={cn(
            "  font-semibold py-1 px-2 rounded-md inline-flex items-center gap-2 transition-colors",
            isCenter
              ? "text-white bg-orange-500/90"
              : "text-white bg-[#0F3652]",
          )}
        >
          <span>Learn More</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const AboutCarousel = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gray-50"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#0F3652] text-[#0F3652] hover:bg-[#0F3652] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3831C] focus-visible:ring-offset-2",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[#0F3652] text-[#0F3652] hover:bg-[#0F3652] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3831C] focus-visible:ring-offset-2",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
