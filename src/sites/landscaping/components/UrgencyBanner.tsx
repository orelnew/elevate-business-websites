import { Timer, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set deadline to end of current month
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
      
      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-3 md:py-3 md:px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <span className="font-bold sm:hidden">Ends soon</span>
            <span className="hidden sm:inline font-bold">Summer Special Ends Soon:</span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-1 sm:gap-2">
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-xs sm:px-2 sm:py-1 sm:text-sm font-bold">
                {timeLeft.days}d
              </div>
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-xs sm:px-2 sm:py-1 sm:text-sm font-bold">
                {timeLeft.hours}h
              </div>
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-xs sm:px-2 sm:py-1 sm:text-sm font-bold">
                {timeLeft.minutes}m
              </div>
              <div className="bg-white/20 px-1.5 py-0.5 rounded text-xs sm:px-2 sm:py-1 sm:text-sm font-bold">
                {timeLeft.seconds}s
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="hidden sm:flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>37 landscapers joined this month</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span className="sm:hidden">100% off setup</span>
                <span className="hidden sm:inline">Setup fees 100% off!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;