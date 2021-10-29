import '../Styles/css/about.css';

function About() {
  return (
    <div>
      <p>This implements the basic functionality of the iTunes API for finding top 100 movies.</p>
      <p><span>Technologies used:</span> HTML, TypeScript, React, SCSS </p>
      <p><span>Implemented functionality:</span> Load a base object with a list of films and their characteristics. By default, there are up to 100 movies. Number depends on what the server returns.</p>
      <p><span>Sorting:</span> Possibility to sort the films by 3 parameters in alphabetical order. Clear sorting returns the display of movies in the order in which they came from the server.</p>
      <p><span>Filter:</span> Possibility to filter films by entered name or part of the name of the film. The filter displays the results based on the sorting that was set at the time of the search. Resetting the filter will revert to displaying all movies in the sorting last set by the user.</p>
      <p>When you hover your mouse over a film, a small animation is displayed, such as a zoom in and also the film card increases in height and shows 2 additional characteristics of the film.</p>
      <p>When you click on a film card, a pop-up window opens with a detailed description of the film. There is also a link to download the poster of the film in 2000x3000 pixels.</p>
    </div>
  );
}

export default About;
