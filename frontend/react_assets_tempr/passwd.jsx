import React from "react";
import { ButtonsLabel } from "./ButtonsLabel";
import { FormsPrimarySelect } from "./FormsPrimarySelect";
import "./style.css";

export const DivWrapper = () => {
    return (
        <div className="div-wrapper">
            <div className="div-2">
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src="free-feather-flag-mockup-1.png" />
                </div>
                <img className="element" alt="Element" src="3.png" />
                <div className="group">
                    <ButtonsLabel
                        className="buttons-px-label"
                        divClassName="buttons-label-instance"
                        overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                        text="Отправить письмо"
                    />
                    <FormsPrimarySelect
                        className="forms-primary-select-active-onlight"
                        iconClassName="forms-primary-select-active-onlight-instance"
                        overlapGroupClassName="forms-primary-select-instance"
                        text=""
                        text1="design@xasick.ru"
                        text2="Электронная почта"
                    />
                    <div className="forgot-password">Забыли пароль?</div>
                    <div className="flexcontainer">
                        <p className="text">
                            <span className="text-wrapper">
                                Введите свой e-mail ниже, и вы получите письмо с инструкцией
                                <br />
                            </span>
                        </p>
                        <p className="text">
                            <span className="text-wrapper">как сбросить пароль.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
