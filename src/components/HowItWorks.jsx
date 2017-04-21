import './HowItWorks.css';

const HowItWorks = () => {
    return (
        <div className='HowItWorks'>
            <h3>How It Works</h3>
            <div className="HowItWorks-inner">
                <div className="HowItWorks-group">
                    <div className="HowItWorks-icon"></div>
                    <p>Fast &amp; Easy Registration<br/>It's 100% Free.</p>
                </div>
                <div className="HowItWorks-group">
                    <div className="HowItWorks-icon"></div>
                    <p>Complete Paid Surveys<br/>&amp; Offers Online.</p>
                </div>
                <div className="HowItWorks-group">
                    <div className="HowItWorks-icon"></div>
                    <p>Earn Points &amp; Entries<br/>for Gift Vouchers.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;