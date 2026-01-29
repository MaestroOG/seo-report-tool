export default function Step({
    number,
    title,
    children
}) {
    return (
        <div>
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
                {number}
            </div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{children}</p>
        </div>
    )
}