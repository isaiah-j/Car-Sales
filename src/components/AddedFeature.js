import React from 'react';
import { connect } from 'react-redux'
import { deleteFeature } from '../redux/carActions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.deleteFeature(props.id, props.feature.price)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return { state }
}
export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
