import React from 'react';
import axios from 'axios';
//import NewsComments from './news_comments';
import {
    Row,
    Col
} from 'antd';

class NewsDetail extends React.Component{
    constructor(props){
        super(props);
        //初始化新闻详情的状态
        this.state = {
            news : {}
        }

    }
    componentWillMount(){
        let newsId = this.props.params.newsId;
        let url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${newsId}`
        axios.get(url)
            .then(response => {
                //获取到新闻详情的数据
                let news = response.data;
                //更新的状态
                this.setState({news});
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){
        let {news} = this.state;
        return (
            <Row>
                <Col span={1}></Col>
                <Col span={16}>
                    <div dangerouslySetInnerHTML={{__html : news.pagecontent}}></div>
                    {/*<NewsComments newsId={this.props.params.newsId}/>*/}
                </Col>
                <Col span={6}></Col>
                <Col span={1}></Col>

            </Row>
        )
    }
}
export default NewsDetail