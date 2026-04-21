import { useState } from "react";
import cards from "../data.json";
import { Card } from "./Card";
import "./Set.css"

export function Set() {
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
            <h2>Цвета на английском</h2>

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