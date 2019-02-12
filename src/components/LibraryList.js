import react, { Component } from 'react';
import { connect } from 'react-native';

class LibraryList extends Component {
    render() {
        
        return;
    }
}

const mapStateToProps = state => {
    console.log(state.libraries);
};

export default connect()(LibraryList);