import React from "react";
import { ButtonsLabel } from "./ButtonsLabel";
import { FormsPrimarySelect } from "./FormsPrimarySelect";
import { FormsPrimarySelectWrapper } from "./FormsPrimarySelectWrapper";
import "./registration.css";

export const Screen = () => {
    return (
        <div className="screen">
            <div className="div-2">
                <div className="overlap">
                    <div className="mask" />
                    <img className="free-feather-flag" alt="Free feather flag" src="assets/Free%20Feather%20Flag%20Mockup%201.png" />
                </div>
                <div className="link">
                    <div className="you-don-t-have-an-ac">Уже есть аккаунт?</div>
                    <div className="create-an-account">Войти</div>
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
                        <FormsPrimarySelectWrapper
                            className="forms-primary-select-resting-onlight-instance"
                            iconClassName="design-component-instance-node"
                            overlapGroupClassName="forms-primary-select-instance"
                            text="Введите пароль"
                            text1=""
                            text2="Повторите пароль"
                        />
                        <div className="group-3">
                            <ButtonsLabel
                                className="buttons-px-label"
                                divClassName="buttons-label-instance"
                                overlapGroupClassName="buttons-14px-label-filled-active-onlight"
                                text="Регистрация"
                            />
                            <div className="forms-general">
                                <div className="shape-wrapper">
                                    <img className="shape" alt="Shape" src="assets/Shape.svg" />
                                </div>
                                <p className="title">
                                    <span className="span">Я прочитал и согласен с </span>
                                    <span className="text-wrapper-2">политикой обработки персональных данных</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="sign-in">Регистрация</div>
                    <p className="enter-your-account-d">Пройдите регистрацию используя электронную почту</p>
                </div>
                <img className="element" alt="Element" src="assets/Слой%203.svg" />
            </div>
        </div>
    );
};
