import React, { Component, Suspense } from 'react';
import { Nav } from "./components/nav/nav";
import { Route, Routes } from "react-router-dom"
import './app.css'
import { News } from './components/nav/news/news';
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';

const DialogsContainer = React.lazy(() => import('./components/nav/messages/dialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/nav/users/usersContainer'));
const ProfileContainer = React.lazy(() => import('./components/nav/profile/profileContainer'));


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app__wrapper'>
                <HeaderContainer />
                <Nav></Nav>
                <div className='app__wrapperContent'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/profile/:userId"
                                element={<ProfileContainer />}
                            />
                            <Route path="/profile/"
                                element={<ProfileContainer />}
                            />

                            <Route path="/messages/*"
                                element={<DialogsContainer />}
                            />

                            <Route path="/login"
                                element={Login}
                            />

                            <Route path='users' element={<UsersContainer />} />

                            <Route path="/news" element={<News />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App)

// function withRouter(Profile) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <App
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }

// export default compose(withRouter,
//     connect(mapStateToProps, { initializeApp }))(App)