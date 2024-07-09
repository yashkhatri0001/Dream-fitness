import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "This fat loss program exceeded my expectations! With its structured workouts, personalized meal plans, and supportive community, I've  remarkable results.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Prabhakar",
    text: "The bulk program transformed my physique! With its strategic workouts and nutrition guidance, I gained impressive muscle mass and strength gains.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sabir",
    text: "The Zumba dance program is incredible! It's fun, energetic, and effective. I feel happier, healthier, and more toned after every session!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin",
    text: "The wrestling training program is top-notch! Expert coaches, intense workouts, and supportive teammates. It's improved my skills and confidence tremendously.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-0 my-0 bg-black">
  <div className="container">
    {/* header section */}
    <div className="text-center mb-10 max-w-[600px] mx-auto">
      <h1
        data-aos="fade-up"
        className="text-3xl font-bold text-yellow-500"
      >
        Testimonials
      </h1>
    </div>

    {/* Testimonial cards */}
    <div data-aos="zoom-in">
      <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div className="my-6">
            <div
              key={data.id}
              className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-800 bg-primary/10 relative"
            >
              <div className="mb-4">
                <img
                  src={data.img}
                  alt=""
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 text-white">
                    {data.text}
                  </p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-primary text-white">
                    {data.name}
                  </h1>
                </div>
              </div>
              <p className="text-primary/20 text-9xl font-serif absolute top-0 right-0">
                ,,
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</div>
  );
};

export default Testimonials;