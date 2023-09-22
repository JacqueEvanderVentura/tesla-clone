import { ReactNode } from "react";
import classNames from "classnames";

interface HeadingProps {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
	children: ReactNode;
	className?: string;
}

export default function Heading({
	level = 2,
	children,
	className,
}: HeadingProps): JSX.Element {
	const sizes = [
		"text-5xl",
		"text-4xl",
		"text-3xl",
		"text-2xl",
		"text-xl",
		"text-lg",
	];

	if (level >= 1 && level <= 6) {
		const headingClasses = classNames("font-bold mb-4", className);
		const sizeClass = sizes[level - 1];

		const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

		return (
			<HeadingTag className={classNames(headingClasses, sizeClass)}>
				{children}
			</HeadingTag>
		);
	} else {
		return <span>Invalid heading level</span>;
	}
}
