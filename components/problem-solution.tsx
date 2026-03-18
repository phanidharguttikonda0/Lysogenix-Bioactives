import Image from 'next/image';

export function ProblemSolution() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
            The Problem vs. The LysoGenix Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Problem */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-slate-100">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The Problem</h3>
              <div className="h-1 w-16 bg-slate-200 rounded"></div>
            </div>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Most suppliers ship <span className="font-semibold">crushed, chemically dyed cocoons</span> meant for crafting, not skincare.
              </p>
              <p className="text-slate-700 leading-relaxed">
                These damage the natural <span className="font-semibold">sericin protein</span>, the key bioactive your customers want.
              </p>
              <p className="text-slate-700 leading-relaxed">
                You end up with inferior exfoliation materials that don't meet premium cosmetic standards.
              </p>
            </div>
            <div className="mt-6 p-4 bg-red-50 border border-red-100 rounded">
              <p className="text-sm text-red-900">Result: Compromised products and disappointed customers.</p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-slate-100 border-l-4 border-l-amber-500">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">The LysoGenix Solution</h3>
              <div className="h-1 w-16 bg-amber-500 rounded"></div>
            </div>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                We <span className="font-semibold">manually cut, empty, and grade every single cocoon</span>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Zero chemical processing. Zero shortcuts. Only <span className="font-semibold">pure sericin protein</span> reaches your lab.
              </p>
              <p className="text-slate-700 leading-relaxed">
                You receive ready-to-label, <span className="font-semibold">100% pure exfoliation bioactives</span>.
              </p>
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded">
              <p className="text-sm text-amber-900 font-semibold">Result: Premium ingredients, premium products.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
