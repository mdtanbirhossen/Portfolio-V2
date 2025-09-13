"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type Props = {
    data?: {
        id: string;
        fullName: string;
        email: string;
    }[]
}

export default function Banner({ data }: Props) {

    useGSAP(() => { gsap.to('#amber-box', { y: 250, repeat: -1, yoyo: true, rotate: 360 }) }, [])

    return (
        <div>
            {data?.map((item) => (
                <div key={item.id}>
                    <h2>{item.fullName}</h2>
                    <p>{item.email}</p>
                </div>
            ))}

            <div id="amber-box" className="bg-amber-500 h-20 w-20 rounded-2xl absolute top-0 left-0"></div>
        </div>
    )
}
