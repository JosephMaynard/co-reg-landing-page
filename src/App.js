import { version } from 'inferno';
import Component from 'inferno-component';
import Logo from './components/logo';
import HowItWorks from './components/HowItWorks';
import Title from './components/Title';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Main">
                    <Logo
                        style={{fill: '#fff'}}
                    />
                    <Title
                        title='CLAIM MAKEUP SAMPLES!'
                        subtitle='Claim Makeup and Product Samples from Sephora!'
                    />
                </div>
                <HowItWorks />
            </div>
        );
    }
}

export default App;
