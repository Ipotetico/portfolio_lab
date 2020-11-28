import React, { useState } from "react";
import Button from "../../Header/Button";

export const BoxSummary = ({
    numberOfBags,
    stepOne,
    location,
    stuffToGive,
    formula,
    handleAdd,
    handleSubtr,
}) => {
    return (
        <>
            <div className="input--container">
                <h1 style={{ fontWeight: 600 }} className="input--headline--">
                    Podsumowanie Twojej darowizny</h1>
                <div className="container--address--single">
                    <h1 style={{ marginBottom: "1vw", fontSize: '0.7vw', fontWeight: 600 }} >Oddajesz:</h1>
                    <div className="boxing">
                        <img className="image" src={process.env.PUBLIC_URL + "/img/koszulina.svg"} alt="" />
                        <h1 style={{ marginBottom: "1vw", fontSize: '0.6vw', fontWeight: 600 }}>
                            {numberOfBags} worków {stepOne}</h1></div>
                    <h1 style={{ marginBottom: "1vw", fontSize: '0.6vw', fontWeight: 600 }}>Z: {location}go</h1>
                </div>
            </div>


            <div className="buttons">
                {formula > 1 && (
                    <Button
                        formula={formula}
                        type="submit"
                        func={handleSubtr}
                        text="Cofnij"
                    />
                )}
                {formula < 4 && (
                    <Button
                        formula={formula}
                        type="submit"
                        func={handleAdd}
                        text="Dalej"
                    />
                )}
            </div>
        </>
    );
};

export default BoxSummary;
