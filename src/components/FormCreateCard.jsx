import "./Form.css";

export function FormCreateCard() {
    return (
        <form className="form">
            <div className="form__title">Создание карточки</div>

            <div className="form__group">
                <label>Передняя сторона карточки</label>
                <input type="text" name="fronttext" />
            </div>

            <div className="form__group">
                <label>Задняя сторона карточки</label>
                <input type="text" name="backtext" />
            </div>

            <button className="form__button" type="submit">
                Создать карточку
            </button>
        </form>
    );
}