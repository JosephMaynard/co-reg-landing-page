import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Logo
                    style={{fill: '#fff'}}
                />
            </div>
        );
    }
}

export default App;
