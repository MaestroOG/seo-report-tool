import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetHeader,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import MobileLink from "./MobileLink"
import Link from "next/link"

export function MobileMenu() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>



                <SheetContent side="right" className="w-70">
                    <SheetHeader>
                        {/* Mobile logo */}
                        <SheetTitle>
                            <div className="mb-8 flex items-center gap-2">
                                <span className="text-lg font-semibold">
                                    SEO<span className="text-primary">Report</span>
                                </span>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col h-full">
                        {/* Mobile nav */}
                        <nav className="flex flex-col gap-4 text-sm">
                            <MobileLink href="#features">Features</MobileLink>
                            <MobileLink href="#how-it-works">How it works</MobileLink>
                            <MobileLink href="#pricing">Pricing</MobileLink>
                        </nav>

                        {/* Mobile CTA */}
                        <SheetFooter>
                            <div className="mt-auto space-y-3">
                                <Link href="/create-report">
                                    <Button className="w-full">
                                        Create Report
                                    </Button>
                                </Link>
                            </div>
                        </SheetFooter>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}