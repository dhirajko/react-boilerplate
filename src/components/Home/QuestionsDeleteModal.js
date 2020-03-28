import React, {Component} from 'react';
import {MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter} from 'mdbreact';

class QuestionsDeleteModal extends Component {

    render() {
        const {
            isDeleteModalVisible,
            deleteModalHide
        } = this.props;

        return (
            <MDBContainer>
                <MDBModal isOpen={isDeleteModalVisible}>
                    <MDBModalHeader onClick={deleteModalHide}>Delete Item #</MDBModalHeader>
                    <MDBModalBody>
                        Are you sure you want to delete the entry?
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="default" className={'btn-sm'} onClick={deleteModalHide}>No</MDBBtn>
                        <MDBBtn color="danger" className={'btn-sm'}>Yes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default QuestionsDeleteModal;