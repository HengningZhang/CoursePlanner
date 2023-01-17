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

    function computePlan(){
      //[[[[courseName,sessionID,startTime,endTime],[courseName,sessionID,startTime,endTime]],[],[],[],[],[],[]],[*]]


      //course1 session1 mon 1000-1200
      //course1 session2 mon 1201-1401
      //course2 session1 mon 1000-1200
      //course2 session2 mon 1201-1401

      var coursesForPlan = new Map(courses)
      // for(var i=0;i<courseArray.length;i++){
      //   courseArray[i][1]=Array.from(courseArray[i][1])
      // }
      // console.log(courseArray)
      for(var key of coursesForPlan.keys()){
        coursesForPlan.set(key,Array.from(coursesForPlan.get(key)))
      }
      console.log(coursesForPlan)
      var plans=[]
      var plan=[[],[],[],[],[],[],[]]
      var courseNames=Array.from(coursesForPlan.keys())
      console.log(courseNames[0])
      var sessions=coursesForPlan.get(courseNames[0])
      console.log("sessions",sessions)
      function dfs(i){
        if(i==courseNames.length){
          plans.push(JSON.parse(JSON.stringify(plan)))
        }
        sessions=coursesForPlan.get(courseNames[i])
        //[["1",[0,0,0,0,0,0,[1234,2345]]],["2",[0,0,0,0,0,0,[1234,2345]]]]
        for(session of sessions){
          var sessionID=session[0]
          var weekClassTime=session[1]
          for(var i=0;i<weekClassTime.length;i++){
            var classTime=weekClassTime[i]
            if(classTime!==0){
              const classObj={
                courseName:courseNames[i],
                session:sessionID,
                startTime:classTime[0],
                endTime:classTime[1]
              }
              for(classTime of plan){}
            }
          }
        }
      }
    }

    function overlap(interval1,interval2){
      if(interval1.startTime>interval2.startTime){
        var temp = interval1
        interval1=interval2
        interval2=temp
      }
      if(interval2.startTime<=interval1.endTime){
        return true
      }
      return false
    }

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
          <button onClick={computePlan}>Compute Plan</button>
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