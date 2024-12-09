import Counter from "./Counter";

const Impact = () => {
  return (
    <div className="bg-[#ffffff] pb-32">
      <div className="container mx-auto px-[150px]">
        <div className="flex gap-10">
          <div className="w-[535px] h-[600px]">
            <img src="/src/assets/assest/vision-1.jpg" className="w-full h-full" alt="Vision" />
          </div>
          <div>
            <h1 className="text-center mb-[15px] text-5xl font-bold animate-colorChange">OUR IMPACT</h1>
            <h4 className="text-center mb-4 text-[20px] font-medium font-[Tajawal]">
              Upasshok impact in the last financial year | 8 years of enabling self-reliance
            </h4>

            <div className="flex items-center justify-center gap-52">
              <div className="left">
                {[
                  { label: "Education", value: 1000, duration: 5000 },
                  { label: "Vocational Training", value: 3500, duration: 6000 },
                  { label: "Nutrition Provision", value: 460, duration: 4000 },
                  { label: "Differently Abled", value: 900, duration: 4500 },
                ].map((item, index) => (
                  <div className="mb-8 text-center" key={index}>
                    <p className="text-[#B5B5B6] font-serif font-semibold text-[42px] font-[Barlow Condensed]">
                      <Counter end={item.value} duration={item.duration} />+
                    </p>
                    <p className="mt-2 font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="right">
                {[
                  { label: "Women Empowerment", value: 4000, duration: 7000 },
                  { label: "Health Care", value: 680, duration: 4200 },
                  { label: "Institutional Care", value: 967, duration: 4800 },
                  { label: "Digital Learning", value: 390, duration: 3500 },
                ].map((item, index) => (
                  <div className="mb-8 text-center" key={index}>
                    <p className="text-[#B5B5B6] font-serif font-semibold text-[42px] font-[Barlow Condensed]">
                      <Counter end={item.value} duration={item.duration} />+
                    </p>
                    <p className="mt-2 font-semibold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-family: "Rubik", sans-serif;
        }
        @keyframes colorChange {
          0% {
            color: #6a337a;
          }
          50% {
            color: #c12453;
          }
          100% {
            color: #6a337a;
          }
        }
        .animate-colorChange {
          animation: colorChange 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default Impact;
