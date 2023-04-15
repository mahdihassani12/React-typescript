type oscarProps = {
    children: React.ReactNode
}
export const Oscar = (props: oscarProps) => {
    return (
        <div>
            { props.children }
        </div>
    )
}