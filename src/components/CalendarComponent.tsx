import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { PaperContext } from '../context/PaperContext';
import { PapersContext } from '../context/PapersContext';
import { inicialState } from '../interfaces/appInterfaces';
import getUser from "../helpers/getUserFromStorage";

const CalendarComponent = () => {
    const {
        paper,
        setPaper,
        setIsDisabled
    } = useContext(PaperContext);

    const { papers } = useContext(PapersContext);

    const [markedDay, setMarkedDay] = useState<{ [key: string]: {} }>({});

    useEffect(() => {
        searchPaperByDay(paper.dia!);
    }, [papers])

    const searchPaperByDay = async (dateString: string): Promise<void> => {
        const foundPaper = papers.find(paper => paper.dia === dateString);
        if (foundPaper) {
            markDay(dateString, 'blue');
            setPaper(foundPaper);
            setIsDisabled(true);
            return;
        }
        let userOnStorage = await getUser();
        markDay(dateString, 'red');
        setPaper({ ...inicialState, dia: dateString, user_id: userOnStorage.id })
        setIsDisabled(false);
    }

    const markDay = async (date: string, color: string) => {
        setMarkedDay({ [date]: { selected: true, selectedColor: color } })
    }

    return (
        <SafeAreaView style={styles.safe}>
            <Calendar
                onDayPress={(day) => searchPaperByDay(day.dateString)}
                renderArrow={(direction) => (<Text>{direction}</Text>)}
                enableSwipeMonths={true}
                markingType={'custom'}
                markedDates={markedDay}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default CalendarComponent;


