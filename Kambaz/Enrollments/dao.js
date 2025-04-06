import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function getAllEnrollments() {
  return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  if (enrollments.filter((enrollment) => (enrollment.user === userId && enrollment.course === courseId)).length === 0) {
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
  } else {
    console.log("Can't reenroll you");
  }
}

export function unenrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter((enrollment) => !(enrollment.user === userId && enrollment.course === courseId));
}

// In your Node.js server application, implement routes to support the Enrollments screen. 
// Users should be able to enroll and unenroll from courses. In the React application, 
// implement an enrollments client that uses axios to integrate with the routes in the server. 
// Enrollments should persist as long as the server is running.