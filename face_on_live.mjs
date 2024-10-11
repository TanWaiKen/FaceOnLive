import { client } from "@gradio/client";

const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
const exampleImage = await response_0.blob();
						
const app = await client("https://faceonlive-face-liveness-detection-sdk.hf.space/");
const result = await app.predict("/face_liveness", [
				exampleImage, 	// blob in 'parameter_4' Image component
	]);

console.log(result.data);
