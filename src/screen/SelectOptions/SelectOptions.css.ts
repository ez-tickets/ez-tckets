import {style} from "@vanilla-extract/css";

export const selectOptionsStyle = ({
    screen: style({
        display: "flex",
        flexDirection: "column",
        height: "100svh"
    }),

    topBar: style({
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "55px",
        zIndex: 1000,
        boxShadow: "0px 2px 5px gray",
    }),

    backImg: style({
        position: "absolute",
        top: "2.5px",
        left: "5px"
    }),

    menuTitle: style({
        textAlign: "center",
        fontSize: "24px",
    }),

    menuOptionContainer: style({
        borderTop: "1px solid gainsboro",
        textAlign: "center",
        flex: "1",
        marginBottom: "60px",
        overflowY: "auto",
        paddingBottom: "30px",
    }),

    menuOptions: style({
        textAlign: "left",
        padding: "0 5px"
    }),

    footer: style({
        // backgroundColor: "#ffd700", //カートの中に商品が入っている時の色
        backgroundColor: "white",  //注文の品がない時の色
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        zIndex: 1,
        boxShadow: "0 -1px 2px gray"
    }),

    confirmButton: style({
        padding: "10px 20px",
        backgroundColor: "gold",
        border: "1px solid rgba(0,0,0,0.2)",
        borderRadius: "5px",
        width: "100%",
    })
})