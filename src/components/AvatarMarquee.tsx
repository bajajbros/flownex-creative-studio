const avatars = Array.from({ length: 12 }, (_, i) => i);

const AvatarMarquee = () => {
  const colors = [
    "hsl(270 60% 50%)", "hsl(200 60% 50%)", "hsl(150 60% 50%)",
    "hsl(30 60% 50%)", "hsl(340 60% 50%)", "hsl(180 60% 50%)",
    "hsl(60 60% 50%)", "hsl(220 60% 50%)", "hsl(100 60% 50%)",
    "hsl(310 60% 50%)", "hsl(10 60% 50%)", "hsl(250 60% 50%)",
  ];

  const initials = ["AK", "MC", "GG", "PG", "BH", "RJ", "SJ", "NS", "MJ", "AM", "RS", "SK"];

  return (
    <div className="w-full overflow-hidden py-12 bg-background">
      <div className="flex animate-marquee" style={{ width: "200%" }}>
        {[...avatars, ...avatars].map((idx, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-3 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-sm font-bold border-2 border-border"
            style={{ backgroundColor: colors[idx % colors.length], color: "white" }}
          >
            {initials[idx % initials.length]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarMarquee;
