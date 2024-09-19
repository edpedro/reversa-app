import { ToastConfig } from 'react-native-toast-message';
import { Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

const toastConfig: ToastConfig = {
    customToast: ({ text1, text2, props }) => (
        <View
            style={{
                height: 100,
                width: '80%',
                backgroundColor: 'white',
                borderLeftWidth: 5,
                borderLeftColor: '#3498db',
                paddingHorizontal: 10,
                borderColor: '#3498db',
                position: 'absolute',
                left: 50,
                right: 0,
                top: -400,
                transform: [{ translateY: -30 }],
                borderWidth: 1,
            }}
        >
            <Text style={{ marginTop: 10 }}>{text1}</Text>
            <Text>{text2}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        props.onConfirm();
                        Toast.hide();
                    }}
                >
                    <Text style={{ color: 'green' }}>Confirmar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.onCancel();
                        Toast.hide();
                    }}
                >
                    <Text style={{ color: 'red' }}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    ),
};

export default toastConfig;
