import { Fragment } from 'react';
import {selectedOptionsViewStyle} from "./style/SelectedOptionsView.css.ts";
import {useSelectedOptionsStore} from "./MenuDescription.tsx";

function SelectedOptionsView() {
    const {stateOptions} = useSelectedOptionsStore();

    return (
        <Fragment>
            <div className={selectedOptionsViewStyle.container}>
                {stateOptions.map((option) => (
                    <div className={selectedOptionsViewStyle.optionItem} key={option.id}>
                        <p>{option.name}</p>
                        <p className={selectedOptionsViewStyle.priceText}>+{option.price}円</p>
                        <p className={selectedOptionsViewStyle.amountText}>×　数量: {option.amount}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default SelectedOptionsView;