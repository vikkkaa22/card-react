import { useState } from "react";
import cards from "../data.json"

import { Card } from "./Card";
export function Set() {
    return (
        <div>
            <h2>Название набора</h2>
            <Card front={cards[step].front} back={cards[step].back}/>
            <div className="subtitle">элементы управления</div>
        </div>
    )
}