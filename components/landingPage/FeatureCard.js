import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function FeatureCard({
    icon,
    title,
    desc
}) {
    return (
        <Card className="border-slate-200 shadow-sm hover:shadow-md transition">
            <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-primary">
                    {icon}
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </CardContent>
        </Card>
    )
}