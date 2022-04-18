import React, { useState } from 'react';
import * as fetchers from '@core/api/fetchers';
import RecentlyGrid from './RecentlyGrid';
import ResultGrid from './ResultGrid';
import SearchInput from './SearchInput';

const SearchArea = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResult, setSearchResult] = useState<any[]>([]);

	const handleSearch = async (e) => {
		e.preventDefault();

		if (!searchQuery) return;

		const result = await fetchers.searchTracks(searchQuery);
		setSearchResult(result);
	};

	return (
		<div className="flex-ss mb-16 w-full">
			<div className="flex-ss col px-12 max-w-[820px]">
				<SearchInput
					value={searchQuery}
					onChange={(val) => setSearchQuery(val)}
					handleSearch={handleSearch}
				/>
				{searchResult.length > 0 && <ResultGrid data={searchResult} />}
				<RecentlyGrid showLabel={searchResult.length > 0} />
			</div>
		</div>
	);
};

export default SearchArea;
