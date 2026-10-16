export type UserRole = "admin" | "student";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

export interface StudentProfile {
  userId: string;
  fullName: string;
  enrolledCourses: Enrollment[];
  contact: string;
}

export interface Enrollment {
  id: string;
  courseId: string;
  courseName: string;
  schedule: {
    date: string;
    startTime: string;
    endTime: string;
    venue: string;
  }[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export interface InvoiceReceipt {
  id: string;
  studentId: string;
  courseId: string;
  type: "invoice" | "receipt";
  amount: number;
  issueDate: string;
}

export interface Certificate {
  id: string;
  studentId: string;
  courseId: string;
  courseName: string;
  issueDate: string;
}
