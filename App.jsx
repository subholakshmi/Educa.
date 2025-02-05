import React, { useState } from 'react';
import './App.css';

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the primary goal of waste management?",
      options: [
        { id: "a", value: "To generate more waste", correct: false },
        { id: "b", value: "To reduce waste generation", correct: true },
        { id: "c", value: "To ignore waste altogether", correct: false },
        { id: "d", value: "To dispose of waste irresponsibly", correct: false }
      ]
    },
    {
      id: 2,
      question: "Which of the following is an example of source reduction?",
      options: [
        { id: "a", value: "Using single-use plastic bags", correct: false },
        { id: "b", value: "Purchasing products with excessive packaging", correct: false },
        { id: "c", value: "Bringing your own reusable shopping bags", correct: true },
        { id: "d", value: "Throwing away recyclable materials", correct: false }
      ]
    },
    {
      id: 3,
      question: "What is the '3Rs' approach in waste management?",
      options: [
        { id: "a", value: "Refill, Reuse, Recycle", correct: false },
        { id: "b", value: "Reduce, Recycle, Regenerate", correct: false },
        { id: "c", value: "Reuse, Repurpose, Recycle", correct: false },
        { id: "d", value: "Reduce, Reuse, Recycle", correct: true }
      ]
    },
    {
      id: 4,
      question: "What does composting involve?",
      options: [
        { id: "a", value: "Burning waste materials", correct: false },
        { id: "b", value: "Recycling plastic bottles", correct: false },
        { id: "c", value: "Converting organic waste into nutrient-rich soil", correct: true },
        { id: "d", value: "Dumping waste into landfills", correct: false }
      ]
    },
    {
      id: 5,
      question: "Which of the following is a benefit of recycling?",
      options: [
        { id: "a", value: "Increasing resource consumption", correct: false },
        { id: "b", value: "Reducing energy usage", correct: true },
        { id: "c", value: "Adding to landfill space", correct: false },
        { id: "d", value: "Increasing pollution", correct: false }
      ]
    },
    {
      id: 6,
      question: "What is the purpose of hazardous waste management?",
      options: [
        { id: "a", value: "To promote hazardous waste generation", correct: false },
        { id: "b", value: "To ensure safe handling and disposal of hazardous materials", correct: true },
        { id: "c", value: "To encourage the release of hazardous substances into the environment", correct: false },
        { id: "d", value: "To ignore the risks associated with hazardous waste", correct: false }
      ]
    },
    {
      id: 7,
      question: "What does the term 'landfill diversion' refer to?",
      options: [
        { id: "a", value: "Sending waste materials to be buried in landfills", correct: false },
        { id: "b", value: "Diverting waste away from landfills towards recycling or composting", correct: true },
        { id: "c", value: "Encouraging waste generation in landfills", correct: false },
        { id: "d", value: "Building more landfills to accommodate waste", correct: false }
      ]
    },
    {
      id: 8,
      question: "Which of the following is NOT a method of waste disposal?",
      options: [
        { id: "a", value: "Incineration", correct: false },
        { id: "b", value: "Landfilling", correct: false },
        { id: "c", value: "Recycling", correct: true },
        { id: "d", value: "Composting", correct: false }
      ]
    },
    {
      id: 9,
      question: "What does the term 'circular economy' refer to in the context of waste management?",
      options: [
        { id: "a", value: "A linear system where waste is generated and discarded", correct: false },
        { id: "b", value: "A system where waste materials are recycled and reused in closed-loop cycles", correct: true },
        { id: "c", value: "A system where waste is dumped into the ocean", correct: false },
        { id: "d", value: "A system where waste is burned for energy", correct: false }
      ]
    },
    {
      id: 10,
      question: "How can individuals contribute to waste reduction efforts?",
      options: [
        { id: "a", value: "By using single-use plastic products", correct: false },
        { id: "b", value: "By avoiding recycling", correct: false },
        { id: "c", value: "By practicing reuse and recycling habits", correct: true },
        { id: "d", value: "By increasing consumption habits", correct: false }
      ]
    },
  ];

  const handleOptionChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleSubmit = () => {
    let userScore = 0;
    questions.forEach(question => {
      if (answers[question.id] === undefined) return; // Skip unanswered questions
      const selectedOption = question.options.find(option => option.id === answers[question.id]);
      if (selectedOption.correct) {
        userScore++;
      }
    });
    setScore(userScore);
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Waste Management Quiz</h1>
      {questions.map((question) => (
        <div className="question" key={question.id}>
          <p>{question.question}</p>
          <div className="options">
            {question.options.map((option) => (
              <label key={option.id}>
                <input
                  type="radio"
                  name={`q${question.id}`}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => handleOptionChange(question.id, option.id)}
                />
                {option.value}
              </label>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {submitted && <p>Your score: {score}/{questions.length}</p>}
    </div>
  );
}

export default App;
