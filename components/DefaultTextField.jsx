import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const MyTextField = styled(TextField)(({ theme }) => ({
	'& .MuiOutlinedInput-root': {
		borderRadius: '5px', // Use the theme's borderRadius value
		'&:hover fieldset': {
			borderColor: '#874BF6', // Border color on hover
		},
		'&.Mui-focused fieldset': {
			borderColor: 'pu#874BF6rple', // Border color on focus
		},
	},
}));

const DefaultTextField = ({ placeholder, value, onChange }) => {
	return (
		<MyTextField
			type='text'
			placeholder={placeholder}
			variant="outlined"
			small="true"
			fullWidth
			value={value}
			onChange={onChange}
		/>
	);
};

export default DefaultTextField;
