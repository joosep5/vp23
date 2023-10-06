-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-09-20 10:28:46.935

-- foreign keys
ALTER TABLE movie_genre
    DROP FOREIGN KEY movie_genre_genre;

ALTER TABLE movie_genre
    DROP FOREIGN KEY movie_genre_movie;

ALTER TABLE movie_production_company
    DROP FOREIGN KEY movie_production_company_movie;

ALTER TABLE movie_production_company
    DROP FOREIGN KEY movie_production_company_production_company;

ALTER TABLE person_in_movie
    DROP FOREIGN KEY person_in_movie_movie;

ALTER TABLE person_in_movie
    DROP FOREIGN KEY person_in_movie_person;

ALTER TABLE person_in_movie
    DROP FOREIGN KEY person_in_movie_position;

ALTER TABLE picture
    DROP FOREIGN KEY picture_person;

ALTER TABLE quote
    DROP FOREIGN KEY quote_person_in_movie;

-- tables
DROP TABLE genre;

DROP TABLE movie;

DROP TABLE movie_genre;

DROP TABLE movie_production_company;

DROP TABLE person;

DROP TABLE person_in_movie;

DROP TABLE picture;

DROP TABLE position;

DROP TABLE production_company;

DROP TABLE quote;

-- End of file.

