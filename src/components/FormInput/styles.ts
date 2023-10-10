import styled from "styled-components";

export const FormInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px;
`;

export const CustomInput = styled.input`
	display: flex;
	border-radius: 8px;
	height: 30px;
	border: 1px solid #549afe;
	padding: 2px 12px;
	font-size: 14px;
	color: #050505;

	&focus: {
		border: 2px solid #2a81fe;
	}
`;

export const Label = styled.label`
	color: #0f54b8;
	font-size: 14px;
	font-weight: 500;
	margin-right: 5px;
`;

export const LabelContainer = styled.div`
	display: flex;
	margin-bottom: 1px;
`;

export const Asterisk = styled.span`
	color: red;
`;

export const ErrorContainer = styled.span`
	color: red;
	margin-top: 2px;
	font-size: 12px;
`;
