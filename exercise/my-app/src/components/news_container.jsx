import React from 'react';
import {Link} from 'react-router'
import {
    Carousel,
    Row,
    Col

} from 'antd'



import carousel_1 from '../images/carousel_1.jpg'
import carousel_2 from '../images/carousel_2.jpg'
import carousel_3 from '../images/carousel_3.jpg'
import carousel_4 from '../images/carousel_4.jpg'

class NewsContainer extends React.Component{
    render(){
        return (
            <div className="container">
                <Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <div className="leftContainer">
                            < Carousel autoplay>
                                <div><img src={carousel_1} alt=""/> </div>
                                <div><img src={carousel_2} alt=""/> </div>
                                <div><img src={carousel_3} alt=""/> </div>
                                <div><img src={carousel_4} alt=""/> </div>
                            </Carousel>
                        </div>
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>




        )
    }
}
export default NewsContainer;