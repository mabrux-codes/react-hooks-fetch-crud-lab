import React from "react";

function QuestionItem({ question, onDelete }) {// destructuring question and onDelete props
  // destructuring question prop
  if (!question || !Array.isArray(question.answers)) {// check if question is null or undefined
    return null; // end program
  }

  const { id, prompt, answers, correctIndex } = question;// destructuring question prop
 
  const options = answers.map((answer, index) => (// mapping through answers array
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete question");
        return response.json();
      })
      .then(() => {
        console.log("Deleted!");
        if (onDelete) onDelete(id); // notify parent
      })
      .catch((error) => console.error("Delete error:", error));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;