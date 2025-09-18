import type { CSSProperties } from "react";

export function HelloGradient() {
  return (
    <div
      style={
        {
          "--background": "23 23 23",
          "--highlight": "255 255 255",

          "--bg-color":
            "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
          "--border-color": `linear-gradient(145deg,
            rgb(var(--highlight)) 0%,
            rgb(var(--highlight) / 0.3) 33.33%,
            rgb(var(--highlight) / 0.14) 66.67%,
            rgb(var(--highlight) / 0.1) 100%)
          `,
        } as CSSProperties
      }
      className="flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border-4  border-transparent p-8 mt-10 text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
    >
      <p style={{ fontFamily: "Dynalight, cursive" }} className="text-4xl text-white z-99">
  Manthan Sonawane
</p>
    </div>
  );
}
