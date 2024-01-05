import React from "react";
import { ButtonsLabel } from "./ButtonsLabel";
import { FormsGeneral } from "./FormsGeneral";
import { FormsPrimarySelect } from "./FormsPrimarySelect";
import { FormsPrimarySelectWrapper } from "./FormsPrimarySelectWrapper";
import "./login_style.css";

export const Screen = () => {
    return (
        <div className="screen">
            <div className="div-2">
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src="assets/Free%20Feather%20Flag%20Mockup%201.png" />
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Еще нет аккаунта?</div>
                    <div className="create-an-account">Регистрация</div>
                </div>
                <div className="group">
                    <div className="group-2">
                        <FormsPrimarySelect
                            className="forms-primary-select-active-onlight"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text=""
                            text1="design@xasick.ru"
                            text2="Электронная почта"
                        />
                        <FormsPrimarySelectWrapper
                            className="forms-primary-select-resting-onlight"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text="Введите пароль"
                            text1=""
                            text2="Пароль"
                        />
                        <ButtonsLabel
                            className="buttons-px-label"
                            divClassName="buttons-label-instance"
                            overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                            text="Войти"
                        />
                        <FormsGeneral className="forms-general-checkbox-resting-onlight" text="Запомнить меня" />
                        <div className="recover-password">Забыли пароль?</div>
                    </div>
                    <div className="sign-in">Авторизация</div>
                    <p className="enter-your-account-d">Войдите в аккаунт используя электронную почту</p>
                </div>
                <img className="element" alt="Element" src="assets/Слой%203.svg" />
            </div>
        </div>
    );
};
