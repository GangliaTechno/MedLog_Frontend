import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorLogbookStyles.css"; // ✅ Importing separate styles

const DoctorLogbook = () => {
    const [students, setStudents] = useState([]); // ✅ Store student list
    const [selectedStudent, setSelectedStudent] = useState(null); // ✅ Track selected student
    const [entries, setEntries] = useState([]); // ✅ Store fetched log entries
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:5000/api/auth/users") // ✅ Correct API for fetching students
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched Students:", data);
                setStudents(data);
            })
            .catch((error) => console.error("Error fetching students:", error));
    }, []);
    

    const handleViewEntries = (student) => {
        setSelectedStudent(student); // ✅ Store the selected student

        // 🔹 Fetch the selected student's log entries using email
        fetch(`http://localhost:5000/api/logentry/${encodeURIComponent(student.email)}`)
            .then((res) => res.json())
            .then((logEntries) => {
                console.log(`Log Entries for ${student.fullName}:`, logEntries);
                setEntries(logEntries); // ✅ Store fetched entries
            })
            .catch((error) => console.error(`Error fetching logs for ${student.email}:`, error));
    };

    return (
        <div className="doctor-logbook-container">
            <h2 className="doctor-logbook-title">Doctor Logbook - View Student Entries</h2>

            {/* 🔹 Display student list with View Entries buttons */}
            {students.length === 0 ? (
                <p className="no-students">No students found.</p>
            ) : (
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student._id}>
                                <td>{student.fullName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button 
                                        className="view-entries-btn"
                                        onClick={() => handleViewEntries(student)} // ✅ Fetch this student’s logs
                                    >
                                        View Entries
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* 🔹 Display log entries only if a student is selected */}
            {selectedStudent && (
                <div className="log-entries-container">
                    <h3 className="student-log-title">Entries for {selectedStudent.fullName}</h3>

                    {entries.length === 0 ? (
                        <p className="no-entries-text">No log entries found.</p>
                    ) : (
                        entries.map((entry) => (
                            <div key={entry._id} className="entry-box">
                                <h4 className="entry-category-name">{entry.category.name}</h4>
                                <div className="entry-details-container">
                                    {Object.entries(entry.data).map(([key, value]) => (
                                        <p key={key} className="entry-detail">
                                            <strong>{key.replace(/_/g, " ")}:</strong> {value || "N/A"}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            <button className="logout-btn" onClick={() => navigate("/")}>
                Logout
            </button>
        </div>
    );
};

export default DoctorLogbook;
