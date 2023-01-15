export default function Course(props){
    return(
        <>
            <mark>{props.courseName}</mark>
            <br/>
            <i>{props.courseDay}</i>
            <br/>
            <i>{props.startTime}</i>
            <br/>
            <i>{props.endTime}</i>
        </>
    )

}
