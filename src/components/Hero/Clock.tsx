import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-300 rounded-lg w-60 h-12 p-2">
      <div className="text-lg font-bold text-card-foreground">@Obaid {time.toLocaleTimeString().toUpperCase()}</div>
    </div>
  );
}
