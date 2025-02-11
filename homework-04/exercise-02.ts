// exercise 2

export type Movie = { id: string, title: string; };

export class Exercise2 {
    #movies: Record<string, Movie[]> = {}; // example: { thriller: [{ id: '1', title: 'The American'}, { id: '2', title: 'Arcadian'}] }

    /**
     * Add a movie to a specific genre if the movie id does not already exist.
     * @param genre - the genre to which the movie will be added
     * @param new_movie - the movie object to add
     * @returns true if the movie is added successfully, false otherwise.
     */
    add_movie_in_genre(genre: string, new_movie: Movie): boolean {
        // Initialize genre array if it doesn't exist
        if (!this.#movies[genre]) {
            this.#movies[genre] = [];
        }

        // Check if the movie ID already exist in the genre
        const exists = this.#movies[genre].some(movie => movie.id === new_movie.id);
        if (exists) {
            return false;
        }

        // Add the new movie to the genre
        this.#movies[genre].push(new_movie);
        return true;
    }

    /**
     * Update the title of a movie within a specific genre.
     * @param genre - The genre where the movie exists.
     * @param movie_id - The ID of the movie to update.
     * @param new_title - The new title for the movie.
     * @returns true if the movie's title is updated successfully, false otherwise.
     */
    update_movie_title_by_genre_and_movie_id(genre: string, movie_id: string, new_title: string): boolean {
        const movies = this.#movies[genre];
        if (!movies) {
            return false;
        }

        // Find the movie by ID
        const movie = movies.find(movie => movie.id === movie_id);
        if (!movie) {
            return false; // movie does not exist
        }
        // Update the movie title
        movie.title = new_title; 
        return true;
    }

    /**
     * Delete a movie by genre and movie ID. 
     * @param genre - The genre where the movie exists.
     * @param movie_id - The ID of the movie to delete.
     * @returns - true if the movie is deleted successfully, false otherwise.
     */
    delete_movie_by_genre_and_movie_id(genre: string, movie_id: string): boolean {
        const movies = this.#movies[genre];
        if (!movies) {
            return false; // Genre does not exist
        }

        // Check if the movie exists
        const index = movies.findIndex(movie => movie.id === movie_id);
        if (index == -1) {
            return false; // Movie does not exist
        }

        // Delete the movie
        movies.splice(index, 1);
        return true;
    }

    /**
     * Get the title of a movie by genre and movie ID.
     * @param genre - The genre where the movie exist.
     * @param movie_id - The ID of the movie to retrieve.
     * @returns The title of the movie if found, or an empty string otherwise.
     */
    get_movie_title_by_id(genre: string, movie_id: string): string {
        const movies = this.#movies[genre];
        if (!movies) {
            return ''; // Genre does not exist
        }

        // Find the movie by ID
        const movie = movies.find(movie => movie.id === movie_id);
        
        return movie ? movie.title : ''; // Return the title if found, or an empty string otherwise
    }
}
