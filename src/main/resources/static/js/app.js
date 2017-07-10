/**
 * Created by smita on 7/7/17.
 */

const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const test = document.getElementById('test');

const SuggestedAddress = require('./SuggestedAddress');

const App = React.createClass({

    getInitialState : function(){
      return{
          myAddress: "",
          myCity: "",
          myState: "",
          zipCode: "",
      }
    },

    // addressValidate(){
    //     $.ajax({
    //         url: "https://us-street.api.smartystreets.com/street-address?auth-id=33a6d4b4-3856-e28f-c6f1-f73339782421&auth-token=VKewr7qDwaDu6hNbTOKv&candidates=10&street=9945%20warshire%20dr&city=st%20ouis&state=&zipcode=63132&%27",
    //         datatype: "json",
    //         success: function(data){
    //             this.setState({validateData: data});
    //         }.bind(this),
    //         error: function(xhr, status, err){
    //             console.log(err.toString());
    //         }.bind(this)
    //     });
    // },

    addressSuggestion(event){
        const line1 = event.target.value;
        $.ajax({
            url: "https://us-autocomplete.api.smartystreets.com/suggest?auth-id=33a6d4b4-3856-e28f-c6f1-f73339782421&auth-token=VKewr7qDwaDu6hNbTOKv&prefix="+line1,
            datatype: "json",
            success: function(data){
                this.setState({suggestionData: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err.toString());
            }.bind(this)
        });
    },

    render : function () {
        const validationData = this.state.validateData;

        return (
            <div>
                <div>
                <label>
                    Address
                    <input type="text" name="addressLine1" onChange={this.addressSuggestion}></input>
                </label>
                <label>
                    City
                    <input type="text" name="city" value={this.state.myCity}></input>
                </label>
                <label>
                    State
                    <input type="text" name="state" value={this.state.myState}></input>
                </label>
                <label>
                    Zip Code
                    <input type="text" name="zipCode" value={this.state.zipCode}></input>
                </label>
                <button type="submit">Submit</button>

                {/*{typeof validationData != "undefined" ?*/}
                {/*<div>{validationData[0].delivery_line_1}</div> : null*/}
                {/*}*/}

                </div>

                {typeof this.state.suggestionData != "undefined" ?
                    <SuggestedAddress suggestion={this.state.suggestionData}/>
                     : null
                }

            </div>
        );
    }
});

ReactDOM.render(
    <App></App>, test
);