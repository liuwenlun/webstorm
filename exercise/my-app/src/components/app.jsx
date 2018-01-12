import React from 'react';
import NewsHeader from "./news_header";
import  Footer from './news_footer'



class App extends React.Component{
    render(){
        return (
            <div>
                <NewsHeader/>
                {this.props.children}
                <Footer/>
            </div>


        )
    }
}
export default App;