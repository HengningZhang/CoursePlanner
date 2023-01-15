import React from "react";
import Course from "./Course";
import { useState} from "react"
export default function CoursePlanner(props){
    const [courseName, setCourseName] = useState("");
    const [session, setSession] = useState("");
    const [courseDay, setCourseDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [courses, setCourses] = useState(new Map());

    function handleClick(){
      console.log("clicked",courseName)
      if(courseName==="" || session==="" || courseDay==="" || startTime==="" || endTime===""){
        alert("invalid input")
        return;
      }
      var newCourses=courses
      if(newCourses.has(courseName)){
        if(newCourses.get(courseName).has(session)){
          newCourses.get(courseName).get(session)[parseInt(courseDay)-1]=[startTime,endTime]
        }else{
          newCourses.get(courseName).set(session,[0,0,0,0,0,0,0])
          newCourses.get(courseName).get(session)[parseInt(courseDay)-1]=[startTime,endTime]
        }
      }else{
        var newMap=new Map()
        newCourses.set(courseName,newMap)
        newCourses.get(courseName).set(session,[0,0,0,0,0,0,0])
        newCourses.get(courseName).get(session)[parseInt(courseDay)-1]=[startTime,endTime]
      }
      console.log(newCourses)
      console.log(Array.from(newCourses))
      // newCourses.push({courseName:courseName,
      //   courseDay:courseDay,
      //   startTime:startTime,
      //   endTime:endTime})
      setCourses(newCourses)
      setSession("")
      setCourseName("")
      setCourseDay("")
      setStartTime("")
      setEndTime("")
    }


    return(
      <div>
          <form>
              <label>
              Course Name:
              <input
                  name="courseName"
                  type="text"
                  value={courseName}
                  onChange={e=>setCourseName(e.target.value)} />
              </label>
              <br />
              <label>
              Session ID:
              <input
                  name="session"
                  type="text"
                  value={session}
                  onChange={e=>setSession(e.target.value)} />
              </label>
              <br />
              <label>
              Course Day in week:
              <input
                  name="courseDay"
                  type="number"
                  value={courseDay}
                  onChange={e=>setCourseDay(e.target.value)} />
              </label>
              <br />
              <label>
              Start Time:
              <input
                  name="startTime"
                  type="number"
                  value={startTime}
                  onChange={e=>setStartTime(e.target.value)} />
              </label>
              <br />
              <label>
              End Time:
              <input
                  name="endTime"
                  type="number"
                  value={endTime}
                  onChange={e=>setEndTime(e.target.value)} />
              </label>
              
          </form>
          <button onClick={handleClick}>Add Course</button>
          <ul>
            {Array.from(courses).map((courseInfo) => 
            <li key={courseInfo[0]}>
              <Course
              courseName={courseInfo[0]}
              sessions={courseInfo[1]}
              />
            </li>)}
          </ul>
      </div>
    )
}