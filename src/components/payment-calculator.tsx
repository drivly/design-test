import Image from "next/image";
import Button from "@/components/navigation/button";
import { RightArrow } from "@/components/arrow"

export default function PaymentCalculator() {
    return (
        <div className="mx-auto max-w-screen-xl px-5 flex items-center mb-24 md:12">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                <div className="relative md:w-auto order-1 md:order-2 md:my-0 my-5">
                    <Image width={1000} height={200} src="/assets/img-placeholder.png" alt="" />
                </div>
                <div className="flex flex-col md:py-5 gap-6 md:px-20 order-2 md:order-1">
                    <div className="w-max">
                        <p className="bg-[#DBEDFF] text-[#15183A] text-sm p-1 px-2.5 font-semibold uppercase rounded-lg tracking-widest">Payment Calculator</p>
                    </div>
                    <p className="text-3xl text-black font-semibold monsterrat">How much can you afford?</p>
                    <p className="text-lg leading-relaxed text-black">
                        See how much you need to budget for your perfect car and qualify or apply in minutes!
                    </p>
                    <div className="md:w-max">
                        <Button className="ring-[#CCCCD3] ring-1 flex flex-row items-center gap-2 p-3 justify-center">
                            Monthly Payment <RightArrow/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        );
}
