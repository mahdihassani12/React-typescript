type namesProps = {
    names:{
        first: string,
        last: string
    }[]
}
export const PersonList = (props: namesProps) => {
    return (
       <div>
        {
            props.names.map((name) => {
                return (
                    <p> {name.first} - {name.last} </p>
                )
            })
        }
       </div>
    )
}