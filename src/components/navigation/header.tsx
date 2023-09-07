import Button from "./button"
import Image from "next/image"

export default function Header() {
    return (
        <div className="border-b border-[#E2E2E7]">
            <div className="mx-auto flex h-14 max-w-screen-xl justify-between px-5 items-center">
                <div className="translate-y-1">
                    <DrivlyLogoSVG/>
                </div>
                <div className="flex md:gap-10 gap-2">
                    <Button className="p-2">Browse</Button>
                    <Button className="ring-[#CCCCD3] ring-1 p-2">Contact Us</Button>
                </div>
            </div>
        </div>
    )
}

function DrivlyLogoSVG() {
    return (
        <Image src="./assets/DrivlyLogoDark.svg" alt="drivly logo" width={50} height={50} priority={true} />
    )
}