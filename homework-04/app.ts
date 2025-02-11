// Test exercise-01

import {
    add_item,
    get_items,
    update_item_title_by_id,
    delete_item_by_id,
    get_item_title_by_id,
    Item,
} from './exercise-01';

// Test adding items
console.log(add_item({ id: '1', title: 'First Item' })); // true
console.log(add_item({ id: '2', title: 'Second Item' })); // true
console.log(add_item({ id: '1', title: 'Duplicate Item' })); // false

// Test getting items
console.log(get_items()); // [{ id: '1', title: 'First Item' }, { id: '2', title: 'Second Item' }]

// Test updating an item title
console.log(update_item_title_by_id('1', 'Updated First Item')); // true
console.log(get_item_title_by_id('1')); // 'Updated First Item'

// Test deleting an item
console.log(delete_item_by_id('2')); // true
console.log(delete_item_by_id('3')); // false

// Test getting an item's title
console.log(get_item_title_by_id('2')); // ''



// Test exercise-02
import { 
    Exercise2, 
    Movie 
} from './exercise-02';

const exercise = new Exercise2();

// Test adding movies
console.log(exercise.add_movie_in_genre('thriller', { id: '1', title: 'The American' })); // true
console.log(exercise.add_movie_in_genre('thriller', { id: '2', title: 'Arcadian' })); // true
console.log(exercise.add_movie_in_genre('thriller', { id: '1', title: 'Duplicate ID' })); // false

// Test updating a movie title
console.log(exercise.update_movie_title_by_genre_and_movie_id('thriller', '1', 'The American Updated')); // true
console.log(exercise.update_movie_title_by_genre_and_movie_id('thriller', '3', 'Non-existent Movie')); // false

// Test getting a movie title by ID
console.log(exercise.get_movie_title_by_id('thriller', '1')); // "The American Updated"
console.log(exercise.get_movie_title_by_id('thriller', '3')); // ""

// Test deleting a movie
console.log(exercise.delete_movie_by_genre_and_movie_id('thriller', '2')); // true
console.log(exercise.delete_movie_by_genre_and_movie_id('thriller', '3')); // false

// Test getting all movies in a genre
console.log(exercise.get_movie_title_by_id('thriller', '2')); // ""


// Test exercise-03
import { 
    Exercise3 
} from './exercise-03';

const exercise3 = new Exercise3();

// Add courses
console.log(exercise3.add_course('CS472', 'Web Application Programming')); // true
console.log(exercise3.add_course('CS473', 'Advanced Algorithms')); // true
console.log(exercise3.add_course('CS472', 'Duplicate Course')); // false

// Update course title
console.log(exercise3.update_course_title('CS472', 'Modern Web Development')); // true
console.log(exercise3.get_course_title_by_code('CS472')); // 'Modern Web Development'

// Enroll students
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '1', firstname: 'John', lastname: 'Doe' })); // true
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '2', firstname: 'Jane', lastname: 'Smith' })); // true
console.log(exercise3.enroll_student_in_course('CS472', { student_id: '1', firstname: 'Duplicate', lastname: 'Student' })); // false

// Update student grade
console.log(exercise3.update_student_grade('CS472', '1', 95)); // true
console.log(exercise3.get_student_grade('CS472', '1')); // 95

// Remove a student
console.log(exercise3.remove_student_from_course('CS472', '2')); // true
console.log(exercise3.remove_student_from_course('CS472', '3')); // false

// Delete course
console.log(exercise3.delete_course('CS472')); // true
console.log(exercise3.get_course_title_by_code('CS472')); // ''
