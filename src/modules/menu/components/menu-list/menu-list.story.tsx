import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from './menu-list.component'
import pizzaItems from '@app/mocks/pizza.json'

const meta = {
    title: 'Menu/MenuList',
    component: MenuList,
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const View: Story = {
    args: {
        items: pizzaItems
    }
};

