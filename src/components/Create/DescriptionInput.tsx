import React, { ChangeEventHandler } from 'react';

interface Props {
	value: string;
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

const TitleInput = ({ value, onChange }: Props) => {
	return (
		<div className="flex-cc pl-10 w-full">
			<textarea
				placeholder="Write the description here..."
				className="px-2 py-2 w-full bg-black bg-opacity-0 rounded-md opacity-40 resize-none focus:bg-opacity-100 placeholder:text-white focus:opacity-100"
				value={value}
				onChange={onChange}
				name=""
				id=""
			></textarea>
		</div>
	);
};

export default TitleInput;

