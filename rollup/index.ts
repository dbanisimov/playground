import { getDatabase } from "firebase/database";
import { getStorage, uploadString, getDownloadURL, ref } from "firebase/storage";
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getAnalytics, logEvent, settings, SettingsOptions } from 'firebase/analytics';
import { getPerformance, FirebasePerformance, PerformanceTrace, trace } from 'firebase/performance';
import { getRemoteConfig, RemoteConfig, ValueType, RemoteConfigLogLevel, setLogLevel, fetchAndActivate, getAll} from 'firebase/remote-config';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCSwhdsZZ34EQXL-QOOidN9IHUGxmmjPdU",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267",
    appId: "1:473315497267:web:48b86522c4d135a4",
    measurementId: "G-56GY1RSM8T"
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);
console.log('get database ref');
const databaseRef = database.ref("data_txt");
const storage = getStorage(firebaseApp);
const storageRef = ref(storage, "data_txt");

const analytics = getAnalytics(firebaseApp);
logEvent(analytics, 'test_exp');
// settings(123 as SettingsOptions);

const perf: FirebasePerformance = getPerformance(firebaseApp);
const trc: PerformanceTrace = trace(perf, 'my')

const rc: RemoteConfig = getRemoteConfig(firebaseApp);
// setLogLevel(rc, '123' as RemoteConfigLogLevel);

async function run() {
    await signInAnonymously(auth);
    await uploadString(storageRef, "Hello World");
    const url = await getDownloadURL(storageRef);
    console.log('download url is ', url);
    await databaseRef.set(url);

    await fetchAndActivate(rc);
    
    for(const key of Object.keys(getAll(rc))) {
        console.log('rc', key);
    } 
}

run();