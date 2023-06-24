import type {Meta, StoryObj} from "@storybook/react";
import Card from "./index";

export default {
	title: "Components/Display/Card",
	tags: ["autodocs"],
	component: Card,
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
};

type Story = StoryObj<typeof Card>;

export const Light: Story = {
	name: `Light`,
	args: {
		variant: `default`,
		color: `primary`,
	},
	render: args => (
		<div className={`bg-white p-5`}>
			<Card {...args}>
				<div>
					<h2 className="text-2xl mb-4">Default Primary card</h2>
					<p>This is the content of the card.</p>
				</div>
			</Card>
		</div>
	),
};

export const Dark: Story = {
	name: `Dark`,
	args: {
		variant: `default`,
		color: `primary`,
	},
	render: args => (
		<div className={`dark bg-black p-5`}>
			<Card {...args}>
				<div>
					<h2 className="text-2xl mb-4">Default Primary card</h2>
					<p>This is the content of the card.</p>
				</div>
			</Card>
		</div>
	),
};
