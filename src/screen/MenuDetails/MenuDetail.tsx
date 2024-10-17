import {Fragment, useEffect} from "react";
import {selectMenuData1, selectMenuData2} from "../../mockData.ts";
import TopNav from "./components/TopNav.tsx";
import MenuDescription from "./components/MenuDescription.tsx";
import BottomNav from "./components/BottomNav.tsx";
import {useSlideAnimeStore} from "../home/Home.tsx";
import {topNavStyle} from "./MenuDetail.css.ts";
import {create} from "zustand/index";
import {Order, ProdOptionOrder} from "../../dataTypes.ts";

const INITIALIZE = "initialize" as const;
export const initialize = (id: string) => ({
    type: INITIALIZE,
    payload: id
})

const INCREASE_AMOUNT = "increase-amount" as const;
export const increaseAmount = () => ({
    type: INCREASE_AMOUNT,
})

const DECREASE_AMOUNT = "decrease-amount" as const;
export const decreaseAmount = () => ({
    type: DECREASE_AMOUNT,
})

const ADD_OR_CHANGE_OPTION = "add-or-change-option" as const;
export const addOrChangeOption = (options: ProdOptionOrder[]) => ({
    type: ADD_OR_CHANGE_OPTION,
    payload: options
})

const DISPERSION = "dispersion" as const;
export const dispersion = () => ({
    type: DISPERSION
})


type Action = (
  | ReturnType<typeof initialize>
  | ReturnType<typeof increaseAmount>
  | ReturnType<typeof decreaseAmount>
  | ReturnType<typeof addOrChangeOption>
  | ReturnType<typeof dispersion>
);

const reducer = (action: Action, prev?: Order): Order | undefined => {
    let state = prev;
    switch (action.type) {
        case INITIALIZE:
            if (state === undefined) {
                return { product: { id: action.payload, amount: 1 }, options: [] }
            }
            break;
        case INCREASE_AMOUNT:
            if (state === undefined) { return state }
            state.product.amount += 1;
            break;
        case DECREASE_AMOUNT:
            if (state === undefined) { return state }
            state.product.amount -= 1;
            break;
        case ADD_OR_CHANGE_OPTION:
            if (state === undefined) { return state }
            action.payload.forEach((option) => {
                if (state.options.some((inner) => inner.id === option.id)) {
                    state.options.map((inner) => {
                        if (inner.id === option.id) {
                            inner.amount = option.amount;
                        }
                    });
                } else {
                    state.options.push(option);
                }
            });
            break;
        case DISPERSION:
            return undefined;
        default:
            // linting error DO NOT TOUCH!
            const _: never = action;
    }

    return state;
}

interface OrderQueryDispatcher {
    query?: Order;
    dispatch: (action: Action) => void;
}

export const useOrderReducer = create<OrderQueryDispatcher>((set) => ({
    query: undefined,
    dispatch: (action) => set((state) => {
        return { query: reducer(action, state.query )}
    })
}))

// fixme: IDを指定して商品ごとのデータを得るようにする
// 多分fetchはSWRを使うことになると思う
function MenuDetail(/* {id} */) {
    const getData = selectMenuData2;
    const { dispatch } = useOrderReducer();
    const {animation} = useSlideAnimeStore();

    useEffect(() => {
        dispatch(initialize(getData.id));
    }, [getData, dispatch, initialize]);

    return (
        <Fragment>
            <div className={animation}>
                <div className={topNavStyle.screen}>
                    <TopNav menuName={getData.name}/>
                    <MenuDescription data={getData}/>
                    <BottomNav options={getData.options} price={getData.price}/>
                </div>
            </div>
        </Fragment>
    );
}

export default MenuDetail;