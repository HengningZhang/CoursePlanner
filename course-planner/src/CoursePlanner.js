import React from "react";
import Course from "./Course";
import { useState, useEffect } from "react"
export default function CoursePlanner(props){
    // const courseList = props.courses.map((course) => (
        // <Course
        //     id={course.id}
        //     courseName={course.courseName}
        //     courseDay={props.courseDay}
        //     startTime={props.startTime}
        //     endTime={props.endTime}
        //   />
    //     )
    // );
    const [courseName, setCourseName] = useState("");
    const [courseDay, setCourseDay] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [courseKey, setCourseKey] = useState("");
    const [courses, setCourses] = useState([]);

    function handleClick(){
      console.log("clicked",courseName)
      if(courseName=="" || courseDay=="" || startTime=="" || endTime==""){
        alert("invalid input")
        return;
      }
      var newCourses=courses
      newCourses.push({courseName:courseName,
        courseDay:courseDay,
        startTime:startTime,
        endTime:endTime})
      setCourses(newCourses)
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
              Course Day in week:
              <input
                  name="courseDay"
                  type="text"
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
            {courses.map((course) => 
            <li key={course.courseName}>
              <Course
              id={course.id}
              courseName={course.courseName}
              courseDay={course.courseDay}
              startTime={course.startTime}
              endTime={course.endTime}
              />
            </li>)}
          </ul>
      </div>
    )
}