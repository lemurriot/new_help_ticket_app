import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){
  console.log(props.ticketList);
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    padding: '25px',
    margin: '0 25px'
  };
  return (
    <div style={myStyledComponentStyles}>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}
          onTicketSelection={props.onTicketSelection}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
