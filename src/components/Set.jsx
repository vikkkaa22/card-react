import { useState } from "react";
import { Card } from "./Card";
import "./Set.css"

import data from "../data.json";
import { useLocation, useParams } from "react-router-dom";

export function Set() {
    const param = useParams();
    console.log(param.id);

    const location = useLocation()
    const set = location.state.set
    const cards = data.filter((item) => item.setName === set);
    const [step, setStep] = useState(0);

    const nextCard = () => {

        if (step < cards.length - 1) {
            setStep(step + 1);
        }
    };

    const prevCard = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    return (
        <div>
            <h2>{set}</h2>

            <Card
                key={cards[step].id}
                front={cards[step].front}
                back={cards[step].back}
            />

            {/* СЧЁТЧИК */}
            <div className="subtitle">
                {step + 1} / {cards.length}
            </div>

            {/* СТРЕЛКИ */}
            <div className="controls">
                <button onClick={prevCard} disabled={step === 0}>
                    ←
                </button>

                <button onClick={nextCard} disabled={step === cards.length - 1}>
                    →
                </button>
            </div>
        </div>
    );
}