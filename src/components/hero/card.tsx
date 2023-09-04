import { Check } from 'lucide-react'

export default function HeroCard() {
    return (
        <section className="bg-[#060611] text-white mx-auto max-w-screen-xl px-5 md:px-24 py-24 lg:rounded-lg" style={{backgroundImage: "url('./assets/bg-pattern.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="flex flex-col md:items-center md:flex-row gap-12 md:space-x-24">
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-4xl font-semibold monsterrat leading-normal">
                        Find your dream car faster with Drivly
                    </h1>
                    <p className="mt-8 text-white/70 text-lg">
                        Find your dream car, get a deal that suits your budget, and enjoy home delivery—all in a straightforward, simple process.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <HeroCheckList/>
                </div>
            </div>
        </section>
    )
}

function HeroCheckList() {
    return (
        <div className="grid grid-cols-1 gap-4 text-lg">
            <div className="flex items-center">
                <CustomCheck/> We’ll find it for you
            </div>
            <div className="flex items-center">
                <CustomCheck/> Facilitate Financing
            </div>
            <div className="flex items-center">
                <CustomCheck/> Vehicle Protection Coverage
            </div>
            <div className="flex items-center">
                <CustomCheck/> Vehicle Delivery
            </div>
        </div>
    )
}

function CustomCheck() {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
            <path d="M8.16975 0.0356617C5.88818 0.247335 3.77341 1.32101 2.25622 3.03806C0.738988 4.75497 -0.0664318 6.98595 0.00429266 9.2761C0.0748939 11.5663 1.01622 13.7434 2.63646 15.3634C4.2566 16.9836 6.43361 17.925 8.72376 17.9956C11.0139 18.0662 13.2448 17.2608 14.9618 15.7436C16.6788 14.2264 17.7524 12.1115 17.9642 9.83011C18.1214 8.07045 17.7587 6.30317 16.9212 4.74777C16.0836 3.19215 14.808 1.91647 13.2524 1.07903C11.6969 0.241495 9.92962 -0.1212 8.17008 0.0359831L8.16975 0.0356617ZM13.8341 6.97738L8.4998 12.256C8.33976 12.4118 8.12523 12.4989 7.90191 12.4989C7.67852 12.4989 7.46399 12.4118 7.30397 12.256L4.15995 9.25342C3.93872 9.04093 3.84754 8.72656 3.92093 8.42866C3.99432 8.13076 4.22099 7.89469 4.51568 7.80928C4.81029 7.72389 5.12814 7.80217 5.34944 8.01467L7.88695 10.4493L12.6362 5.75792C12.8557 5.55169 13.1673 5.47571 13.4571 5.55791C13.7469 5.64002 13.9723 5.86829 14.0509 6.15906C14.1294 6.44984 14.0496 6.76051 13.8407 6.9774L13.8341 6.97738Z" fill="#00CAB9"/>
        </svg>
    )
}