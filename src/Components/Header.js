const Header = () => {

    return(
        <div className="header">  
        <div className="header-start">
            <p>Home</p>
            <p>/</p>
            <p>Product</p>
        </div>
        <div className="header-end">
        <i class="far fa-comment-alt-dots"></i>
        <div className="dashboard">
        <i class="fal fa-chart-network"></i>
            <p>Dashboard</p>
        </div>
        <div className="setting">
        <i class="far fa-cog"></i>
            <p>Setting</p>
        </div>
        </div>
        </div>
    )
}

export default Header;
