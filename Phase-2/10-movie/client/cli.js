import rs from 'readline-sync'
import axios from 'axios'
import chalk from 'chalk'


class CLI {
    #BASE_URL = 'http://localhost:3000'
    constructor() {
        this.selectedMovieID = null
        this.movies = null
        this.app = axios.create({
            baseURL: this.#BASE_URL,
            timeout: 5000,
            validateStatus: (status) => status < 500
        })
    }
    async start() {
        this.OPTIONS = {
            1: this.getAllMovies.bind(this),
            2: this.listNewMovie.bind(this),
            3: this.rateMovie.bind(this)
        }
        console.log('\nMOVIES');
        console.log('1. Display All Movies');
        console.log('2. Add a new Movie');
        console.log('3. Rate Movie');
        console.log('0. Exit');
        const choice = rs.questionInt('Enter your choice: ')
        if (!choice) { 
            console.log('Exiting...');
            process.exit(0)
        }

        if(!this.OPTIONS[choice]){
            console.log('Invalid choice');
          return await this.start()
        }

        await this.OPTIONS[choice]()

        await this.start()

    }

    async getAllMovies() {
        try {
            const response = await this.app.get('/api/movies')
            if(!response.data.success){
                return console.log(chalk.redBright(response.data.message))
            }

            console.log(chalk.greenBright(response.data.message))
            this.movies = response.data.data

            if(!this.movies || this.movies.length == 0){
                return console.log(chalk.redBright('Movies not found'));
            }
            console.log(chalk.blueBright('--------------------------'));
            
            this.movies.forEach((m, i) => {
                console.log('Movie '+ (i + 1) + ': ' + m.title);
                console.log('Description: '+ m.description);
                console.log('Ratings: '+ m.average_rating)
                console.log(chalk.blueBright('--------------------------'));
            });
            const choice = rs.keyInYN('Do you want to select a movie?')
            if(choice){
                this.selectMovie()
            }
            return
    
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }
    
    async listNewMovie () {
        try {
            const title = rs.question('Enter the movie title: ')
            const description = rs.question('Enter the movie description: ')

            const response = await this.app.post('/api/movies/newmovie',
                {
                    title,
                    description
                }
            )
            if(!response.data.success) {
                return console.log(chalk.redBright(response.data.message));
            }
            console.log(chalk.greenBright(response.data.message));
    
        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async selectMovie () {
        try {   
            let index = rs.questionInt('Enter the movie ID you want to select: ')
            index--

            if(index < 0 || index == this.movies.length){
                    console.log('Invalid index')
            }
            this.selectedMovieID = this.movies[index]._id

        } catch (error) {
            console.log(chalk.redBright(error));
        }
    }

    async rateMovie() {
        try {
            if(!this.selectedMovieID){
                console.log(chalk.redBright('Please select a movie first'));
                await this.getAllMovies()
                return
            }
            const rating = rs.questionInt('Enter the rating for movie: ')
            const response = await this.app.put(`/api/movies/rate/${this.selectedMovieID}`, 
                {
                    rating
                }
            )
            
            if(!response.data.success){
                return console.log(chalk.redBright(response.data.message));
            }
            console.log(chalk.greenBright(response.data.message));

        } catch (error) {
        console.log(chalk.redBright(error)); 
        }
    }

}

const app = new CLI
app.start()