import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from './menu-item.component'

const meta = {
    title: 'Menu/MenuItem',
    component: MenuItem,
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;


export const View: Story = {
    args: {
        imagePath: "/assets/pizza/Quattro-Formaggio-Four-Cheese-Pizza_1.webp",
        weight: 555,
        title: "Піца П'ять Сирів",
        ingredients: "Пармезан, Моцарела, Соус Альфредо, Чеддер, Фета, Бергадер Блю",
        price: 215
    }
};

