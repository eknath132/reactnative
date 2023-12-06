import { PaperProvider } from 'react-native-paper';
import Principal from './Components/Principal/Principal';
// import Principal from './Components/Principal/principal.js';

export default function App() {
    return (
        <PaperProvider >
            <Principal/>
        </PaperProvider>
    )
}
