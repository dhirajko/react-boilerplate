import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import VideoRecorder from 'react-video-recorder'

class QuestionsRecordModal extends Component {
    render() {
        const {
            isRecordModalVisible,
            recordModalHide
        } = this.props;

        return (
            <MDBContainer>
                <MDBModal isOpen={isRecordModalVisible}>
                    <MDBModalHeader onClick={recordModalHide}>Record new</MDBModalHeader>
                    <MDBModalBody>
                        <VideoRecorder />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={recordModalHide}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default QuestionsRecordModal;