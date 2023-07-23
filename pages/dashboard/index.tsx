import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout";
import { Button, Modal } from "@/components/elements";
import { QUESTIONS } from "@/constants";
import { TradingMarket } from "@/components/pages/dashboard";

const Dashboard = () => {
  const [createStrategyModal, setCreateStrategyModal] = useState(false);
  const [questions, setQuestions] = useState(QUESTIONS);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [strategyAccepted, setStrategyAccepted] = useState(false);
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

  const createNewStrategy = () => {
    setQuestions(QUESTIONS);
    setAnswered(false);
    setCurrentQuestionIndex(0);
    setCreateStrategyModal(true);
    setStrategyAccepted(false);
  };

  return (
    <DashboardLayout activeTab="Home">
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center m-auto">
        {answered ? (
          <div className="flex flex-col gap-8 py-8 max-w-[1280px] mx-auto">
            <p className="font-bold text-white text-3xl mb-4">Your Answers</p>
            <div className="flex flex-col gap-4">
              {questions?.map((item, index) => (
                <div className="flex flex-col gap-0" key={index}>
                  <p className="text-lg font-medium text-white">
                    <span className="font-medium">Question: </span>
                    {item.question}
                  </p>
                  <p className="text-base text-white">
                    <span className="font-medium">Answer: </span>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-lg lg:text-2xl font-bold">
              Base on your answers, we understand that you want:
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
              mi sit amet urna mattis luctus. Maecenas eu massa id nunc
              fermentum finibus eu eu risus. Suspendisse cursus in eros ut
              convallis. Nunc egestas justo in turpis consectetur, eu maximus
              lorem commodo. Etiam ut risus eu nulla elementum semper eu a urna.
              Curabitur tristique tincidunt est, ac varius risus eleifend a.
              Integer id odio justo. Nullam porttitor nibh vel sem congue
              auctor. Ut hendrerit dolor eu fringilla consectetur. Cras iaculis
              erat metus, ornare scelerisque arcu venenatis tincidunt.
              Suspendisse lobortis ornare eros sed tempus
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-lg lg:text-2xl font-bold">
                Do you want to continue or create new strategy again?
              </p>
              <div className="flex flex-row gap-4">
                <Button
                  text="Continue"
                  onClick={() => {
                    setAnswered(false);
                    setStrategyAccepted(true);
                  }}
                />

                <Button
                  text="Create New Strategy"
                  onClick={createNewStrategy}
                />
              </div>
            </div>
          </div>
        ) : strategyAccepted ? (
          <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-4">
            <p className="text-lg lg:text-2xl font-bold">
              We propose these according to your created strategy:
            </p>
            <TradingMarket />
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
        className="w-[90%] lg:w-1/3 p-4 lg:p-8"
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
                  placeholder={question?.placeholder ?? "Enter"}
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
