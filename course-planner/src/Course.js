export default function Course(props){
    const weekDay={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday",6:"Sunday"}
    return(
        <>
            <mark>{props.courseName}</mark>
            <ul>
            {Array.from(props.sessions).map(([key,val])=>
            <li key={key}>
            <i>{"session "+key}</i>
            <br/>
            <ul>
            <i>{Array.from(val).map((day,index)=>
                day!==0? 
                <li key={index}>
                    {weekDay[index]+" "+day[0]+" to "+day[1]}
                </li>:null
            )}</i>
            </ul>
            </li>)}
            </ul>
            
        </>
    )

}
