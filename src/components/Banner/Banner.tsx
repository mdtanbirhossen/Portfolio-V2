"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Navbar from "../Navbar/Navbar"
import Container from "../Common/Container"
import { useRef } from "react"
import NavLogo from "../Navbar/NavLogo"



export default function Banner() {
    const boxRef = useRef(null)

    useGSAP(() => { gsap.to(boxRef.current, { y: 250, repeat: -1, yoyo: true, rotate: 360 }) }, [])

    return (
        <div>
            <Container>
                <div className="flex flex-wrap">
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                    <p className="">About me</p>
                    <div className="text-7xl">Tanbir Hossen</div>
                </div>


                <NavLogo />
                {/* <div ref={boxRef} id="amber-box" className="bg-amber-500 h-20 w-20 rounded-2xl absolute top-0 left-0"></div> */}
            </Container>

        </div>
    )
}
