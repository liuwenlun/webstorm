import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
    Card,

} from 'antd';

import '../componentsCss/news_image.css';

class NewsBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsArr : []
        }
    }
    componentWillMount(){
        //获取到发送请求需要的参数
        let {type, count} = this.props;
        console.log(count);
        //；拼接url
        let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`;
        axios.get(url)
            .then(response => {
                let newsArr = response.data;
                //更新状态
                this.setState({newsArr});
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){
        let { count, type} = this.props;
        let {newsArr} = this.state;
        let NewsList = newsArr.length>0
            ?(
                newsArr.map((news, index) => {
                    return (
                        <li  key={index}>
                            <Link to={news.uniquekey}>
                                <Link to={`/news_detail/${news.uniquekey}`}>{news.title}</Link>

                            </Link>
                        </li>
                    )
                })
            )
            :'暂时没有新闻推送;';
        return (
            <Card>
                <ul>
                    {NewsList}
                </ul>
            </Card>
        )
    }
}

//规定组件传入属性的必要性，和数据类型
NewsBook.protoType = {

    type : React.PropTypes.string.isRequired,
    count : React.PropTypes.number.isRequired

};

export default NewsBook;