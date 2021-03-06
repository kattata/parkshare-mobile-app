import './utils.scss';

const TabSwitcher = ({ firstTabText, switcherState, switchTab, secondTabText }) => {
    return (
        <div className="tab-switcher">
            <div>
                <h5 onClick={() => switchTab(1)}>{firstTabText}</h5>
                <h5 onClick={() => switchTab(2)}>{secondTabText}</h5>
            </div>
            <span className="tab-lines">
                <span className={switcherState === 1 ? "first-line active-line" : "first-line"}></span>
                <span className={switcherState === 2 ? "second-line active-line" : "second-line"}></span>
            </span>
        </div>
    );
}

export default TabSwitcher;