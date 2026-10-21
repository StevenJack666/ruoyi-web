import type { GetConfigTitleParams } from './types';
import { get } from '@/utils/request';

export function getConfigTitle(params: GetConfigTitleParams) {
    return get(`/system/config/configKey/${params.key}`).json();
}