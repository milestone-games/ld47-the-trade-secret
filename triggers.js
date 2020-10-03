import {Trigger} from "./TriggerController.js"
import {TriggerType} from "./Constants.js"

export const Triggers = [

	new Trigger(TriggerType.bring, "alarmSpot",(g)=>{
		if (!g.getSwitch("alarmVisited")) {
			console.log("Alarm hi")
			g.setSwitch("alarmVisited")
		}
	}),
];