import Link from "next/link";

type Props = {
    href: string,
    label : string,
    primary?: boolean
}

export function StyledLink({href, primary, label}:Props){
    return (
        <Link
            href={href}
            className={primary ? 'btn btn-primary' : 'btn'}
        >
            {label}
        </Link>
    )
}
