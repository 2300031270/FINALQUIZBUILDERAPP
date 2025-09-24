import React, { useState } from "react";

const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Kolkata", "Chennai", "New Delhi", "Mumbai"],
    answer: 2,
    hint: "It is also called the political capital of India.",
  },
  {
    question: "Which river is known as the 'Ganga' in India?",
    options: ["Brahmaputra", "Godavari", "Ganges", "Yamuna"],
    answer: 2,
    hint: "It is considered the holiest river in India.",
  },
  {
    question: "Which Indian state is known as the 'Land of Five Rivers'?",
    options: ["Rajasthan", "Punjab", "Haryana", "Gujarat"],
    answer: 1,
    hint: "It is located in north-west India.",
  },
  {
    question: "The Taj Mahal is located in which city?",
    options: ["Lucknow", "Delhi", "Agra", "Jaipur"],
    answer: 2,
    hint: "It is in Uttar Pradesh.",
  },
  {
    question: "Who was the first Prime Minister of India?",
    options: [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Sardar Vallabhbhai Patel",
      "B. R. Ambedkar",
    ],
    answer: 0,
    hint: "He was known as Chacha Nehru.",
  },
  {
    question:
      "Which of the following Indian states shares a border with Pakistan?",
    options: ["Madhya Pradesh", "Maharashtra", "Andhra Pradesh", "Punjab"],
    answer: 3,
    hint: "It is famous for Golden Temple.",
  },
  {
    question:
      "The Indian National Anthem, 'Jana Gana Mana', was originally composed in which language?",
    options: ["Sanskrit", "English", "Hindi", "Bengali"],
    answer: 3,
    hint: "It is Rabindranath Tagore’s language.",
  },
  {
    question: "Which mountain range separates India from China and Nepal?",
    options: [
      "The Satpura Range",
      "The Western Ghats",
      "The Aravalli Range",
      "The Himalayas",
    ],
    answer: 3,
    hint: "It is the world’s highest mountain range.",
  },
  {
    question: "Which Indian city is famous as the 'Pink City'?",
    options: ["Udaipur", "Jodhpur", "Jaipur", "Pushkar"],
    answer: 2,
    hint: "It is the capital of Rajasthan.",
  },
  {
    question: "Which state is the largest in India by area?",
    options: ["Rajasthan", "Maharashtra", "Madhya Pradesh", "Uttar Pradesh"],
    answer: 0,
    hint: "It is famous for deserts.",
  },
];

export default function WriteQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleOptionClick = (index) => {
    setSelected(index);
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowHint(false);
    setCurrentQ((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setSelected(null);
    setShowHint(false);
    setCurrentQ((prev) => prev - 1);
  };

  const current = quizData[currentQ];

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        <b>Quiz {currentQ + 1}/{quizData.length}</b>
      </h3>

      <div className="card p-3 mt-3 shadow">
        <h5>{current.question}</h5>

        {/* Options container with flexbox */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          {current.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => handleOptionClick(i)}
              style={{
                flex: "1 1 22%",
                marginRight: i !== current.options.length - 1 ? "10px" : "0",
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: "15px",
                cursor: selected === null ? "pointer" : "default",
                textAlign: "center",
                userSelect: "none",
                backgroundColor:
                  selected !== null
                    ? i === current.answer
                      ? "lightgreen"
                      : selected === i
                      ? "salmon"
                      : "white"
                    : "white",
                color: selected !== null && i === current.answer ? "black" : "black",
                fontWeight: "bold",
                boxShadow:
                  selected === i
                    ? "0 0 10px rgba(0,0,0,0.3)"
                    : "none",
                transition: "background-color 0.3s ease",
              }}
            >
              {String.fromCharCode(65 + i)}
              <br />
              {opt}
            </div>
          ))}
        </div>

        {showHint && (
          <p style={{ color: "blue", marginTop: "10px" }}>
            💡 Hint: {current.hint}
          </p>
        )}

        <div className="d-flex justify-content-start mt-3" style={{ gap: "10px" }}>
          <button
            className="btn btn-danger"
            onClick={prevQuestion}
            disabled={currentQ === 0}
          >
            Back
          </button>

          <button
            className="btn btn-danger"
            onClick={() => setShowHint(true)}
          >
            Show Hint
          </button>

          {currentQ < quizData.length - 1 ? (
            <button className="btn btn-danger" onClick={nextQuestion}>
              Next
            </button>
          ) : (
            <button className="btn btn-success" disabled>
              Quiz Completed 🎉
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
