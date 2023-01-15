export default function Course(props){
    return(
        <>
            <mark>{props.courseName}</mark>
            <ul>
            {Array.from(props.sessions).map(([key,val])=>
            <li key={key}>
            <i>{key}</i>
            <br/>
            <i>{val}</i>
            </li>)}
            </ul>
            
        </>
    )

}
