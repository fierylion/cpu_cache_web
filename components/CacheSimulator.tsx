import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Terminal, Cpu } from "lucide-react"

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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              CPU Cache Simulator
            </h1>
            <p className="text-gray-700">Explore and understand cache behavior through interactive simulation</p>
          </div>

          {/* Instructions Card */}
          <Card className="bg-white/50 backdrop-blur-sm border border-white/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-700">Getting Started</CardTitle>
              <CardDescription>Follow these steps to use the simulator</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Step 1: Launch the Simulator</h3>
                <div className="bg-slate-800 text-white p-4 rounded-lg font-mono">
                  <code>python simulator.py 10 7 3 2 LRU WT</code>
                </div>
                <p className="mt-2 text-gray-700">
                  This command initializes a simulator with:
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                  <li>Memory size: 2^10 bytes (1024 bytes)</li>
                  <li>Cache size: 2^7 bytes (128 bytes)</li>
                  <li>Block size: 2^3 bytes (8 bytes)</li>
                  <li>4-way associative mapping (2^2)</li>
                  <li>LRU replacement policy</li>
                  <li>Write-through policy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Step 2: Available Commands</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">Basic Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">read &lt;address&gt;</code>
                        <span className="text-gray-600">Read from memory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">write &lt;address&gt; &lt;byte&gt;</code>
                        <span className="text-gray-600">Write to memory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">stats</code>
                        <span className="text-gray-600">Show hit/miss statistics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-4 rounded-lg">
                    <h4 className="font-medium text-indigo-600 mb-2">Advanced Operations</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">randread &lt;amount&gt;</code>
                        <span className="text-gray-600">Random reads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">printcache &lt;start&gt; &lt;amount&gt;</code>
                        <span className="text-gray-600">View cache</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <code className="bg-slate-800 text-white px-2 py-1 rounded">printmem &lt;start&gt; &lt;amount&gt;</code>
                        <span className="text-gray-600">View memory</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-700 mb-2">Example Usage</h3>
                <div className="bg-slate-800 text-white p-4 rounded-lg space-y-2 font-mono">
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <code>read 0</code>
                    <span className="text-gray-400"># Read byte at address 0</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <code>write 4 255</code>
                    <span className="text-gray-400"># Write value 255 to address 4</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">$</span>
                    <code>printcache 0 4</code>
                    <span className="text-gray-400"># Show first 4 cache lines</span>
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
                    border: '1px solid #1e293b',
                    borderRadius: '0.5rem'
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