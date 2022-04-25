import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Gestion de Caisse</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Yassine Akermi</a>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                <i class="nav-icon fas fa-chart-bar"></i>
                                    <p>
                                        Statistiques
                                    </p>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/stock" className="nav-link">
                                <i class="nav-icon fa-solid fa-boxes-stacked"></i>
                                    <p>
                                        Stock
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/promotions" className="nav-link">
                                <i class="nav-icon fa-solid fa-tags"></i>
                                    <p>
                                        Promotions
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/caissiers" className="nav-link">
                                    <i class="nav-icon fa-solid fa-users"></i>
                                    <p>
                                        Caissiers
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>

    </>
  )
}

export default Sidebar