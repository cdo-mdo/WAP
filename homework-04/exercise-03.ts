// exercise 3

type Student = { 
    student_id: string, 
    firstname: string; 
    lastname: string; 
    grade: number; 
};

type Course = Record<string, 
    {title: string, students: Student[]; }
>; // example: { 'CS472': { title: 'Web Application Programming', students: [] }}

export class Exercise3 {
        #courses: Course[] = [];

    /**
     * Add a new course if the course does not already exist.
     * @param course_code - Code of the new course
     * @param course_title - Title of the new course
     * @returns true if the course is added successfully, false otherwise
     */
    add_course(course_code: string, course_title: string): boolean {
        const course = this.#courses[course_code];
        if (course) {
            return false; // The course already existed.
        }
        this.#courses[course_code] = {title: course_title, students: [] };
        return true;
    }

    /**
     * Update course title by course code
     * @param course_code - Code of the course
     * @param new_course_title - Title of the course
     * @returns return true if the course's title is updated successfully, false otherwise.
     */
    update_course_title(course_code: string, new_course_title: string): boolean {
        const course = this.#courses[course_code];
        if (!course) {
            return false; // The course with this course_code does not exist.
        }
        course.title = new_course_title;
        return true;
    }

    /**
     * Delete the course by course_code
     * @param course_code - Code of the course
     * @returns true if the course is delete successfully, false otherwise
     */
    delete_course(course_code: string): boolean {
        if (!this.#courses[course_code]) {
            return false; // Course does not exist
        }
        delete this.#courses[course_code];
        return true;
    }

    /**
     * Get course title by course code
     * @param course_code - Code of the course
     * @returns course title if found, otherwise return ''
     */
    get_course_title_by_code(course_code: string): string {
        const course = this.#courses[course_code];

        return course ? course.title : '';
    }

    /**
     * Enrol students in the course if the student isn't already enrolled.
     * @param course_code - Code of the course
     * @param student - student to be enrolled
     * @returns true if student is enrolled successfully, false otherwise
     */
    enroll_student_in_course(course_code: string, student: Partial<Student>): boolean {
        const course = this.#courses[course_code];
        if (!course) {
            return false; // Course does not exist
        }

        // Check if the student is already enrolled
        if (course.students.some(s => s.student_id === student.student_id)) {
            return false; // Student already enrolled
        }

        // Enroll the student and set grade to 0 if not provided
        const newStudent: Student = {
            student_id: student.student_id!,
            firstname: student.firstname || '',
            lastname: student.lastname || '',
            grade: student.grade || 0,
        };
        course.students.push(newStudent);
        return true;
    }

    /**
     * Remove a student from a course by their ID
     * @param course_code - Course code
     * @param student_id - Student ID
     * @returns true if the student is removed from course successfully, false otherwise
     */
    remove_student_from_course(course_code: string, student_id: string): boolean {
        const course = this.#courses[course_code];
        if (!course) {
            return false; // Course does not exist
        }

        const studentIndex = course.students.findIndex(s => s.student_id === student_id);
        if (studentIndex === -1) {
            return false; // Student not found
        }

        // Remove the student
        course.students.splice(studentIndex, 1);
        return true;
    }

    /**
     * Update the grade of a student in a course
     * @param course_code 
     * @param student_id 
     * @param grade 
     * @returns true if the student's grade is updated successfully, false otherwise
     */
    update_student_grade(course_code: string, student_id: string, grade: number): boolean {
        const course = this.#courses[course_code];
        if (!course) {
            return false; // Course does not exist
        }

        const student = course.students.find(s => s.student_id === student_id);
        if (!student) {
            return false; // Student not found
        }

        // Update the grade
        student.grade = grade;
        return true;
    }

    /**
     * Get the grade of a student in a course by their ID
     * @param course_code 
     * @param student_id 
     * @returns return grade if found or 0 if not found
     */
    get_student_grade(course_code: string, student_id: string): number {
        const course = this.#courses[course_code];
        if (!course) {
            return 0; // Course not found
        }

        const student = course.students.find(s => s.student_id === student_id);
        return student ? student.grade : 0;
    }
}
