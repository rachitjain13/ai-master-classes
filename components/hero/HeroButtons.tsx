export default function HeroButtons() {
  return (
   <div className="mt-10 flex flex-wrap gap-4">
  <button className="rounded-full bg-black px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
    Buy Now • ₹149
  </button>

  <button className="rounded-full border border-neutral-300 bg-white px-8 py-4 font-semibold transition hover:bg-neutral-100">
    Preview Free
  </button>
</div>
  );
}