"use client"
import { signOut, useSession } from "next-auth/react"

export default function DashboardContent() {
    const { data } = useSession();
    return <div>
        <div>
            {data?.user?.name}
        </div>
        <form
            action={async () => {
                await signOut()
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    </div>
}