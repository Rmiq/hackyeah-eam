import React,{Component} from "react";
import "./styles.scss"

class SuccessPage extends Component{
    render(){
        return(
            <div className="thankyou"><div><h2 className="thankyou-header">
                
                Dziękujemy za rezerwacje!
                </h2><p className="thankyou-paragraph">W przyszłości zaprezentujemy bardziej złożony proces rezerwacji, dzięki e-skierowaniu :)</p></div></div>
        )
    }
}

export default SuccessPage;