import { useEffect } from 'react';
import { syncToken } from '@core/redux/actions/auth';
import { useDispatch } from 'react-redux';

const useSession = () => {
	const dispatch = useDispatch();
	// [TODO] : handle token expiration
	return useEffect(() => {
		dispatch(syncToken());
	}, [dispatch]);
};

export default useSession;
