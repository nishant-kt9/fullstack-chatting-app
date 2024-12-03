const AuthImagePattern = ({ title, subtitle }) => {
  const colors = [
    "bg-gray-200",       // Light Gray
    "bg-gray-300",       // Medium Gray
    "bg-gray-400",       // Dark Gray
    "bg-blue-100",       // Soft Blue
    "bg-blue-200",       // Light Blue
    "bg-blue-300",       // Muted Blue
    "bg-teal-100",       // Soft Teal
    "bg-teal-200",       // Light Teal
    "bg-teal-300"        // Muted Teal
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl ${
                colors[i % colors.length]
              } ${i % 2 === 0 ? "animate-pulse" : ""}`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

