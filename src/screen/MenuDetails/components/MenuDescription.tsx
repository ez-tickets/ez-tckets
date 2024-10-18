import { Fragment } from "react";
import { Link } from "react-router-dom";
import MenuSizeContainer from "./MenuSizeContainer.tsx";
import { SelectMenu } from "../../../dataTypes.ts";
import { useSlideAnimeStore } from "../../home/Home.tsx";
import { menuDescriptionStyle } from "./style/MenuDescription.css.ts";
import SelectedOptionsView from "./SelectedOptionsView.tsx";
import { create } from "zustand/index";

type MenuDescriptionProps = {
    data: SelectMenu;
}

export type OrderOptions = {
    id: string;
    name: string;
    price: number;
    amount: number;
}

type OptionsDetail = {
    initOptions: OrderOptions[];
    stateOptions: OrderOptions[];
    initOptionsAddHandler: (optionsDetail: OrderOptions[]) => void;
    stateOptionsAddHandler: (optionsDetail: OrderOptions[]) => void;
    resetHandler: () => void;
}

export const useSelectedOptionsStore = create<OptionsDetail>()((set) => ({
    initOptions: [],
    stateOptions: [],
    initOptionsAddHandler: (optionsDetail) => set({initOptions: optionsDetail}),
    stateOptionsAddHandler: (optionsDetail) => set({stateOptions: optionsDetail}),
    resetHandler: () => set({initOptions: [], stateOptions: []}),
}))

function MenuDescription({data}: MenuDescriptionProps) {
    const {initOptions, initOptionsAddHandler} = useSelectedOptionsStore();
    const {changeLeftAnimation} = useSlideAnimeStore();

    const newOptions =
        data.options.map((option) => ({
            ...option, amount: 0
        }))

    const moveOptionScreenHandler = () => {
        if (initOptions.length == 0) {
            initOptionsAddHandler(newOptions);
        }
    }

    return (
        <Fragment>
            <div className={menuDescriptionStyle.main}>
                <img
                    src={data.image}
                    className={menuDescriptionStyle.menuImg}
                    alt={data.name}
                />

                <p className={menuDescriptionStyle.menuDescription}>{data.description}</p>

                {data.sizes.length != 0 ? <MenuSizeContainer sizes={data.sizes}/> : ""}

                {data.options.length != 0 ?
                    <Link
                        to={"/SelectOptions"}
                        onClick={changeLeftAnimation}
                    >
                        <button
                            className={menuDescriptionStyle.toppingButton}
                            onClick={moveOptionScreenHandler}
                        >
                            Topping
                        </button>
                    </Link> : ""
                }
                <SelectedOptionsView/>
            </div>
        </Fragment>
    );
}

export default MenuDescription;