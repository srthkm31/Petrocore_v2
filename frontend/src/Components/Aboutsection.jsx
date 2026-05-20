import React from "react";

export default function AboutComponent() {
  return (
    <section className="w-full bg-white text-zinc-950 py-20 md:py-25 px-6 md:px-12 lg:px-16 font-['Satoshi'] selection:bg-zinc-950 selection:text-white">
      <div className="w-full">
        <div className="flex flex-col pb-15">
          <h1 className="text-3xl md:text-5xl font-bold leading-none pb-4">
            Meet Petrocore
          </h1>
          <p className="text-md md:text-xl text-neutral-500">
            A Snapshot of Our Expertise
          </p>
        </div>

        <div className="w-full">
          <p className="text-2xl md:text-2xl text-neutral-700">
            As an emerging force in the oil & gas sector over the last six
            months, we are fully committed to establishing a new benchmark for
            precision engineering, cost-effective solutions, and safety-first
            operations. Our team focuses on execution excellence, bringing
            dedicated focus and rigorous standards to every project phase of
            onshore and offshore operations.
          </p>
        </div>
      </div>
    </section>
  );
}
