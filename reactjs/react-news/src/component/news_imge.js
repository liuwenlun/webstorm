import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import {
    Card
} from 'antd';

import '../componentsCss/news_image.css';

class NewsImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newsArr : []
        }
    }
    componentWillMount(){
        //获取到发送请求需要的参数
        let {type, count} = this.props;
        console.log(count)
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
        let {title, count, type, width, imgWidth} = this.props;
        let {newsArr} = this.state;
        let NewsList = newsArr.length>0
            ?(
                newsArr.map((news, index) => {
                    return (
                        <div className="NewsImageContainer" key={index}>
                            <Link to={`/news_detail/${news.uniquekey}`}>
                                <div>
                                    <img style={{width : imgWidth}} src={news.thumbnail_pic_s} alt=""/>
                                </div>
                                <div style={{width : imgWidth}}>
                                    <h3>{news.title}</h3>
                                    <p>{news.author_name}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            )
            :'暂时没有新闻推送;';
        return (
            <Card title={title} style={{width,marginBottom:'20px'}}>
                {NewsList}
            </Card>
        )
    }
}

//规定组件传入属性的必要性，和数据类型
NewsImage.protoType = {
    title : React.PropTypes.string.isRequired,
    type : React.PropTypes.string.isRequired,
    count : React.PropTypes.number.isRequired,
    width : React.PropTypes.string.isRequired,
    imgWidth : React.PropTypes.string.isRequired
};

export default NewsImage;