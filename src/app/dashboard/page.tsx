import { auth } from "@/auth"
import DashboardContent from "./content"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const session = await auth();
    if (!session) { redirect("/login") }

    return <DashboardContent />

}