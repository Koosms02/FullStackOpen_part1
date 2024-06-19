import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      'anecdote': 'If it hurts, do it more often.',
      'votes': 0
    },
    {
      'anecdote': 'Adding manpower to a late software project makes it later!',
      'votes': 0
    },
    {
      'anecdote': 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'votes': 0
    },
    {
      'anecdote': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'votes': 0
    },
    {
      'anecdote': 'Premature optimization is the root of all evil.',
      'votes': 0
    },
    {
      'anecdote': 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      'votes': 0
    },
    {
      'anecdote': 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
      'votes': 0
    },
    {
      'anecdote': 'The only way to go fast, is to go well.',
      'votes': 0
    }
  ])

  const handleVote = (index) => {
    const newAnecdotes = anecdotes.map((anecdote, i) => {
      if (i === index) {
        return { ...anecdote, votes: anecdote.votes + 1 };
      }
      return anecdote;
    });
    setAnecdotes(newAnecdotes);
  };



  const [selected, setSelected] = useState(0)

  const AnecdoteOfTheDayVotes = () => {


    return (
      <>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected].anecdote} </p>
        <p>has {anecdotes[selected].votes} votes</p>
        <div>
          <button onClick={() => handleVote(selected)}>vote</button>
          <button onClick={() => {
            AnecdoteWithTopVotes()
            let x = Math.floor((Math.random() * anecdotes.length));
            setSelected(x)
          }}>next anecdote</button>
        </div>
      </>
    )

  }

  const AnecdoteWithTopVotes = () => {
    if (anecdotes.length === 0) {
      return null;
    }

    // Find the maximum number of votes
    const maxVotes = Math.max(...anecdotes.map(anecdote => anecdote.votes));

    // Filter anecdotes with the maximum number of votes
    const topAnecdotes = anecdotes.filter(anecdote => anecdote.votes === maxVotes);

    // If there's exactly one anecdote with the highest votes, return it
    if (topAnecdotes.length === 1) {
      return (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{topAnecdotes[0].anecdote}</p>
          <p>has {topAnecdotes[0].votes} votes</p>
        </div>
      );
    }

    // If there's no anecdote or more than one with the highest votes, return null
    return null;
  };

  return (
    <div>

      <AnecdoteOfTheDayVotes />
      <AnecdoteWithTopVotes />

    </div>
  )
}

export default App