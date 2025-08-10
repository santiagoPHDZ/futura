
const Footer = () => {

    return (
        <footer className="w-full flex flex-col items-center justify-center mx-auto gap-8">

            <div className="w-full border-t" />

            <div className="px-4 flex flex-col md:flex-row justify-between items-start w-full gap-8">

                <div className="sm:col-span-12 lg:col-span-3">
                    <h5 className="text-secondary-text font-light text-sm pt-2">
                        Futura Corp.
                    </h5>
                </div>

                <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
                    <h6 className="font-medium mb-2 text-primary-text">
                        Contact
                    </h6>

                    <div className="text-secondary-text font-light text-sm space-y-2">
                        <p >
                            Email. contact@futuracorp.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-4 md:flex w-full md:items-center md:justify-between pb-16">
                <div className="text-sm text-gray-600 mr-4">&copy; futuracorp.com. All rights reserved.</div>
            </div>

        </footer>
    )
}

export default Footer;