import React, { useEffect, Component } from "react";
import { Text, TouchableOpacity, View, Alert, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from './StyleApp';


class Blink extends Component {

    constructor(props) {
        super(props);
        this.fadeAnimation = new Animated.Value(0.2);
    }

    componentDidMount() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.fadeAnimation, {
                    toValue: 0.2,
                    duration: this.props.duration,
                    useNativeDriver: true,
                }),
                Animated.timing(this.fadeAnimation, {
                    toValue: 1,
                    duration: this.props.duration,
                    useNativeDriver: true,
                })
            ]),
            {
                iterations: this.props.repeat_count
            }
        ).start();
    }

    render() {
        return (
            <View style={{ ...this.props.style }}>
                <Animated.View style={{ opacity: this.fadeAnimation }}>
                    {this.props.children}
                </Animated.View>
            </View>
        )
    }
}

const getTimer = (counter) => {
    if (counter > 0) {
        return format(counter);
    }
    return "Restart";
};

const padTime = (time) => {
    // Добавление нуля при необходимости
    const sec = time % 600;
    return String(sec).length == 1 ? `0${sec}` : `${sec}`;
};

const format = (time) => {
    // Конвертировать время
    const minutes = Math.floor(time / 600);
    const seconds = Math.floor((time % 600) / 10);
    const milliseconds = Math.floor(time % 10);

    // Вернуть отформатированное с нулями время format mm:ss
    return `${minutes}:${padTime(seconds)},${milliseconds}`;
};

export default function App() {

    const timer_value = 3000; // 3000 = 5 minutes
    const [counter, setCounter] = React.useState(timer_value);

    const createButtonAlert = () =>
        Alert.alert("ASHYQ", "Таймер установлен на 5 минут и перезапускается бесконечно", [{ text: "OK", onPress: () => console.log("OK Pressed") }]);

    useEffect(() => {
        let timer;
        if (counter > 0) {
            timer = setTimeout(() => setCounter((c) => c - 1), 100);
        }
        if (counter == 0) {
            timer = setTimeout(() => setCounter((c) => c + timer_value), 100);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]);

    return (
        <View style={styles.container}>
            {/* Заголовок - header приложения */}
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={28} color="#F14635" style={{ display: "flex", marginTop: 20 }} />
                <Text style={styles.header_text}>ASHYQ. Статус по коронав...</Text>
            </View>
            {/* Блок статуса */}
            <View style={styles.status}>
                <Blink duration="1200"><Text style={styles.status_text}>Безопасный</Text></Blink>
                <Text style={styles.status_normal_text}>Не имеет ограничений</Text>
                <Text style={styles.status_normal_text}>ПЦР-тест отрицательный{"\n"}</Text>
                <Text style={styles.status_normal_text_date}>Срок действия статуса до: 03.09.2022</Text>
            </View>
            {/* Таймер */}
            <View style={styles.timer_box}>
                <Text style={styles.timer_text}>Вы можете войти в течение</Text>
                <Text style={styles.timer}>{ getTimer(counter) } </Text>
            </View>
            {/* Информация о пользователе */}
            <View style={styles.user_id_box}>
                <Text style={styles.about_user_info}>ИИН</Text>
                <Text style={styles.user_id}>770528600873</Text>
                <Text style={styles.about_user_info}>ИИН/БИН организации</Text>
                <Text style={styles.user_id}>691024402078</Text>
            </View>
            {/* Кнопка вернуться на главную Каспи */}
            <View>
                <TouchableOpacity style={styles.go_back_button} onPress={createButtonAlert}>
                    <Text style={styles.go_back_button_text}>ВЕРНУТЬСЯ НА ГЛАВНУЮ KASPI.KZ</Text>
                </TouchableOpacity>
            </View>
            {/* Для слияния с верним фоном */}
            <StatusBar style="auto"/>
        </View>
    );
}

