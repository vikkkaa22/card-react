import "./Form.css";
import React, { useState, useEffect } from "react";
import { useInput } from "./UseInput";
import { useForm } from "react-hook-form";

export function FormCreateSet() {

    // const [name, setName] = useState("");
    // const [description, setDescription] = useState("");


    const { register, handleSubmit, formState: { errors } }
        = useForm({
            defaultValues: {
                name: "",
                discription: ""
            }
        });
    console.log(errors);

    return (
        <form
            className="form"
            onSubmit={handleSubmit((data) => {
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