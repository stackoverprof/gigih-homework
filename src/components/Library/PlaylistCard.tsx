import React, { useState } from 'react';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';
import usePlaylist from '@core/swr/usePlaylist';
import { Link } from 'react-router-dom';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	const [hover, setHover] = useState(false);
	const { playlist } = usePlaylist(data.id);

	const tracks = playlist?.tracks?.items || [];

	return (
		<Link
			to={`/playlist/${data.id}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="flex-sc py-8 pl-12 w-full border-b border-white border-opacity-10 transition cursor-pointer hover:bg-theme-pink hover:bg-opacity-5"
		>
			<CoverPlaylist images={data.images} />
			<div className="flex-bs col w-full h-40">
				<HeaderPlaylist data={data} hover={hover} />
				{tracks.length > 0 && <SliderTracks hover={hover} data={tracks} />}
			</div>
		</Link>
	);
};

export default PlaylistCard;
