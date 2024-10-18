import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useSizePriceStore } from "./MenuSize.tsx";
import { useOrderAmountStore } from "./OrderAmount.tsx";
import { useSlideAnimeStore } from "../../home/Home.tsx";
import { topNavStyle } from "./style/TopNav.css.ts";
import backSVG from "../../../assets/back.svg";

type TopNavProps = {
    menuName: string;
}

function TopNav({menuName}: TopNavProps) {
    const {resetPrice} = useSizePriceStore();
    const {resetAmount}  = useOrderAmountStore();
    const {changeLeftAnimation} = useSlideAnimeStore();


    const backHandler = () => {
        resetPrice();
        resetAmount();
        changeLeftAnimation();
    }

    return (
        <Fragment>
            <div className={topNavStyle.topBar}> {/* header */}
                <Link
                    to={"/"}
                    onClick={backHandler}
                >
                    <img
                        src={backSVG}
                        className={topNavStyle.backImg}
                        alt={"戻る"}
                    />
                </Link>

                <h1 className={topNavStyle.menuTitle}>{menuName}</h1>
            </div>
        </Fragment>
    );
}

export default TopNav;