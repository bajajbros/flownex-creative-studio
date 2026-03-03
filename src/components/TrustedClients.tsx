const clients = [
  { name: "Mansi Chopra", handle: "@themansichopra" },
  { name: "Akhil Kapoor", handle: "@akhil_kapoorrr" },
  { name: "Gaurav Ghai", handle: "@thegauravghai" },
  { name: "Bhanu Pathak", handle: "@bhanu_pathak" },
  { name: "Payal & Gaurav", handle: "@payalineurope" },
  { name: "Madhav Jha", handle: "@techbites.co" },
  { name: "Aman Kumar", handle: "@explorewithaman" },
  { name: "Ruchi Sharma", handle: "@eatfitrepeat" },
  { name: "Shruti Jain", handle: "@shrutiispeaks" },
  { name: "Naiya Sehgal", handle: "@naiya_sehgal" },
];

const colors = [
  "hsl(270 60% 40%)", "hsl(200 60% 40%)", "hsl(150 60% 40%)",
  "hsl(30 60% 40%)", "hsl(340 60% 40%)", "hsl(180 60% 40%)",
  "hsl(60 60% 40%)", "hsl(220 60% 40%)", "hsl(100 60% 40%)",
  "hsl(310 60% 40%)",
];

const TrustedClients = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Trusted Clients</h2>
      </div>

      {/* Row 1 */}
      <div className="w-full overflow-hidden mb-4">
        <div className="flex animate-marquee-slow" style={{ width: "200%" }}>
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex-shrink-0 mx-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[240px]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: colors[i % colors.length], color: "white" }}
              >
                {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee-reverse" style={{ width: "200%" }}>
          {[...clients.slice(5), ...clients.slice(0, 5), ...clients.slice(5), ...clients.slice(0, 5)].map((c, i) => (
            <div key={i} className="flex-shrink-0 mx-2 glass-card rounded-2xl px-5 py-4 flex items-center gap-4 min-w-[240px]">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: colors[(i + 3) % colors.length], color: "white" }}
              >
                {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
