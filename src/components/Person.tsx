type nameProps = {
    name:{
        name: string,
        lastName: string
    }
}
export const Person = (props: nameProps) => {
    return (
        <h1>Hello from { props.name.name } { props.name.lastName } </h1>
    )
}
