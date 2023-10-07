import { AppDispatchT } from '@/redux/store';
import { useDispatch } from 'react-redux'

export const useTypedDispatch: () => AppDispatchT = useDispatch;
