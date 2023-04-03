const MenuContentCard = ({ menuItem }) => {
    return (
        <div class="card">
            <div className={menuItem.backgroundClassList}></div>
            <div className="shape-circle"></div>
            <h3 className="title">{menuItem.title}</h3>
            <i class="fa-sharp fa-solid fa-download"></i>
            <h5>portfolio</h5>
            <div className="random-icons">
                <span>A</span>
                <span>E</span>
                <span>I</span>
                <span>O</span>
                <span>U</span>
            </div>
        </div>
    );
};

export default MenuContentCard;
