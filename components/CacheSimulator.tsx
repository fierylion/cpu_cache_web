import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Cpu, BookOpen, Code, BarChart } from "lucide-react"

export default function SimulatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />

      <div className="relative min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header with Glass Effect */}
          <div className="text-center mb-8 p-6 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/50 shadow-xl">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Terminal className="w-12 h-12 text-indigo-600" />
              <Cpu className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              CS454 CPU Cache Simulator
            </h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              This project was developed by Anen Isaac, Daniel Mawalla, Caroline Joune, and Karim Nyumba in Dr. Hellen
              Maziku's CS454 class to help future students better understand cache behaviour through interactive
              simulation.
            </p>
          </div>

          {/* Quick Start Guide */}
          <Card className="bg-white/50 backdrop-blur-sm border border-white/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                Quick Start Guide
              </CardTitle>
              <CardDescription>Essential instructions to get you started with the CPU Cache Simulator</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">How to Run the Simulator</h3>
                <div className="bg-slate-800 text-white p-4 rounded-lg font-mono space-y-2">
                  <p>
                    <code>cd cpu-cache-simulator/</code>
                  </p>
                  <p>
                    <code>python simulator.py MEMORY CACHE BLOCK MAPPING REPLACE WRITE</code>
                  </p>
                </div>
                <p className="mt-2 text-gray-700">Example:</p>
                <div className="bg-slate-800 text-white p-4 rounded-lg font-mono mt-2 space-y-2">
                  <p>
                    <code>cd cpu-cache-simulator/</code>
                  </p>
                  <p>
                    <code>python simulator.py 10 7 3 2 LRU WT</code>
                  </p>
                </div>
                <p className="mt-2 text-gray-700">This creates a simulation with:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                  <li>2^10 bytes of memory</li>
                  <li>2^7 bytes of cache</li>
                  <li>2^3 bytes per block</li>
                  <li>2^2-way associative mapping</li>
                  <li>LRU replacement policy</li>
                  <li>Write-Through (WT) write policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Basic Commands
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">Memory Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">read ADDRESS</code>
                        <span className="text-gray-600">Read from memory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">write ADDRESS BYTE</code>
                        <span className="text-gray-600">Write to memory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">randread AMOUNT</code>
                        <span className="text-gray-600">Perform random reads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">randwrite AMOUNT</code>
                        <span className="text-gray-600">Perform random writes</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">Viewing & Statistics</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">printcache START LENGTH</code>
                        <span className="text-gray-600">Print cache contents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">printmem START LENGTH</code>
                        <span className="text-gray-600">Print memory contents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">stats</code>
                        <span className="text-gray-600">View cache statistics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">quit</code>
                        <span className="text-gray-600">Exit the simulator</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2 flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Example Session
                </h3>
                <div className="bg-slate-800 text-white p-4 rounded-lg space-y-2 font-mono">
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <code>python simulator.py 10 7 3 2 LRU WT</code>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <code>read 5</code>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <code>write 5 255</code>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <code>randread 10</code>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <code>stats</code>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">&gt;</span>
                    <code>quit</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Simulator Terminal */}
          <Card className="bg-white/50 backdrop-blur-sm border border-white/50 shadow-lg overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">Interactive Terminal</CardTitle>
              <CardDescription>Access the simulator below</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 rounded-lg p-1 shadow-inner">
                <iframe
                  src="https://cs454.zawadii.app"
                  className="w-full h-[600px] rounded-lg"
                  style={{
                    border: "1px solid #1e293b",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center text-sm text-gray-600 py-8 bg-white/30 backdrop-blur-sm rounded-lg">
            <p>CPU Cache Simulator - Educational tool for understanding cache behavior and performance</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

