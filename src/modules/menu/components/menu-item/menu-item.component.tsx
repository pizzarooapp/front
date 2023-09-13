import { FC } from "react"

interface MenuItemProps {
    imagePath: string,
    weight: number,
    title: string,
    ingredients: string,
    price: number
}

const values = {
    imagePath: "/assets/pizza/Quattro-Formaggio-Four-Cheese-Pizza_1.webp",
    weight: 555,
    title: "Піца П'ять Сирів",
    ingredients: "Пармезан, Моцарела, Соус Альфредо, Чеддер, Фета, Бергадер Блю",
    price: 215
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
    return (<div className="w-96 shadow-xl rounded-2xl bg-white">
        <div className="relative">
            <img
                className="w-full h-[15rem] object-cover object-center rounded-t-2xl"
                src={imagePath}
            />
            <span className="absolute right-3 bottom-1.5 text-white bg-gray-900/50 rounded-[2rem] px-2">
                {`${weight} г.`}
            </span>
        </div>
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-2 ">
                {title}
            </h2>
            <p className="mb-8">
                {ingredients}
            </p>
            <span className="text-xl font-semibold">
                {`${price} грн.`}
            </span>
        </div>
    </div>)
}