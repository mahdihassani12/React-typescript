type Props = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: Props) => {
    return (
        <div>
            {
                props.isLoggedIn ?
                `Welcome ${ props.name } you have ${ props.messageCount } unread messages `
                :
                `Welcome guest`
            }
        </div>
    )
}