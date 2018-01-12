import React from 'react'
import {Link} from 'react-router'
import NewsBook from './news_bock'
import NewsProduct from './news_product'
import "../componentsCss/news_container.css"


import {
    Row,
    Col,
    Carousel,
    Tabs
} from 'antd'



import  Carousel_1 from '../images/carousel_1.jpg'
import  Carousel_2 from '../images/carousel_2.jpg'
import  Carousel_3 from '../images/carousel_3.jpg'
import  Carousel_4 from '../images/carousel_4.jpg'

import NewsImge from './news_imge'



const TabPane = Tabs.TabPane;

class NewsContainer extends React.Component{
    render(){
        return (
            <div className="containerTop">
                <Row >
                    <Col span={1}></Col>
                    <Col span={22}>
                        <div className="leftContainer1">
                            <Carousel autoplay>
                                <div><img src={Carousel_1} alt=""/></div>
                                <div><img src={Carousel_2} alt=""/></div>
                                <div><img src={Carousel_3} alt=""/></div>
                                <div><img src={Carousel_4} alt=""/></div>

                            </Carousel>
                            <NewsImge title="国际新闻" type="guoji" count={6} width="100%" imgWidth="115px"/>
                        </div>
                        <Tabs className='tabContainer'>
                            <TabPane tab="娱乐新闻" key="1">
                                <NewsBook type="yule" count={25}/>
                            </TabPane>
                            <TabPane tab="科技新闻" key="2">
                                <NewsBook type="keji" count={25}/>
                            </TabPane>
                        </Tabs>
                        <Tabs className='reactPro'>
                            <TabPane tab="react产品" key="1">
                                <NewsProduct />
                            </TabPane>
                        </Tabs>
                        <div>
                        <NewsImge title="国际新闻" type="guoji" count={8} width="100%" imgWidth="115px"/>
                        <NewsImge title="娱乐新闻" type="yule" count={16} width="100%" imgWidth="115px"/>
                        </div>


                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
}
export default NewsContainer