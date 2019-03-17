import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { addField, translate } from 'ra-core';

import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import TextInput from './TextInput';

class PasswordInput extends Component {
    state = {
        hidden: this.props.initiallyHidden,
    };

    toggleVisibility = () => {
        this.setState(state => ({ hidden: !state.hidden }));
    };

    render() {
        const { translate, ...rest } = this.props;
        const { hidden } = this.state;

        return (
            <TextInput
                {...rest}
                type={hidden ? 'password' : 'text'}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={translate('ra.input.password.toggle_visibility')}
                                onClick={this.toggleVisibility}
                            >
                                {hidden ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        );
    }
}

PasswordInput.propTypes = {
    translate: PropTypes.func.isRequired,
    initiallyHidden: PropTypes.bool,
};

PasswordInput.defaultProps = {
    initiallyHidden: true,
};

export default compose(
    translate,
    addField,
)(PasswordInput);
