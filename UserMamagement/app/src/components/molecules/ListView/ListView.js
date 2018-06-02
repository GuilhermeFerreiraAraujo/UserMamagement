import React, { Component } from 'react';
import ListRow from 'Molecules/ListRow';
import './ListView.css';



class ListView extends Component {

    constructor(props){
        super(props);
    }




    renderListView(){
        return (
            <div>
                <ListRow isHeader={true}
                        addNew={this.props.addNew}
                        refresh={this.props.refresh} />
                {this.props.data.map(  data => {
                    return <ListRow data={data} 
                            handleClick={handle => this.props.handleSelection(data)} 
                            refresh={this.props.refresh}/>
                })}
            </div>
        );
    }

    render() {
      return (
        <div className="us-user-management-list-view">
  
             {this.renderListView()}
          
        </div>
      );
    }
  }
  export default ListView;
  