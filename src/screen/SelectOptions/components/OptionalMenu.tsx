import { Fragment } from 'react';
import { create } from "zustand/index";
import { useSelectedOptionsStore } from "../../MenuDetails/components/MenuDescription.tsx";
import decrementSVG from "../../../assets/decrement.svg";
import incrementSVG from "../../../assets/increment.svg";
import { optionalMenuStyle } from "./style/OptionalMenu.css.ts";
import { orderAmountStyle } from "../../MenuDetails/components/style/OrderAmount.css.ts";



function OptionalMenu() {
    const maxAmount = 5;
    const minAmount = 0;
    const {initOptions, initOptionsAddHandler} = useSelectedOptionsStore();

    const incrementHandler = (id: string) => {
        const newOption = [...initOptions].map((option) => {
            return option.id == id ? { ...option, amount: option.amount + 1 } : option
        });
        initOptionsAddHandler(newOption);
    };

    const decrementHandler = (id: string) => {
        const newOption = [...initOptions].map((option) => {
            return option.id == id ? { ...option, amount: option.amount - 1 } : option
        });
        initOptionsAddHandler(newOption);
    };

    return (
        <Fragment>
            {initOptions.map((option) => {
                return (
                    <div className={optionalMenuStyle.optionContainer} key={option.id}>
                        <span>{option.name}</span>
                        <p className={optionalMenuStyle.optionPrice}>+{option.price}円</p>

                        <div className={optionalMenuStyle.buttonContainer}>
                            <button
                                className={orderAmountStyle.decrementButton}
                                onClick={() => {
                                    decrementHandler(option.id)
                                }}
                                disabled={option.amount <= minAmount}
                            >
                                <img src={decrementSVG} alt="減らす"/>
                            </button>

                            <div className={optionalMenuStyle.amountDisplay}>{option.amount}</div>

                            <button
                                className={orderAmountStyle.incrementButton}
                                onClick={() => {
                                    incrementHandler(option.id)
                                }}
                                disabled={option.amount >= maxAmount}
                            >
                                <img src={incrementSVG} alt="増やす"/>
                            </button>
                        </div>
                    </div>
                )})}
        </Fragment>
    );
}

export default OptionalMenu;