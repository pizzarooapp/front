import { FC } from 'react';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import { Pizza } from '@app/modules/menu/types/pizza';

interface MenuItemsProps {
    items: Pizza[]
}

export const MenuList: FC<MenuItemsProps> = ({ items }) => {

    return (<div className='flex flex-wrap gap-10 justify-center'>
        {items.map(({ image, ...pizza }) => (
            <MenuItem
                {...pizza}
                key={`pizza-${pizza.id}`}
                imagePath={`/assets/pizza/${image}`}
            />
        ))}
    </div>);
}