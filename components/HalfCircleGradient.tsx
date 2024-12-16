import { cn } from "@/lib/utils";

export default function HalfCircleGradient() {
  return (
    <div
      className={cn(
        "absolute left-1/2 transform -translate-x-1/2 w-[10%] sm:w-[100%]  blur-[70px] bg-no-repeat -z-10 bg-gradient-to-b from-yellow-400 via-yellow-400 to-yellow-800 rounded-b-full h-[140px] opacity-70"
      )}
    ></div>
  );
}
