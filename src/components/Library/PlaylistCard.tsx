import React, { useState } from 'react';
import * as fetchers from '@core/api/fetchers';
import CoverPlaylist from './CoverPlaylist';
import HeaderPlaylist from './HeaderPlaylist';
import SliderTracks from './SliderTracks';
import useSWR from 'swr';
import { Link } from 'react-router-dom';

interface Props {
	data: any;
}

const PlaylistCard = ({ data }: Props) => {
	const [hover, setHover] = useState(false);
	const { data: playlist } = useSWR(`/playlists/${data.id}`, () => fetchers.getPlaylist(data.id));

	const tracks = playlist?.tracks?.items || [];

	return (
		<Link
			to={`/library/${data.id}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className="flex-sc border-b cursor-pointer border-white border-opacity-10 py-8 pl-12 w-full hover:bg-theme-pink hover:bg-opacity-5 transition"
		>
			<CoverPlaylist images={data.images} />
			<div className="flex-bs col w-full h-40">
				<HeaderPlaylist data={data} hover={hover} />
				{tracks.length > 0 && <SliderTracks data={tracks} />}
			</div>
		</Link>
	);
};

export default PlaylistCard;
