'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const LogOutButton = () => {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const [user, setUser] = useState(false)

    useEffect(() => {
        async function findUser() {
            const { data: { user } } = await supabase.auth.getUser()
            if (user !== null) setUser(true)
            else setUser(false)
        }
        findUser()
    })

    if (!user) return null;

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <li>
            <button onClick={handleSignOut}>Sign out</button>
        </li>
    )
}

export default LogOutButton;