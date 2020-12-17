import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class ModalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      visible: false,
    };
  }
  

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Modal
          visible={visible}
          title={this.props.title}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          {this.props.form}
        </Modal>
      </>
    );
  }
}

export default ModalForm;