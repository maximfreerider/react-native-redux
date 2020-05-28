import React, {Component} from "react";
import {Text, View, ScrollView, StyleSheet, Switch, Picker, Button, Modal, Alert} from 'react-native'
import DatePicker from "react-native-datepicker";
import {ReservationModal} from "./ReservationModal";
import * as Animatable from  'react-native-animatable';
import {getAsync, USER_FACING_NOTIFICATIONS, askAsync, CALENDAR} from "expo-permissions";
import {Notifications} from "expo";
import * as Calendar from 'expo-calendar'


class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        }
    }

    static navigationOptions = {
        title: 'Reserve Tab'
    }

    toggleModal = () => this.setState({showModal: !this.state.showModal})

    async obtainNotificationPermission () {
        let permission = await getAsync(USER_FACING_NOTIFICATIONS)
        if (permission.status !== 'granted') {
            permission = await askAsync(USER_FACING_NOTIFICATIONS)
            if (permission.status !== 'granted') {
                Alert.alert(
                    'Permission not granted to show notification'
                )
            }
        }
        return permission
    }

    async obtainCalendarPermission() {
        let permission = await getAsync(CALENDAR);
        if (permission.status !== 'granted') {
            permission = await askAsync(CALENDAR);
            if(permission.status === 'granted') {
                Alert.alert('okey')
            }
            if (permission.status !== 'granted') {
                Alert.alert('Permission not granted to access the calendar');
            }
        }
        return permission;
    }

    async presentLocalNotification(date) {
        await this.obtainNotificationPermission();
        Notifications.presentLocalNotificationAsync({
            title: 'Your Reservation',
            body: 'Reservation for '+ date + ' requested',
            ios: {
                sound: true
            },
            android: {
                sound: true,
                vibrate: true,
                color: '#512DA8'
            }
        });
    }



    async addReservationToCalendar (date) {
        await this.obtainCalendarPermission()
        const startDate = new Date(Date.parse(date));
        const endDate = new Date(Date.parse(date) + (2 * 60 * 60 * 1000)); // two hours
        await Calendar.createEventAsync(Calendar.DEFAULT, {
            title: 'Con Fusion Table Reservation',
            location: '121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong',
            startDate,
            endDate,
            timeZone: 'Asia/Hong_Kong',
        })
    }

    handleReservation = () => {
        Alert.alert(
            "Yor Reservation OK",
            `Nuber of Guests: ${this.state.guests}\nSmoking? ${this.state.smoking}\nDate and Time: ${this.state.date}`,
            [
                {
                    text: "Cancel",
                    onPress: () => {this.resetForm()},
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        this.presentLocalNotification(this.state.date)
                        this.addReservationToCalendar(this.state.date);
                        this.resetForm()
                    },
                    style:''
                }
            ],
            {cancelable: false}
        )
    }

    resetForm = () => {
        this.setState({
            guests: 1,
            smoking: false,
            date: ''
        })
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation="zoomIn" delay={1000}>
                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Number of guests</Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.guests}
                            onValueChange={(itemValue, itemIndex) => this.setState({guests: itemValue})}
                        >
                            <Picker.Item label={'1'} value={'1'}/>
                            <Picker.Item label={'2'} value={'2'}/>
                            <Picker.Item label={'3'} value={'3'}/>
                            <Picker.Item label={'4'} value={'4'}/>
                        </Picker>
                    </View>

                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Smoking/Non-Smoking?</Text>
                        <Switch
                            style={styles.formItem}
                            value={this.state.smoking}
                            onTintColor={'#512DA8'}
                            onValueChange={(value) => this.setState({smoking: value})}
                        >
                        </Switch>
                    </View>

                    <View style={styles.formRow}>
                        <Text style={styles.formLabel}>Date and Time</Text>
                        <DatePicker
                            style={{flex: 2, marginRight: 20}}
                            date={this.state.date}
                            format=''
                            mode={"datetime"}
                            placeholder={'select date and time'}
                            minDate={'2020-02-02'}
                            confirmBtnText={'Confirm'}
                            cancelBtnText={'Cancel'}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                }
                            }}
                            onDateChange={(date) => this.setState({date: date})}
                        />
                    </View>

                    <View style={styles.formRow}>
                        <Button
                            title={'Reserve'}
                            onPress={() => this.handleReservation()}
                            color={'#512DA8'}
                            accessibilityLabel={'Learn more about this button'}
                        />
                    </View>

                    <ReservationModal showModal={this.state.showModal}
                                      toggleModal={this.toggleModal}
                                      resetForm={this.resetForm}
                                      guests={this.state.guests}
                                      smoking={this.state.smoking}
                                      date={this.state.date}
                    />
                </Animatable.View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    }
})

export default Reservation