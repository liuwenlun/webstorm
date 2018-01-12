import React from 'react';

class NewsDetail extends React.Component{
    render(){
        return (
            <div>NewsDetail{this.props.params.newsId}</div>
        )
    }
}
export default NewsDetail