import React from 'react';
import Autosuggest from 'react-autosuggest';

import $ from 'jquery-ajax';

const getSuggestionValue = suggestion => suggestion.namefirst + ' ' + suggestion.namelast;

const getSuggestions = value => {
  // const inputValue = value.trim().toLowerCase();
  // const inputLength = inputValue.length;

  // return inputLength === 0 ? [] : languages.filter(lang =>
  //   lang.name.toLowerCase().slice(0, inputLength) === inputValue
  // );
  return this.state.suggestions;
};

export default class AutoComplete extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      value: '',
        playerId: '',
	      suggestions: []
    	};
    }

  renderSuggestion(suggestion) {
    return (
      <div onClick={() => this.setState({playerId: suggestion.playerid})}>
        {suggestion.namefirst + ' ' + suggestion.namelast}
      </div>
  )};


  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested({ value }) {
    let that = this;
    $.ajax({
      url: "http://localhost:8000/api/players/search",
      data: {q: value},
      success: data => { that.setState({ suggestions: data.players }) }
    })
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
    // this.props.handleSelect(this.state.value);
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a player name',
      value,
      onChange: this.onChange.bind(this)
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={this.renderSuggestion.bind(this)}
          inputProps={inputProps}
        />
        <button onClick={() => this.props.handleSelect(this.state.playerId)}>GRAPH IT</button>
      </div>
    );
}
}

