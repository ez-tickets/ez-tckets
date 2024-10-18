import {Fragment, useState} from 'react';
import { priceTotalViewStyle } from "./style/PriceTotalView.css.ts";
import {useOrderReducer} from "../MenuDetail.tsx";


function PriceTotalView() {
    const [totalPrice, setTotalPrice] = useState<number>();

    useOrderReducer.subscribe((state, _) => {
        if (state.query === undefined) return;
        const basePrice = state.query.product.price;
        const totalPrice = state.query.options.reduce((acc, price) => acc + (price.price * price.amount), basePrice);
        setTotalPrice(totalPrice);
    })

    return (
        <Fragment>
            <p className={priceTotalViewStyle.total}>{totalPrice?.toLocaleString()}</p>
        </Fragment>
    );
}

export default PriceTotalView;