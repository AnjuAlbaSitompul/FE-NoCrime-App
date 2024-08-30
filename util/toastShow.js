import Toast from "react-native-toast-message";

export const toastShow = (message, type) => {
    Toast.show({
        type: 'costumeToast',
        text1: message,
        props: {
            status: type
        }
    })
}