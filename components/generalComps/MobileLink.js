import Link from "next/link";

export default function MobileLink({
    href,
    children
}) {
    return (
        <Link
            href={href}
            className="rounded-md px-3 py-2 font-medium text-slate-700 hover:bg-slate-100"
        >
            {children}
        </Link>
    )
}