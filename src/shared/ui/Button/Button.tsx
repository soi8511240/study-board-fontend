type Props = {
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    label : string,
    primary?: boolean,
    type?: 'button'
    disabled?: boolean
}

export function Button({onclick, label, primary, type, disabled}:Props){
    return (
        <button
            onClick={onclick}
            type={type}
            disabled={disabled}
            className={primary? 'btn btn-primary' : 'btn'}
        >
            {label}
        </button>
    )
}
