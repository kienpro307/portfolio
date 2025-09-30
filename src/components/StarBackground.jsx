import { useEffect, useState } from "react";

// id, size, x, y, opacity
export const StarBackground = () => {
  // 5 shape với vị trí và kích thước cố định
  const shapes = [
    { id: 1, size: 13, x: 10, y: 18, opacity: 0.45 },
    { id: 2, size: 10, x: 80, y: 12, opacity: 0.35 },
    { id: 3, size: 9, x: 50, y: 40, opacity: 0.32 },
    { id: 4, size: 12, x: 90, y: 75, opacity: 0.38 },
    { id: 5, size: 8, x: 25, y: 80, opacity: 0.28 },
    { id: 6, size: 11, x: 60, y: 65, opacity: 0.3 },
    { id: 7, size: 7, x: 35, y: 10, opacity: 0.26 },
    { id: 8, size: 10, x: 5, y: 70, opacity: 0.29 },
    { id: 9, size: 8, x: 15, y: 55, opacity: 0.22 },
    { id: 10, size: 7, x: 75, y: 55, opacity: 0.21 },
    { id: 11, size: 6, x: 60, y: 25, opacity: 0.18 },
    { id: 12, size: 9, x: 40, y: 75, opacity: 0.23 },
    { id: 13, size: 8, x: 85, y: 35, opacity: 0.19 },
    { id: 14, size: 7, x: 30, y: 60, opacity: 0.17 },
    { id: 15, size: 6, x: 55, y: 85, opacity: 0.15 },
    { id: 16, size: 8, x: 70, y: 85, opacity: 0.16 },
    { id: 17, size: 7, x: 20, y: 30, opacity: 0.18 },
    { id: 18, size: 6, x: 45, y: 15, opacity: 0.14 },
  ];
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    let observer;
    if (typeof window !== "undefined") {
      observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  // Màu sắc phù hợp Classic Blue, nam tính, hiện đại
  const mainColor = isDark ? "#23395d" : "#34568B";
  const accentColor = isDark ? "#2d4263" : "#5d8fd3";
  const shadowColor = isDark ? "#23395d55" : "#34568B33";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape) => (
        <svg
          key={shape.id}
          className="absolute animate-bubble"
          style={{
            width: shape.size * 32 + "px",
            height: shape.size * 32 + "px",
            left: shape.x + "%",
            top: shape.y + "%",
            opacity: shape.opacity,
            filter: "blur(0.5px)",
            mixBlendMode: "lighten",
            animationDuration: "12s",
          }}
        >
          {/* Hình lục giác hiện đại, nam tính */}
          <polygon
            points="50,10 90,32 90,78 50,100 10,78 10,32"
            fill={`url(#grad${shape.id})`}
            stroke={accentColor}
            strokeWidth="4"
            style={{
              filter: `drop-shadow(0 0 40px ${shadowColor})`,
            }}
          />
          <defs>
            <linearGradient
              id={`grad${shape.id}`}
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={mainColor} stopOpacity="0.9" />
              <stop offset="100%" stopColor={accentColor} stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  );
};
