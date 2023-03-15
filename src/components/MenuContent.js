const menuItemList = [
    {
        title: "Overview",
        backgroundClassList: "background-pic pic-1",
        isDownloadable: false,
    },
    {
        title: "Projects",
        backgroundClassList: "background-pic pic-2",
        isDownloadable: false,
    },
    {
        title: "Career",
        backgroundClassList: "background-pic pic-3",
        isDownloadable: false,
    },
    {
        title: "Resume",
        backgroundClassList: "background-pic pic-4",
        isDownloadable: true,
    },
];

const MenuContent = () => {
    return (
        <section id="menu-content">
            {menuItemList.map((menuItem, key) => (
                <div key={key} class="card">
                    <div className={menuItem.backgroundClassList}></div>
                    <div className="shape-circle"></div>
                    <h3 className="title">{menuItem.title}</h3>
                    {menuItem.isDownloadable ? (
                        <i class="fa-sharp fa-solid fa-download"></i>
                    ) : (
                        <i className="fa-solid fa-arrow-right"></i>
                    )}
                    <h5>portfolio</h5>
                    <div className="random-icons">
                        <span>A</span>
                        <span>E</span>
                        <span>I</span>
                        <span>O</span>
                        <span>U</span>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MenuContent;
