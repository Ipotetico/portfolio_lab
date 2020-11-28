import React, { useState } from "react";

import Button from "../../Header/Button";

export const BoxAddress = ({
    formula,
    handleAdd,
    handleSubtr,
    handleStepThree,
}) => {
    return (
        <>
            <div className="input--container">
                <h1 style={{ fontWeight: 600 }} className="input--headline--">
                    Podaj adres oraz termin odbioru rzecz przez kuriera
                    </h1>
                <div className="container--address">
                    <div className="container--address--single">
                        <h1 style={{ fontSize: '0.7vw', fontWeight: 600 }} >Adres odbioru:</h1>

                        <label htmlFor="street">
                            <span>Ulica</span>
                            <input type="text" name="street" id="street" />
                        </label>

                        <label htmlFor="town">
                            <span>Miasto</span>
                            <input type="text" name="town" id="town" />
                        </label>

                        <label htmlFor="zip">
                            <span>Kod <br /> pocztowy</span>
                            <input id="zip" name="zip" type="text" inputMode="numeric" pattern=""></input>
                        </label>

                        <label htmlFor="phone">
                            <span>Nr <br /> telefonu</span>
                            <input type="tel" name="phone" id="phone" />
                        </label>

                    </div>
                    <div className="container--address--single">
                        <h1 style={{ fontSize: '0.7vw', fontWeight: 600 }} >Termin odbioru:</h1>

                        <label htmlFor="date">
                            <span>Data</span>
                            <input type="date" name="date" id="date" />
                        </label>

                        <label htmlFor="hour">
                            <span>Godzina</span>
                            <input type="time" name="hour" id="hour" />
                        </label>

                        <label htmlFor="msg">
                            <span>Uwagi <br /> dla<br /> kuriera</span>
                            <textarea name=",sg" id="msg" cols="25" rows="8"></textarea>
                        </label>



                    </div>
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
                {formula < 5 && (
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

export default BoxAddress;
