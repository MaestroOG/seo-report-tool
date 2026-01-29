import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="border-t bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

                    {/* Left */}
                    <p className="text-sm text-slate-600">
                        © {new Date().getFullYear()} Nova Protocols. All rights reserved.
                    </p>

                    {/* Center */}
                    <p className="text-sm text-slate-700 flex items-center gap-1">
                        Made
                        at
                        <Link href="https://novaprotocols.com" target='_blank'><span className="font-semibold text-slate-900">Nova Protocols</span></Link>
                    </p>

                </div>
            </div>
        </footer>
    )
}
