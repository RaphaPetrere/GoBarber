import axios from 'axios';

const api = axios.create({
    baseURL: '10.0.64.42:3333',
});

export default api;

/*
    iOS com emulador: localhost
    iOS com disp. fisico: IP da máquina

    Android com emulador: localhost com adb reverse que faz um redirecionador de portas do seu pc pro seu mobile
    Android com emulador sem adb: 10.0.2.2 (Android Studio)
    Android com emulador sem adb: 10.0.3.2 (Genymotion)
    Android com disp.fisico: IP da máquina
*/