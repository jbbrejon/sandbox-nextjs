import Nav from "./nav"

export default function Header() {
    return (
        <header className="flex justify-between my-3">
            <div>Logo</div>
            <Nav />
        </header>
    )
}