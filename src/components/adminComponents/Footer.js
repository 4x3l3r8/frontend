import tw from "twin.macro"

const Footer = tw.footer`py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center`
const P = tw.p`text-gray-700 mb-6 lg:mb-0`
const A = tw.a`text-blue-500 hover:text-blue-700`
const FooterUl = tw.ul`list-none flex`
const FooterLi = tw.li`mr-6`


export default function footer() {
    return (
        <Footer>
            <P>
                Copyright &copy; {new Date().getFullYear()}{' '}
                <A
                    href="https://www.creative-tim.com?ref=mtdk"
                    target="_blank"
                    rel="noreferrer"
                    className=""
                >
                    Creative Tim
                </A>
            </P>

            <FooterUl className="">
                <FooterLi className="">
                    <a
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.creative-tim.com/presentation?ref=mtdk"
                    >
                        About Us
                    </a>
                </FooterLi>
                <FooterLi className="mr-6">
                    <a
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.creative-tim.com/blog/?ref=mtdk"
                    >
                        Blog
                    </a>
                </FooterLi>
                <FooterLi className="mr-6">
                    <a
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/creativetimofficial/material-tailwind-dashboard-react/blob/main/LICENSE?ref=mtdk"
                    >
                        MIT License
                    </a>
                </FooterLi>
                <FooterLi>
                    <a
                        className="text-gray-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        href="https://creative-tim.com/contact-us?ref=mtdk"
                    >
                        Contact Us
                    </a>
                </FooterLi>
            </FooterUl>
        </Footer>
    );
}
