import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useSlideAnimeStore } from "../home/Home.tsx";
import {OrderOptions, useSelectedOptionsStore} from "../MenuDetails/components/MenuDescription.tsx";
import OptionalMenu from "./components/OptionalMenu.tsx";
import backSVG from "../../assets/back.svg";
import { selectOptionsStyle } from "./SelectOptions.css.ts";
import { slideRightPage } from "../MenuDetails/MenuDetail.css.ts";
import {replaceOption, useOrderReducer} from "../MenuDetails/MenuDetail.tsx";
import {ProdOptionOrder} from "../../dataTypes.ts";


function SelectOptions() {
    const {changeLeftAnimation} = useSlideAnimeStore();
    const {dispatch} = useOrderReducer();
    const {initOptions, stateOptions, stateOptionsAddHandler, resetHandler} = useSelectedOptionsStore();

    const backHandler = () => {
        if (stateOptions.length != 0) {
            changeLeftAnimation();
            return;
        }
        resetHandler();
    }

    const toOrder = (to: OrderOptions[]): ProdOptionOrder[] => {
        return to.map((m) => ({ id: m.id, amount: m.amount, price: m.price }));
    }

    const confirmedHandler = () => {
        const selectedOption = initOptions.filter((item) => item.amount > 0);
        stateOptionsAddHandler(selectedOption);
        dispatch(replaceOption(toOrder(selectedOption)));
        alert("toppingを追加しました"); // todo: React-toastifyに置き換える
    }

    return (
        <Fragment>
            <div className={slideRightPage}>
                <div className={selectOptionsStyle.screen}>
                    <div className={selectOptionsStyle.topBar}>
                        <Link
                            to={"/MenuDetail"}
                            onClick={backHandler}
                        >
                            <img
                                src={backSVG}
                                className={selectOptionsStyle.backImg}
                                alt={"戻る"}
                            />
                        </Link>

                        <h1 className={selectOptionsStyle.menuTitle}>Topping</h1>
                    </div>

                    <div className={selectOptionsStyle.menuOptionContainer}>
                        <div className={selectOptionsStyle.menuOptions}>
                            <OptionalMenu/>
                        </div>
                    </div>

                    <div className={selectOptionsStyle.footer}>
                        <Link to={"/MenuDetail"}>
                            <button
                                className={selectOptionsStyle.confirmButton}
                                onClick={confirmedHandler}
                            >
                                追加する
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SelectOptions;