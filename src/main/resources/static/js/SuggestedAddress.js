/**
 * Created by smita on 7/9/17.
 */

const React = require('react');

const SuggestedAddress = React.createClass({

    renderData: function(suggestion){
        return(
            suggestion.map(function (suggestion, index) {
                return (

                        <div className="row" name="suggestionData">{suggestion.street_line}</div>

                )
            })
        )
    },

    render: function(){


        const suggestion = this.props.suggestion.suggestions;
        return(

            <div className="container">
                {suggestion  !== null ?
                this.renderData(suggestion) : null }
            </div>
        )





    }
});

module.exports = SuggestedAddress;
