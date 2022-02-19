import './App.css';

import {cousin, health} from './utils/dataInput';

import Card from './components/card/card';
import {useState} from 'react';

function App() {
    const YOUR_APP_ID = process.env.REACT_APP_EDAMAM_API_ID;
    const YOUR_APP_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
    const [query, setQuery] = useState('');
    const [healthLabel, setHealthLabel] = useState('');
    const [cousinLabel, setCousinLabel] = useState('');
    const [recipes, setRecipes] = useState([]);

    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

    const getInfo = async () => {
        try {
            const res = await fetch(url);
            const jsoned = await res.json();
            setRecipes(jsoned.hits);
            // console.log('Recipes: ', jsoned.hits);
        } catch (e) {
            console.log('Error Fetch: ', e);
        }
    };

    return (
        <div className='app'>
            <h1>
                <u>Food Recipe</u> 🍖
            </h1>
            <div className='app_searchForm'>
                <input
                    type='text'
                    placeholder='Ingredient'
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    autoComplete='false' //off?
                    className='app__search'
                />
                {/* Health Label Chooser */}
                <select name='heathLabel' className='app__Labels' label='Health'>
                    {health.map((item) => {
                        if (item === '') {
                            return (
                                <option
                                    value='Optional Health'
                                    key={item}
                                    onClick={() => {
                                        setHealthLabel(item);
                                    }}>
                                    Optional Health
                                </option>
                            );
                        }
                        return (
                            <option
                                value={item}
                                key={item}
                                onClick={() => {
                                    setHealthLabel(item);
                                }}>
                                {item}
                            </option>
                        );
                    })}
                </select>

                {/* Cousin Label Chooser */}
                <select name='cousinLabel' className='app__Labels' label='Cousin'>
                    {cousin.map((item) => {
                        if (item === '') {
                            return (
                                <option
                                    value='Optional Cousin'
                                    key={item}
                                    onClick={() => {
                                        setCousinLabel(item);
                                    }}>
                                    Optional Cousin
                                </option>
                            );
                        }
                        return (
                            <option
                                value={item}
                                key={item}
                                onClick={() => {
                                    setCousinLabel(item);
                                }}>
                                {item}
                            </option>
                        );
                    })}
                </select>
                <input
                    type='submit'
                    value='Get Recipe'
                    className='app__submit'
                    onClick={getInfo}
                />
            </div>
            {/* Recipes Card Display */}
            <div className='app_recipes'>
                {recipes.map((each) => {
                    return <Card recipe={each} key={each.recipe.label}/>;
                })}
            </div>
        </div>
    );
}

export default App;
