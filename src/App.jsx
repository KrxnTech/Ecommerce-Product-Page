import './App.css'
import Navbar from "./Component/Navbar-Component/Navbar.jsx"
import Heading from "./Component/Heading-Component/Heading.jsx"
import ProductCard from './Component/Products-Box/Product-Card.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Heading />
      <div className="PARENTOP">
        <ProductCard
          img="https://i.pinimg.com/originals/44/fa/a6/44faa65bc57e20d1c8e4abb3e72c0429.jpg"
          Character="L " Role="Detective"
          Description="L is a reclusive genius detective with unmatched logic bizarre habits and zero social polish
          He sacrifices comfort reputation and basic human posture just to corner criminals "
          Abilities={
            [<li>Logic</li>,
            <li>Resoning</li>,
            <li>Observation</li>,
            <li>Intuition</li>,
            <li>Probability</li>]
          }
          SeriesStartAge = {24}
        />

        <ProductCard
          img="https://www.nicepng.com/png/detail/53-531474_kira-death-note.png"
          Character="Light Yagami "
          Role="Killer"
          Description="Light Yagami is a brilliant student who turns into a god-complex dictator once given absolute power
          He believes justice means ruling the world from the shadows "
          Abilities={
            [<li>Strategic Intelligence</li>,
            <li>Advanced Manipulation</li>,
            <li>Long-Term Planning</li>,
            <li>Deception Mastery</li>,
            <li>Probability Exploitation</li>]
          }
          SeriesStartAge = {17}
          SeriesEndAge = {26}
        />

        <ProductCard
          img="https://cdn.rafled.com/anime-icons/images/8cfeef800f63a3e908c96e02d964c9b952dc8c748bc88873efbf7af0cbb52f1b.jpg"
          Character="Misa Amane "
          Role="2nd Shinigami"
          Description="Misa Amane is a famous idol driven by obsession emotion and blind loyalty to Light
          Not dumb just dangerously devoted which somehow makes her more terrifying"
          Abilities={
            [<li>Emotional Intelligence</li>,
            <li>Social Manipulation</li>,
            <li>Adaptability</li>,
            <li>Devotion-Based Decision Making</li>,
            <li>Risk Acceptance</li>]
          }
          SeriesStartAge = {19}
        />

        <ProductCard
          img="https://i.pinimg.com/736x/f4/64/f9/f464f92886c9bb5966818715840522a7.jpg"
          Character="Ryuk "
          Role="1st Shinigami"
          Description="Ryuk is a bored death god who drops chaos into the human world for entertainment.
          He does not care who dies as long as it stays amusing and apples keep coming"
          Abilities={
            [<li>Detached Observation</li>,
            <li>Rule Awareness</li>,
            <li>Psychological Insight</li>,
            <li>Chaos Induction</li>,
            <li>Non-Interference Strategy</li>]
          }
        />
      </div>
    </>
  )
}

export default App
