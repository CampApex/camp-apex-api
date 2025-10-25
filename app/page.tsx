export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] flex items-center justify-center p-6">
      <main className="max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-br from-[#ff6b35] via-[#f7931e] to-[#fdc830] bg-clip-text text-transparent">
              Camp Apex APIs
            </h1>
            <p className="text-xl text-[#a0a0a0]">
              A collection of Halloween-themed API challenges and integrations.
            </p>
          </div>

          <div className="border-l-2 border-[#ff6b35] pl-6 space-y-3">
            <h2 className="text-2xl font-semibold text-[#fdc830]">
              Current Module: Ghostbusters Equipment Checker
            </h2>
            <p className="text-[#b8b8b8] leading-relaxed">
              Check if you have the right equipment to capture ghosts. Compare your inventory
              against paranormal entity requirements and calculate your potential bounty earnings.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#d0d0d0]">API Endpoints</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-colors">
                <div className="text-[#4ade80]">GET</div>
                <div className="text-[#fdc830] mt-1">/api/ghostbusters/entities</div>
                <div className="text-[#888] text-xs mt-2">Returns all ghost entities with equipment requirements</div>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-4 hover:border-[#ff6b35] transition-colors">
                <div className="text-[#fbbf24]">POST</div>
                <div className="text-[#fdc830] mt-1">/api/ghostbusters/check-equipment</div>
                <div className="text-[#888] text-xs mt-2">Check your inventory against ghost requirements</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="https://github.com/CampApex/camp-apex-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff6b35] hover:bg-[#ff8555] text-white font-medium rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View Repository
            </a>
            <a
              href="/api/ghostbusters/entities"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-[#e8e8e8] font-medium rounded-lg transition-colors"
            >
              Try API
            </a>
            <a
              href="https://campapex.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] border border-[#3a3a3a] text-[#e8e8e8] font-medium rounded-lg transition-colors"
            >
              Camp Apex
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
