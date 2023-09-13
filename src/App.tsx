import { Footer } from "@app/common/components/footer/footer.component";
import { Header } from "@app/common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import MenuItems from "./mocks/pizza.json"

export const App = () => {
    return (
        <div>
            <Header />
            <div className="mx-12 mb-24">
                <MenuList items={MenuItems} />
            </div>
            <Footer />
        </div>
    );
}
