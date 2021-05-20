import React from 'react';
import './App.css';

function App() {
    const [formName, setFormName] = React.useState('');
    const [formAge, setFormAge] = React.useState(0);
    const [formRefer, setFormRefer] = React.useState('anders');
    const [formComment, setFormComment] = React.useState('');

    function submitClick(e) {
        e.preventDefault();
        console.log(formComment, formRefer, formAge, formName);
    }

  return (
      <form onSubmit={submitClick}>
          <fieldset>
              <legend>Gegevens</legend>

              <label htmlFor="personalName">
                  Naam:
              </label>
              <input
                  type="text"
                  name="name"
                  id="personalName"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
              />

              <label htmlFor="personalAge">
                  Leeftijd:
              </label>
              <input
                  type="text"
                  name="age"
                  id="personalAge"
                  value={formAge}
                  onChange={(e) => setFormAge(e.target.value)}
              />
          </fieldset>
          
          <fieldset>
              <legend>Jouw review</legend>

              <label htmlFor="referOptions">
                  Hoe heb je dit recept gevonden?
              </label>
              <select
                  name="found-how"
                  id="referOptions"
                  value={formRefer}
                  onChange={(e) => setFormRefer(e.target.value)}
              >
                  <option value="google">Google</option>
                  <option value="vriend">Vriend</option>
                  <option value="advertentie">Advertentie</option>
                  <option value="anders">Anders</option>
              </select>

              <label htmlFor="comments">
                  Opmerkingen:
              </label>
              <textarea
                  name="recipeComments"
                  id="comments"
                  cols="30"
                  rows="5"
                  value={formComment}
                  onChange={(e) => setFormComment(e.target.value)}
              >

              </textarea>
              <button type="submit">
                  Versturen
              </button>
          </fieldset>
      </form>
  );
}

export default App;
