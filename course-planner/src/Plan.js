export default function Course(props){
    const weekDay={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday",6:"Sunday"}
    return(
        <>
        {props.plans.map((plan,planID)=>
            <div>
            <mark>{"Plan "+parseInt(planID)}</mark>
            <ul>
            {plan.map((dayplan,index)=>
            <li key={index}>
            {weekDay[index]+":"}
            {dayplan.length===0?" No Class":
            <ul>
            {dayplan.map((classObj)=>
            <li>
            <i>{classObj.courseName+" session "+classObj.session+" "+classObj.startTime+" To "+classObj.endTime}</i>
            </li>
            )}
            </ul>}
            </li>)}
            </ul>
            </div>
        )
        }
            
            
        </>
    )

}
