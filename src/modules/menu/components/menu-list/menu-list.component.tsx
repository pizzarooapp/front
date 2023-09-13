import PizzaMenu from '../../../../mocks/pizza.json'
import { MenuItem } from '../menu-item/menu-item.component';

export const MenuList = () => {

    return (<div className='flex flex-wrap gap-10'>
        {PizzaMenu.map(({ image, ...pizza }) => (
            <MenuItem
                {...pizza}
                imagePath={`/assets/pizza/${image}`}
            />
        ))}
    </div>);
}