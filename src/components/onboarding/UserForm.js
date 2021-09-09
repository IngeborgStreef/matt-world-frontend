import React, {Component} from "react";
import FormParentDetails from "./FormParentDetails";
import FormChildDetails from "./FormChildDetails";
import FormAvatarUpload from "./FormAvatarUpload";

// import FormAvatarUpload from "./FormAvatarUpload";

export class UserForm extends Component {
    state = {
        step: 1,
        parent: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatar: ''
        },
        child: {
            name: '',
            dateOfBirth: ''
        }
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    updateParent = parent => {
        this.setState({parent: parent})
        //create/update parent

    }

    updateChild = child => {
        this.setState({child: child})
        //create/update Child
    }

    render() {
        const {step} = this.state;

        switch (step) {
            case 1:
                return (
                    <FormParentDetails
                        nextStep={this.nextStep}
                        updateParent={this.updateParent}
                        values={this.state.parent}
                    />
                )
            case 2:
                return (
                    <FormAvatarUpload
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        updateParent={this.updateParent}
                        values={this.state.parent}
                    />
                )
            case 3:
                return (
                    <FormChildDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        updateChild={this.updateChild}
                        values={this.state.child}
                    />
                )
            case 4:
                return <FormAvatarUpload title="Kind"/>
            case 5:
                return <h1>Uw gegevens zijn succesvol verstuurd</h1>
        }
    }
}

export default UserForm;