import Image from "next/image"
import Button from "./navigation/button"
import { RightArrow } from "@/components/arrow"

export default function GetFinancing() {
    return (
        <div className="mx-auto max-w-screen-xl px-5 flex items-center mb-24 md:12">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                <div className="relative md:my-0 my-5">
                    <Image width={1000} height={500} src="/assets/img-placeholder.png" alt="" />
                </div>
                <div className="flex flex-col md:py-5 gap-6 md:px-20">
                    <div className="w-max">
                        <span className="bg-[#E9F7F4] text-[#326458] text-sm p-1 px-2.5 font-semibold uppercase rounded-lg tracking-widest">Financing</span>
                    </div>
                    <p className="text-3xl text-black font-semibold monsterrat">Get financing with a few simple steps</p>
                    <p className="text-lg leading-relaxed text-black">
                        We&apos;ll help you find the best rates and facilitate financing with a monthly payment that works for you.
                    </p>
                    <div className="md:w-max">
                        <Button className="ring-[#CCCCD3] ring-1 flex flex-row items-center gap-2 p-3 justify-center">
                            Get Pre Approved <RightArrow/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}