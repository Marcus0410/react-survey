import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
    const [open, setOpen] = useState(false); //Ignore this state

    const [answersList, setAnswersList] = useState([])

    return (
        <main className="survey">
            <section className={`survey__list ${open ? "open" : ""}`}>
                <h2>Answers list</h2>
                <AnswersList answersList={answersList} />
            </section>
            <section className="survey__form">
                <Form answersList={answersList} setAnswersList={setAnswersList} />
            </section>
        </main>
    );
}

export default Survey;
