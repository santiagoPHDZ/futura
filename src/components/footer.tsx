import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="w-full flex flex-col items-center justify-center mx-auto gap-8">

            <div className="w-full border-t" />

            <div className="px-4 flex flex-col md:flex-row justify-between items-start w-full gap-8">

                {/* 1st block */}
                <div className="sm:col-span-12 lg:col-span-3">
                    {/* <div className="mb-2">
                        <Image
                            src="/logo.png"
                            alt="LOGO"
                            width={216}
                            height={100}
                            className="h-6 w-auto"
                        />
                    </div> */}
                    <h5 className="text-secondary-text font-light text-sm pt-2">
                        Santiago Padilla
                    </h5>
                </div>

                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 className="font-medium mb-2 text-primary-text">
                        Contact
                    </h6>

                    <div className="text-secondary-text font-light text-sm space-y-2">
                        <p >
                            Email. contact@santiagopadilla.com
                        </p>
                    </div>
                </div>

            </div>

            {/* <div className="w-full border-t" /> */}

            <div className="px-4 md:flex w-full md:items-center md:justify-between pb-16">
                <div className="text-sm text-gray-600 mr-4">&copy; santiagopadilla.com. All rights reserved.</div>
            </div>

        </footer>
    )
}

export default Footer;