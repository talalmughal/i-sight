import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import dynamic from "next/dynamic";
import { Button, Modal } from "@/components/elements";
import { QUESTIONS } from "@/constants";

const Graph = dynamic(() => import("@/components/pages/dashboard/Graph"), {
  ssr: false,
});

const Dashboard = () => {
  const [createStrategyModal, setCreateStrategyModal] = useState(false);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [error, setError] = useState("");

  const handleCLoseModal = () => {
    setCreateStrategyModal(false);
  };

  const handleAnswerChange = (e: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[currentQuestionIndex].answer = e.target.value;
    setQuestions(updatedQuestions);
    setError("");
  };

  const handleNextQuestion = () => {
    if (validateAnswer()) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const validateAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.options) {
      if (!currentQuestion.answer) {
        setError("Please select an option before proceeding.");
        return false;
      }
    } else {
      if (!currentQuestion.answer.trim()) {
        setError("Please provide an answer before proceeding.");
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateAnswer()) {
      console.log(questions);
      setCreateStrategyModal(false);
      setAnswered(true);
    }
  };

  return (
    <DashboardLayout activeTab="Home">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center m-auto">
        {answered ? (
          <div className="flex flex-col gap-4">
            <p className="font-bold text-white text-3xl mb-4">Your Answers</p>
            {questions?.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <p className="text-lg font-medium text-white">
                  <span className="font-bold">Question: </span>
                  {item.question}
                </p>
                <p className="text-base text-white">
                  <span className="font-bold">Answer: </span>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <Button
              text="Create Strategy"
              onClick={() => setCreateStrategyModal(true)}
            />

            <p className="font-medium">OR</p>

            <Button text="Create Custom Strategy" />
          </>
        )}
      </div>
      <Modal
        open={createStrategyModal}
        handleClose={handleCLoseModal}
        className="w-[90%] lg:w-1/3"
        title="Create Strategy"
      >
        <div className="w-full flex flex-col gap-4 text-white">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`${
                index === currentQuestionIndex ? "block" : "hidden"
              } flex flex-col !gap-2`}
            >
              <p className="my-2">{question.question}</p>
              {question.options ? (
                <select
                  value={question.answer}
                  onChange={handleAnswerChange}
                  className="bg-black w-full p-2"
                  style={{ borderRadius: "0.125rem !important" }}
                >
                  <option hidden value="" className="bg-black">
                    Select an option
                  </option>
                  {question.options.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="text-white bg-black"
                    >
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={question.type ?? "text"}
                  value={question.answer}
                  onChange={handleAnswerChange}
                  className="text-white bg-black w-full p-2 rounded-sm"
                />
              )}
            </div>
          ))}
          {error ? <p className="text-red-500">{error}</p> : null}

          <div className="flex flex-row gap-4 ml-auto mt-8">
            {currentQuestionIndex > 0 && (
              <Button
                text="Prev"
                className="!h-8 !text-xs"
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
              />
            )}

            {currentQuestionIndex < QUESTIONS.length - 1 ? (
              <Button
                className="!h-8 !text-xs"
                text="Next"
                onClick={handleNextQuestion}
              />
            ) : (
              <Button
                className="!h-8 !text-xs"
                text="Submit"
                onClick={handleSubmit}
              />
            )}
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
