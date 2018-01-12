import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route,IndexRoute, hashHistory} from 'react-router'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import  UserCenter from './components/user_center'
import App from './components/app';



import './componentsCss/pc.css'

ReactDOM.render( (
        //创建根路径
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={NewsContainer}></IndexRoute>
            <Route path="/news_detail/:newsId" component={NewsDetail}></Route>
            <Route path="/user_center" components={UserCenter}></Route>
        </Route>


    </Router>


), document.getElementById('root'));

