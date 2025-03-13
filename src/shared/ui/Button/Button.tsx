type Props = {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label : string,
    primary?: boolean,
    type?: 'button'
    disabled?: boolean
}

export function Button({onClick, label, primary, type, disabled}:Props){
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={primary? 'btn btn-primary' : 'btn'}
        >
            {label}
        </button>
    )
}
