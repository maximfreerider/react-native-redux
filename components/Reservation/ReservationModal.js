import {Button, Modal, StyleSheet, Text, View} from "react-native";
import React from "react";


export const ReservationModal = (props) => {
    return (
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={props.showModal}
            onDismiss={() => {props.toggleModal(); props.resetForm()}}
            onRequestClose={() => {props.toggleModal(); props.resetForm()}}
        >
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>Your Reservation</Text>
                <Text style={styles.modalText}>Number of guests: {props.guests}</Text>
                <Text style={styles.modalText}>Smoking ? : {props.smoking ? 'Yes' : 'No'}</Text>
                <Text style={styles.modalText}>Date and Time: {props.date}</Text>
                <Button
                    title={'Close'}
                    color={'#512DA8'}
                    onPress={() => {console.log('pressed'); props.toggleModal(); props.resetForm()}}
                />
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
})