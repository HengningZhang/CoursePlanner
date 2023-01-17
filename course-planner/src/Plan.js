export default function Course(props){
    const weekDay={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday",6:"Sunday"}
    return(
        <>
            <mark>{"Plan"+props.planID}</mark>
            <ul>
            {Array.from(props.dayPlans).map((plan,index)=>
            <li key={index}>
            {weekDay[index]+":"}
            {plan.length===0?" No Class":
            <ul>
            {Array.from(plan).map(([courseName,session,startTime,endTime])=>
            <li>
            <i>{courseName+" session "+session+" "+startTime+" To "+endTime}</i>
            </li>
            )}
            </ul>}
            </li>)}
            </ul>
            
        </>
    )

}
