import React from 'react';
import Autosuggest from 'react-autosuggest';

import $ from 'jquery-ajax';

const getSuggestionValue = suggestion => suggestion.namefirst + ' ' + suggestion.namelast;

const getSuggestions = value => {
  return this.state.suggestions;
};

export default class AutoComplete extends React.Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      value: '',
        playerId: 'aaronha01',
	      suggestions: []
    	};
    }

  renderSuggestion(suggestion) {
    return (
      <div className="suggestion" onClick={() => this.setState({playerId: suggestion.playerid})}>
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
      url: "https://baseball-db.herokuapp.com/api/players/search",
      data: {q: value},
      success: data => { that.setState({ suggestions: data.players }) }
    })
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a player name',
      value,
      onChange: this.onChange.bind(this)
    };

    if (this.props.tab === 1) {
      return (
        <div className="autocomplete">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion.bind(this)}
            inputProps={inputProps}
          />
          <button onClick={() => this.props.handleSelect(this.state.playerId)}>
            Graph
          </button>
        </div>
      );
    } else {
      return (
        <div className="autocomplete ruth">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={this.renderSuggestion.bind(this)}
            inputProps={inputProps}
          />
          <button onClick={() => this.props.handleSelect(this.state.playerId)}>Calculate</button>
        </div>
        )
    }
  }
}

