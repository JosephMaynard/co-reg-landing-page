import Component from 'inferno-component';
import Logo from './components/logo';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
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
                    <div className="Main-inner">
                        <div className="Form">
                            <Title
                                title='CLAIM MAKEUP SAMPLES!'
                                subtitle='Claim Makeup and Product Samples from Sephora!'
                            />
                        </div>
                    </div>
                </div>
                <HowItWorks />
                <Benefits />
            </div>
        );
    }
}

export default App;
