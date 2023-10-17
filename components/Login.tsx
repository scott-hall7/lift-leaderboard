'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"

const LogInButton = () => {
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

    if (user) return null;
    
    return (
        <li>
            <Link href="/login">Log in</Link>
        </li>
    )
}

export default LogInButton