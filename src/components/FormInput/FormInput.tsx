import { Controller, useFormContext } from "react-hook-form";
import {
	Asterisk,
	CustomInput,
	ErrorContainer,
	FormInputContainer,
	Label,
	LabelContainer,
} from "./styles";
import { FormInputPropsTypes } from "./types";

const FormInput = ({
	name,
	type,
	label,
	asterisk,
	placeholder = "Enter input",
}: FormInputPropsTypes) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();
	const errorMessage = String(errors?.[name]?.message ?? "");
	return (
		<FormInputContainer>
			<LabelContainer>
				{label && <Label>{label}</Label>}
				{asterisk && <Asterisk> * </Asterisk>}
			</LabelContainer>
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onChange } }) => (
					<CustomInput
						id={name}
						type={type}
						value={value}
						onChange={onChange}
						placeholder={placeholder}
					/>
				)}
			/>
			{errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
		</FormInputContainer>
	);
};

export default FormInput;
