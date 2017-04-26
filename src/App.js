import Component from 'inferno-component';
import Logo from './components/logo';
import Title from './components/Title';
import { getUrlParameters, uniqueID, preloadImages, getAge } from './helpers';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            heroImageLoaded: false,
            collectedData: {
                sessionID: uniqueID(),
                parameters: getUrlParameters(),
            },
        };
    }

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
            </div>
        );
    }
}

export default App;
