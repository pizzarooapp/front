import { FooterLink } from "../footer-link/footer-link.component"

export const Footer = () => {

    return (
        <div className="bg-gray-900 p-8">
            <div className="text-white">
                <div className="mb-4">
                    <span className="uppercase font-bold text-sm text-zinc-500">Contacts:</span>
                </div>
                <div className="mb-8">
                    <ul>
                        <li>
                            <FooterLink href="tel:+380441234567">
                                {`044 123 45 67`}
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink href="mailto:info@pizzaroo.app">
                                {`info@pizzaroo.app`}
                            </FooterLink>
                        </li>
                    </ul>
                </div>

                <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />

                <div>
                    <span className="text-xl font -semibold text-white">
                        {`🍕 Pizzaroo`}
                    </span>
                </div>
            </div>
        </div>
    )
}