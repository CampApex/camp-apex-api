export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] text-[#4a4543] flex items-center justify-center p-6">
      <main className="max-w-4xl w-full">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-[#6b5d54]">
              Camp Apex APIs
            </h1>
            <p className="text-xl text-[#8a7f78]">
              A collection of API challenges and integrations for Salesforce developers.
            </p>
          </div>

          {/* Halloween Module */}
          <div className="bg-[#1a1a1a] text-[#e8e8e8] rounded-2xl p-8 shadow-lg border-3 border-[#ff6b35]">
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#fdc830] bg-clip-text text-transparent">
                  Halloween: Ghostbusters Equipment Checker
                </h2>
                <p className="text-[#b8b8b8] leading-relaxed">
                  Check if you have the right equipment to capture ghosts. Compare your inventory
                  against paranormal entity requirements and calculate your potential bounty earnings.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-[#d0d0d0]">API Endpoints</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-colors">
                    <div className="text-[#4ade80]">GET</div>
                    <div className="text-[#fdc830] mt-1">/api/ghostbusters/entities</div>
                    <div className="text-[#888] text-xs mt-2">Returns all ghost entities with equipment requirements</div>
                  </div>
                  <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-colors">
                    <div className="text-[#fbbf24]">POST</div>
                    <div className="text-[#fdc830] mt-1">/api/ghostbusters/check-equipment</div>
                    <div className="text-[#888] text-xs mt-2">Check your inventory against ghost requirements</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advent of Salesforce 2025 Module */}
          <div className="bg-gradient-to-br from-[#fff9e6] to-[#fff9c4] rounded-2xl p-8 shadow-lg border-5 border-[#d32f2f]">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">🎄</span>
                  <h2 className="text-4xl font-sketch text-[#1b5e20]">
                    Advent of Salesforce 2025
                  </h2>
                  <span className="text-4xl">🍼</span>
                </div>
                <p className="text-lg font-body text-[#3e2723] leading-relaxed">
                  This API provides endpoints for managing baby care outings and diaper bag preparation (Exciting I know - imagine how I feel doing this IRL). Perfect for learning API integration with real-world parenting scenarios.
                </p>
              </div>

              <div className="bg-[#fffef7] rounded-xl p-6 border-3 border-[#2e7d32] shadow-md">
                <h3 className="text-2xl font-sketch text-[#d32f2f] mb-4">Featured Outing Types</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏃</span>
                    <div>
                      <h4 className="font-bold text-[#1b5e20] font-body">Quick Errand</h4>
                      <p className="text-sm text-[#3e2723]">30 minutes | 4 items needed | Difficulty: 2/10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👨‍⚕️</span>
                    <div>
                      <h4 className="font-bold text-[#1b5e20] font-body">Doctor Visit</h4>
                      <p className="text-sm text-[#3e2723]">2 hours | 9 items needed | Difficulty: 5/10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌳</span>
                    <div>
                      <h4 className="font-bold text-[#1b5e20] font-body">Day Trip</h4>
                      <p className="text-sm text-[#3e2723]">6-8 hours | 14 items needed | Difficulty: 8/10</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-[#3e2723] font-body">API Endpoints</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-[#fffef7] border-3 border-[#2e7d32] rounded-lg p-4 hover:border-[#d32f2f] transition-colors shadow-sm">
                    <div className="text-[#2e7d32] font-bold">GET</div>
                    <div className="text-[#d32f2f] mt-1 font-bold">/api/advent/outings</div>
                    <div className="text-[#3e2723] text-xs mt-2">Get all outing types with required items</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="https://github.com/CampApex/camp-apex-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6b5d54] hover:bg-[#5a4d45] text-white font-medium rounded-lg transition-colors shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Repository
            </a>
            <a
              href="/api/ghostbusters/entities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] hover:bg-[#faf9f7] border-2 border-[#d4c4b0] text-[#6b5d54] font-medium rounded-lg transition-colors"
            >
              Try Halloween API
            </a>
            <a
              href="/api/advent/outings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] hover:bg-[#faf9f7] border-2 border-[#d4c4b0] text-[#6b5d54] font-medium rounded-lg transition-colors"
            >
              Try Advent API
            </a>
            <a
              href="https://campapex.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffffff] hover:bg-[#faf9f7] border-2 border-[#d4c4b0] text-[#6b5d54] font-medium rounded-lg transition-colors"
            >
              Camp Apex
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
