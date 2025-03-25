import Link from "next/link";

type Props = {
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label : string,
    primary?: boolean,
    type?: 'button'
    disabled?: boolean,
    href?: string,
}

export function Button({onclick, label, primary, type, disabled, href}:Props){
    return (
        <>
            {href && (
                <Link
                    href={href}>
                    {label}
                </Link>
            )}

            {!href && (
                <button
                    onClick={onclick}
                    type={type}
                    disabled={disabled}
                    className={primary ? "btn btn-primary" : "btn"}
                >
                    {label}
                </button>
            )}

        </>
    )
}
