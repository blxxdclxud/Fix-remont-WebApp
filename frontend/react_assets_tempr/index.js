// eslint-disable-next-line no-unused-vars
import React from "react";
import { AddLine } from "./AddLine";
import { BubbleChartFill } from "./BubbleChartFill";
import { ButtonsIcon } from "./ButtonsIcon";
import { CustomerService2Fill } from "./CustomerService2Fill";
import { FileList2Fill } from "./FileList2Fill";
import { MapPin2Line } from "./MapPin2Line";
import { Ruler2Line } from "./Ruler2Line";
import { User3Fill } from "./User3Fill";
import "./style.css";

export const Screen = () => {
    return (
        <div className="screen">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="group">
                            <div className="overlap">
                                <div className="rectangle" />
                                <img className="img" alt="Group" src="assets/Group_icon_index.svg" />
                                <div className="user-menu">
                                    <div className="navigation-web">
                                        <img className="img-2" alt="face_item" src="assets/face_item.svg" />
                                    </div>
                                </div>
                                <div className="overview">
                                    <div className="overlap-group-wrapper">
                                        <div className="icon-wrapper">
                                            <div className="text-wrapper"></div>
                                        </div>
                                    </div>
                                    <div className="div-wrapper">
                                        <div className="div"></div>
                                    </div>
                                    <div className="remix-icons-fill-wrapper">
                                        <BubbleChartFill className="remix-icons-fill" color="white" />
                                    </div>
                                    <div className="user-3-fill-wrapper">
                                        <User3Fill className="remix-icons-fill" />
                                    </div>
                                    <div className="file-list-2-fill-wrapper">
                                        <FileList2Fill className="remix-icons-fill" color="white" />
                                    </div>
                                </div>
                                <div className="customer-service-2-fill-wrapper">
                                    <CustomerService2Fill className="remix-icons-fill" color="white" />
                                </div>
                            </div>
                        </div>
                        <div className="navigation-web-top">
                            <img className="line-h" alt="Line h" src="assets/bg%20hover.svg" />
                            <div className="buttons-px-icon">
                                <div className="link-wrapper">
                                    <div className="link">
                                        <AddLine className="icon-instance-node" />
                                        <div className="lable">Новый заказ</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bell">
                                <div className="overlap-2">
                                    <ButtonsIcon
                                        className="buttons-12px-icon-transparent-active-onlight"
                                        iconClassName="buttons-icon-instance"
                                        text=""
                                    />
                                    <div className="circle" />
                                </div>
                            </div>
                            <ButtonsIcon className="buttons-px-icon-instance" iconClassName="buttons-icon-instance" text="" />
                            <div className="title">Главная</div>
                        </div>
                        <div className="welcome-henry-wrapper">
                            <div className="welcome-henry">Добрый день, Азат!</div>
                        </div>
                        <div className="group-2">
                            <div className="report">
                                <div className="overlap-3">
                                    <div className="buttons-icon-2">
                                        <div className="overlap-group-2">
                                            <div className="link-2">
                                                <div className="lable-2">Вывести средства</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="buttons-icon-3">
                                        <div className="overlap-group-2">
                                            <div className="link-3">
                                                <div className="lable-2">Потратить</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-3">
                                        <p className="p">Вы заработали на этой неделе</p>
                                        <div className="price">43 400 руб.</div>
                                    </div>
                                    <img className="graph" alt="Graph" src="graph.svg" />
                                </div>
                            </div>
                            <div className="title-2">Мой бонус</div>
                        </div>
                        <div className="frame">
                            <img className="mask" alt="Mask" src="mask.png" />
                            <img className="mask" alt="Mask" src="image.png" />
                            <img className="mask" alt="Mask" src="mask-3.png" />
                            <img className="mask" alt="Mask" src="mask-2.png" />
                        </div>
                    </div>
                    <div className="group-4">
                        <div className="title-2">Мои заказы</div>
                        <div className="projects-item-v">
                            <div className="overlap-4">
                                <div className="buttons-icon-4">
                                    <div className="overlap-group-2">
                                        <div className="link-4">
                                            <div className="lable-2">Подробнее</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-5">
                                    <div className="tag-wrapper">
                                        <div className="tag">Производим замеры</div>
                                    </div>
                                </div>
                                <div className="details">
                                    <div className="element-tags">
                                        <img className="bg-hover" alt="Bg hover" src="image.svg" />
                                        <div className="lable-3">
                                            <div className="icon-2"></div>
                                            <div className="tag-2">4</div>
                                        </div>
                                    </div>
                                    <div className="element-tags-fffa">
                                        <img className="bg-hover-2" alt="Bg hover" src="bg-hover-2.svg" />
                                        <div className="lable-4">
                                            <div className="icon-2"></div>
                                            <div className="tag-2">4/36</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lable-5">
                                    <MapPin2Line className="icon-instance-node" />
                                    <div className="tag-2">ул. Толстого</div>
                                </div>
                                <div className="name">Казань - Ремонт квартиры</div>
                                <div className="logo">
                                    <div className="remix-icons-line-wrapper">
                                        <Ruler2Line className="remix-icons-line" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
