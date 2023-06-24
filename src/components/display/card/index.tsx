import {PropsWithChildren} from "react";

interface ICardProps {
	/**
	 * **Invisible** variant can't have color props
	 *
	 * Default: default
	 */
	variant?: `default` | `outline` | `inline` | `invisible`;
	/**
	 * Default: primary
	 */
	color?: `primary` | `secondary` | `accent` | `tracker`;
	/**
	 * Default: p-6
	 */
	padding?: string;
	className?: string;
}
//
export default function Card(props: PropsWithChildren<ICardProps>) {
	let className = `rounded-md`;
	className += props.padding ? ` ${props.padding}` : ` p-6`;
	className += props.className ? ` ${props.className}` : ``;

	if (!props.variant || props.variant === `default`) {
		if (!props.color || props.color === `primary`) {
			className += ` bg-black text-white dark:bg-white dark:text-black`;
		} else if (props.color === `secondary`) {
			className += ` bg-neutral-800`;
		} else if (props.color === `accent`) {
			className += ` bg-indigo-500`;
		} else if (props.color === `tracker`) {
			className += ` bg-amber-500`;
		}
	}

	if (props.variant === `outline`) {
		className += ` bg-white dark:bg-black border border-[1px]`;

		if (!props.color || props.color === `primary`) {
			className += ` border-black dark:border-white text-black dark:text-white`;
		} else if (props.color === `secondary`) {
			className += ` border-neutral-300 dark:border-neutral-800 text-black dark:text-white`;
		} else if (props.color === `accent`) {
			className += ` border-indigo-500 text-indigo-500`;
		} else if (props.color === `tracker`) {
			className += ` border-amber-500 text-amber-500`;
		}
	}

	if (props.variant === `inline`) {
		className += ` shadow-inline`;
		if (!props.color || props.color === `primary`) {
			className += ` bg-white text-black`;
		} else if (props.color === `secondary`) {
			className += ` bg-neutral-800`;
		} else if (props.color === `accent`) {
			className += ` bg-indigo-500`;
		} else if (props.color === `tracker`) {
			className += ` bg-amber-500`;
		}
	}

	if (props.variant === `invisible`) className += ` bg-transparent text-black dark:text-white`;

	return <div className={className}>{props.children}</div>;
}
