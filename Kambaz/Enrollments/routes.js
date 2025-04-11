import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
    const getAllEnrollments = (req, res) => {
        const enrollments = dao.getAllEnrollments();
        res.json(enrollments);
    }

    const enrollUserInCourse = (req, res) => {
        const { userId, courseId } = req.params;
        dao.enrollUserInCourse(userId, courseId);
    }

    const unenrollUserInCourse = async (req, res) => {
        const { userId, courseId } = req.params;
        const result = await dao.unenrollUserInCourse(userId, courseId);
        res.status(200).json(result)
    }

    app.get("/api/Enrollments", getAllEnrollments);
    app.post("/api/Enrollments/:userId/:courseId", enrollUserInCourse);
    app.delete("/api/Enrollments/:userId/:courseId", unenrollUserInCourse);
}