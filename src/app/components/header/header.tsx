import Image from "next/image";


 export default function Header(){

    return (
        <header className="header">
            <div className="header__logo">
                <Image src="/images/logo.png" alt="logo" width={150} height={150} />
            </div>
            <div className="header__title">
                <h1 className="header__title__text">Welcome to the Next.js Blog</h1>
            </div>
        </header>
    )
}