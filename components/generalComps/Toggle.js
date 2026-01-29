import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export default function Toggle({
    label,
    checked,
    onChange
}) {
    return (
        <div className="flex items-center justify-between">
            <Label htmlFor={label}>{label}</Label>
            <Switch checked={checked} id={label} onCheckedChange={onChange} />
        </div>
    )
}