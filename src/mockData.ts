import { Category, Menu, SelectMenu } from "./dataTypes.ts";
import sampleMenu1 from "./assets/sampleMenu1.jpeg";
import sampleMenu2 from "./assets/sampleMenu2.jpeg";

export const categoryData: Category[] = [
    { id: "1",  name: "card1" },
    { id: "2",  name: "card2" },
    { id: "3",  name: "card3" },
    { id: "4",  name: "card4" },
    { id: "5",  name: "card5" },
    { id: "6",  name: "card6" },
    { id: "7",  name: "card7" },
    { id: "8",  name: "card8" },
    { id: "9",  name: "card9" },
    { id: "10", name: "card10" }
];

export const menuData: Menu[] = [
    { id: "1", name: "Menu1", price: 600,  image: sampleMenu1 },
    { id: "2", name: "Menu2", price: 700,  image: sampleMenu2 },
    { id: "3", name: "Menu3", price: 800,  image: sampleMenu1 },
    { id: "4", name: "Menu4", price: 1000, image: sampleMenu2 },
    { id: "5", name: "Menu5", price: 1500, image: sampleMenu1 },
    { id: "6", name: "Menu6", price: 1200, image: sampleMenu2 },
    { id: "7", name: "Menu7", price: 900,  image: sampleMenu1 },
];

export const selectMenuData1: SelectMenu = {
    id: "1",
    name: "sampleMenu",
    image: sampleMenu1,
    description: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    sizes: [
        { id: "1", name: "小", price: 800 },
        { id: "2", name: "並", price: 850 },
        { id: "3", name: "大", price: 900 },
    ],
    options: [
        { id: "1", name: "キャラメルソース", price: 50 },
        { id: "2", name: "ねぎ",           price: 100 },
        { id: "3", name: "もやし",         price: 150 },
        { id: "4", name: "チョコレート",     price: 20 },
        { id: "5", name: "バニラ",           price: 80 },
    ],
    price: 850
}

//optionがなければ複数選択できるようにしたい
export const selectMenuData2: SelectMenu = {
    id: "1",
    name: "sampleMenu",
    image: sampleMenu2,
    description: "サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト",
    sizes: [],
    options: [],
    price: 500
}