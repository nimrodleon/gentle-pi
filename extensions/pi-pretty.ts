import piPrettyModule from "@heyhuynhgiabuu/pi-pretty";

const piPrettyExtension =
	typeof piPrettyModule === "function"
		? piPrettyModule
		: piPrettyModule.default;

export default piPrettyExtension;
