import { signIn } from "@/auth"

export default async function LoginPage() {
    return <div>
        <form
            action={async () => {
                "use server"
                await signIn("google", { redirectTo: "/dashboard" })
            }}
        >
            <button type="submit">Sign in</button>
        </form>
    </div>
}