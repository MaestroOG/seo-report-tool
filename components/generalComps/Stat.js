export default function Stat({ label, value }) {
    return (
        <div className="rounded-lg border p-6 text-center">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
    )
}