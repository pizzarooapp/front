import { Footer } from "@app/common/components/footer/footer.component";
import { Header } from "@app/common/components/header/header.component";

export const App = () => {
    return (
        <div>
            <Header />

            <h1 className="text-3xl font-bold underline">
                🍕 Pizzaroo - the best pizza in Ukraine
            </h1>

            <Footer />
        </div>
    );
}
