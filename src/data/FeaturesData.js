import React from 'react';


import { GiFloatingTentacles } from "react-icons/gi";
import { GiEgyptianBird } from "react-icons/gi";
import { FiCloudLightning  } from "react-icons/fi";
import { RiMentalHealthFill } from "react-icons/ri";
import { WiDayWindy } from "react-icons/wi";
import { WiNightAltStormShowers  } from "react-icons/wi";

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;




export const featuresData = [
	{
		name: 'hold soil in place',
		description: 'Tree roots grow deep into the soil, holding it firmly in place, and help to prevent soil erosion, especially when growing on hillsides and other steep terrain',
		icon: iconStyle(GiFloatingTentacles),
		imgClass: 'one',
	},
	{
		name: 'animals are dependent',
		description: 'Trees provide important habitat for wildlife and are fundamental to many ecosystems on Earth.',
		icon: iconStyle(GiEgyptianBird),
		imgClass: 'two',
	},
	{
		name: 'save energy',
		description: 'Planted strategically, trees on a property near homes and other buildings can help to block wind and create shade. This helps to reduce the need for heating in the winter, and the need for cooling in the summer.',
		icon: iconStyle(FiCloudLightning),
		imgClass: 'three',
	},
	{
		name: ' mental wellness',
		description: 'A view of trees and green spaces from hospital windows has been found to increase the healing of patients, decrease our stress, and children do much better in school when they have a view of trees and green space and can spend time playing in nature.s',
		icon: iconStyle(RiMentalHealthFill),
		imgClass: 'four',
	},
	{
		name: 'clean the air',
		description: 'Trees intercept air pollutants like carbon monoxide, sulfur dioxide, nitrogen dioxide, ozone, and particulate matter',
		icon: iconStyle(WiDayWindy),
		imgClass: 'five',
	},
	{
		name: 'local water cycles',
		description:
			'Trees play a very important role in maintenance of local water cycles. Trees hold water, prevent flooding, recharge underground aquifers, and maintain water vapor in the atmosphere, increasing the opportunity for rainfall. ',
		icon: iconStyle(WiNightAltStormShowers),
		imgClass: 'six',
	},
];
