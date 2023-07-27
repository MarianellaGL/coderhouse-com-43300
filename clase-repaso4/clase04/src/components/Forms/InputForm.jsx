import PropTypes from 'prop-types';

const InputForm = ({ nombreDelLabel, onHandleData }) => {
    return (
        <>
            <label>{nombreDelLabel}</label>
            <input placeholder={nombreDelLabel} onChange={onHandleData} />
        </>
    );
}

InputForm.propTypes = {
    nombreDelLabel: PropTypes.string.isRequired,
    onHandleData: PropTypes.func.isRequired,
}

export default InputForm;