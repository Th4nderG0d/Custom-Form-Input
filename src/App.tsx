import { FormProvider, useForm } from "react-hook-form";
import FormInput from "./components/FormInput/FormInput";

function App() {
	const methods = useForm({
		defaultValues: { customInput: "" },
	});

	return (
		<FormProvider {...methods}>
			<FormInput
				type={"text"}
				name={"customInput"}
				label={"Custom Input"}
				asterisk
			/>
		</FormProvider>
	);
}

export default App;
