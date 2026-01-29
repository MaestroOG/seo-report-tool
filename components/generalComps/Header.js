import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/button";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
            <Container>
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-slate-900">
                        SEO<span className="text-primary">Report</span>
                    </span>
                </Link>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-3">
                    {/* <Button variant="ghost">Sign in</Button> */}
                    <Link href="/create-report">
                        <Button className="gap-2">
                            Create Report
                        </Button>
                    </Link>
                </div>

                {/* Mobile menu */}
                <MobileMenu />
            </Container>
        </header>
    )
}