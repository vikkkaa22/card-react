import React from "react";
import { Header } from "../Header";
import { BtnSet } from "../BtnSet";
import data from "../../data.json";

export function PageSelectSet() {

    //выбор неповторяющихся названий сетов
    const sets = data.reduce(
        (acc, item) => {
            if (acc.map[item.setName])
                return acc;
            acc.map[item.setName] = true;
            acc.sets.push(item.setName);
            return acc;
        },
        {
            map: {},
            sets: [],
        }
    ).sets.map((item, index) => ( //перебор названий 
        <BtnSet key={index} name={item} id={index} /> //и создание кнопок
    ));

    return (
        <>
            <Header />

            <div className="page">
                <h2 className="page__title">Выбор сетов</h2>

                <ul className="set-list">
                    {sets}
                </ul>
            </div>
        </>
    );
} 