type buttonProps = {
    handleClick : () => void
}

export const Button  = (props: buttonProps) => {
    return <button onClick={ props.handleClick } >Click me</button>
}