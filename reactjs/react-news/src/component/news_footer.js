import React from 'react';
import {Row, Col} from 'antd'


import '../componentsCss/news_footerCss.css'
class Footer extends React.Component{

    render(){
        return (
            <Row>
                <Col className='newsFooter' span={24}>
                    liuwenlong@liuluio
                </Col>
            </Row>

        )
    }
}

export default Footer