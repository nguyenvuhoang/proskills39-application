import type { Settings } from '@/types';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import client from './client';
import { API_ENDPOINTS } from './client/endpoints';

export const useSettings = () => {

    const { locale } = useRouter();

    const formattedOptions = {
        language: locale,
    };
    const { data, isLoading, error } = useQuery<Settings, Error>(
        [API_ENDPOINTS.SETTINGS, formattedOptions],
        ({ queryKey, pageParam }) =>
            client.settings.all(Object.assign({}, queryKey[1], pageParam))
    );

    return {
        settings: data?.options,
        isLoading,
        error,
    };
}