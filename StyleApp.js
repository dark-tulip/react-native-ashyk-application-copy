import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        fontFamily: "Arial"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        alignItems: "center",
        width: "100%",
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: "#dedede",
        padding: 10,
    },
    header_text: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        paddingTop: 15,
    },
    status: {
        backgroundColor: "#94d849",
        width: "100%",
        height: 190,
        paddingLeft: 12,
        paddingTop: 6,
    },
    status_text: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
    },
    status_normal_text: {
        color: "white",
        fontSize: 18,
    },
    status_normal_text_date: {
        color: "white",
        fontSize: 18,
    },
    timer_box: {
        paddingLeft: 12,
        paddingBottom: 12,
        borderBottomColor: "#dedede",
        borderBottomWidth: 10,
    },
    timer_text: {
        fontSize: 20,
        marginTop: 8,
    },
    timer: {
        fontWeight: "bold",
        fontSize: 22,
    },
    user_id_box: {
        padding: 12,
    },
    user_id: {
        fontWeight: "normal",
        borderBottomWidth: 1,
        borderBottomColor: "#dedede",
        paddingBottom: 12,
        fontSize: 20,
    },
    about_user_info: {
        color: "grey",
    },
    go_back_button: {
        backgroundColor: "#006EFF",
        padding: 12,
        marginHorizontal: 12,
        alignItems: "center",
        marginTop: 15,
        borderRadius: 3,
    },
    go_back_button_text: {
        color: "white",
        fontSize: 15,
    },
});

export default styles