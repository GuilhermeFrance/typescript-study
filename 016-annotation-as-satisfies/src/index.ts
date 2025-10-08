// anotation, as and satisfies 

interface FooterData {
    text: string,
    title: string
}

type Footer = string | FooterData

const footerA: Footer = "Administração"

const footerB = {
    text: "Administração",
    title: "Rincko"
 } as Footer;

 const footerC = {
    text: "Adminstração",
    title: "Rincko"
 } satisfies Footer