import { CSSProperties } from "react"

type containerProps = {
    styles: CSSProperties
}

export const Container = (props: containerProps) => {
    return <div style={props.styles}>
        Container text
    </div>
}