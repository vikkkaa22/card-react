import "./Form.css";
import React, { useState, useEffect } from "react";
import { useInput } from "./UseInput";
import { useForm } from "react-hook-form";

export function FormCreateSet() {

    // const [name, setName] = useInput('');
    // const [description, setDescription] = useInput('');

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(name, discription);        
    // }
    
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if(count !== 0){
        console.log(`Отправка формы : ${count}`);
        alert(`Отправка формы : ${count}`);
        }
    }, [count]);

    
        const { register, handleSubmit, formState: { errors } }
        = useForm({
            defaultValues: {
                name: "",
                discription: ""
            }
        });

    return (
        <form
            className="form"
            onSubmit={handleSubmit((data) => {
                setCount(count + 1);
                console.log(data);
            })}
        >
            <div className="form__title">Создание набора</div>

            <div className="form__group">
                <label>Название набора</label>
                <input type="text" name="name" id="name" {...register("name", {
                    required: "Заполните поле Название набора",
                    minLength: {
                        value: 4,
                        message: "Название набора должно содержать минимум 4 символа"
                    }
                })} />
                <p className="error-msg">{errors.name?.message}</p>
            </div>

            <div className="form__group">
                <label>Описание набора</label>
                <textarea name="discription" id='disription'
                    {...register("discription", { required: "Заполните поле Описание набора" })} />
                    <p className="error-msg">{errors.discription?.message}</p>
            </div>

            <div className="form__button">
                <input type="submit" value="Создать сет" />
            </div>
        </form >
    );
}