const CONVERSIONS = {
	FT_TO_M: 0.305,
	M_TO_FT: 3.281,
	GAL_TO_L: 3.785,
	L_TO_GAL: 0.264,
	LBS_TO_KG: 0.454,
	KG_TO_LBS: 2.205,
}

const FT_TO_M = "FT_TO_M"
const M_TO_FT = "M_TO_FT"
const GAL_TO_L = "GAL_TO_L"
const L_TO_GAL = "L_TO_GAL"
const LBS_TO_KG = "LBS_TO_KG"
const KG_TO_LBS = "KG_TO_LBS"


function convert(amount,unit) {
	return (amount * CONVERSIONS[unit]).toFixed(3)
}

function render(el, input, unitM, unitI, outputMtoI, outputItoM) {
	//el - element to render into - must be writable via textContent
	//input - the input amount
	//unitM - the Metric unit
	//unitI - the Imperial unit
	//outputMtoI - the output when converted from Metric to Imperial
	//outputItoM - the output when converted from Imperial to Metric
	el.textContent = `${input} ${unitM} = ${outputMtoI} ${unitI} | ${input} ${unitI} = ${outputItoM} ${unitM}`
}

function displayConvertedLength(num) {
	const lenOutput = document.getElementById("length-output");
	render(lenOutput,num,"meters","feet",convert(num,M_TO_FT),convert(num,FT_TO_M));
}

function displayConvertedVolume(num) {
	const volumeOutput = document.getElementById("volume-output");
	render(volumeOutput,num,"liters","gallons",convert(num,L_TO_GAL),convert(num,GAL_TO_L));
}

function displayConvertedMass(num) {
	const massOutput = document.getElementById("mass-output");
	render(massOutput,num,"kilos","pounds",convert(num,KG_TO_LBS),convert(num,LBS_TO_KG));
}

document.getElementById("convert-btn").addEventListener("click", () => {
	const inputEl = document.getElementById("unit-input");
	const num = Number(inputEl.value);
	if(Number.isNaN(num)) {
		num = 1;
		inputEl.value = 1;
	}
	displayConvertedLength(num);
	displayConvertedVolume(num);
	displayConvertedMass(num);
})