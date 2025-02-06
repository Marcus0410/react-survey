import { useState } from "react"

const initialValues = {
    color: "",
    spendTime: [],
    review: "",
    username: "",
    email: ""
}


export default function Form(props) {
    const { answersList, setAnswersList } = props
    const [userData, setUserData] = useState(initialValues)

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputChecked = event.target.checked;

        if (inputName === "color") {
            setUserData({ ...userData, color: inputValue })
        } else if (inputName === "spendTime") {
            // if checked, add to data
            if (inputChecked) {
                setUserData({ ...userData, spendTime: [...userData.spendTime, inputValue] })
            } else {
                setUserData({ ...userData, spendTime: userData.spendTime.filter((item) => item !== inputValue) })
            }
        } else if (inputName === "review") {
            setUserData({ ...userData, review: inputValue })
        } else if (inputName === "username") {
            setUserData({ ...userData, username: inputValue })
        } else if (inputName === "email") {
            setUserData({ ...userData, email: inputValue })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()

        setAnswersList([...answersList, userData]) // save submitted form to answersList
        setUserData(initialValues) // reset form
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input id="color-one" type="radio" name="color" value="1" checked={userData.color === "1"} onChange={handleChange} /><label
                            htmlFor="color-one"
                        >1</label
                        >
                    </li>
                    <li>
                        <input id="color-two" type="radio" name="color" value="2" checked={userData.color === "2"} onChange={handleChange} /><label
                            htmlFor="color-two"
                        >2</label
                        >
                    </li>
                    <li>
                        <input id="color-three" type="radio" name="color" value="3" checked={userData.color === "3"} onChange={handleChange} /><label
                            htmlFor="color-three"
                        >3</label
                        >
                    </li>
                    <li>
                        <input id="color-four" type="radio" name="color" value="4" checked={userData.color === "4"} onChange={handleChange} /><label
                            htmlFor="color-four"
                        >4</label
                        >
                    </li>
                </ul>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label
                        ><input
                                name="spendTime"
                                type="checkbox"
                                value="swimming"
                                checked={userData.spendTime.includes("swimming")}
                                onChange={handleChange}
                            />Swimming</label
                        >
                    </li>
                    <li>
                        <label
                        ><input name="spendTime" type="checkbox" value="bathing" checked={userData.spendTime.includes("bathing")} onChange={handleChange} />Bathing</label
                        >
                    </li>
                    <li>
                        <label
                        ><input
                                name="spendTime"
                                type="checkbox"
                                value="chatting"
                                checked={userData.spendTime.includes("chatting")}
                                onChange={handleChange}
                            />Chatting</label
                        >
                    </li>
                    <li>
                        <label
                        ><input name="spendTime" type="checkbox" value="noTime" checked={userData.spendTime.includes("noTime")} onChange={handleChange} />I don't like to
                            spend time with it</label
                        >
                    </li>
                </ul>
            </div>
            <label
            >What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                value={userData.review}
            ></textarea></label
            ><label
            >Put your name here (if you feel like it):<input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleChange}
                /></label
            ><label
            >Leave us your email pretty please??<input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                /></label
            ><input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

    )
}
