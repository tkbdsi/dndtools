import React, {useState, useEffect} from 'react';

const CharacterSheet = () => {

  const [charName, setCharName] = useState("");
  const [className, setClassName] = useState("");
  const [level, setLevel] = useState(1);
  const [background, setBackground] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [race, setRace] = useState("");
  const [alignment, setAlignment] = useState("");
  const [exp, setExp] = useState(0);

  const [strScore, setStrcore] = useState(10);
  const [dexScore, setDexScore] = useState(10);
  const [conScore, setConScore] = useState(10);
  const [intScore, setIntScore] = useState(10);
  const [wisScore, setWisScore] = useState(10);
  const [chaScore, setChaScore] = useState(10);

  return (
    <main className="container">
        <section>
          <label className="label" htmlFor="charName">Character Name</label>
          <input className="input" type="text" value={charName} name="charName" />
        </section>
        <section>
          <label className="label" htmlFor="className">Class</label>
          <input className="input" type="text" value={className} name="className" />

          <label className="label" htmlFor="level">Level</label>
          <input className="input" type="number" value={level} min={1} max={20} step={1} name="level" onChange={(e) => setLevel(e.target.value)}/>

          <label className="label" htmlFor="background">Background</label>
          <input className="input" type="text" value={background} name="background" />

          <label className="label" htmlFor="playerName">Player Name</label>
          <input className="input" type="text" value={playerName} name="playerName" />

          <label className="label" htmlFor="race">Race</label>
          <input className="input" type="text" value={race} name="race" />

          <label className="label" htmlFor="alignment">Alignment</label>
          <input className="input" type="text" value={alignment} name="alignment" />

          <label className="label">Experience Points</label>
          <input className="input" type="number" value={exp} min={0} name="exp" onChange={(e) => setExp(e.target.value)}/>
        </section>
        <section>
          <label className="label" htmlFor="strScore">Strength</label>
          <input className="input" type="number" value={strScore} name="strScore" />
          <label className="label" htmlFor="dexScore">Dexterity</label>
          <input className="input" type="number" value={dexScore} name="dexScore" />
          <label className="label" htmlFor="conScore">Constitution</label>
          <input className="input" type="number" value={conScore} name="conScore" />
          <label className="label" htmlFor="intScore">Intelligence</label>
          <input className="input" type="number" value={intScore} name="intScore" />
          <label className="label" htmlFor="wisScore">Wisdom</label>
          <input className="input" type="number" value={wisScore} name="wisScore" />
          <label className="label" htmlFor="chaScore">Charisma</label>
          <input className="input" type="number" value={chaScore} name="chaScore" />
        </section>
    </main>
  )
}

export default CharacterSheet;