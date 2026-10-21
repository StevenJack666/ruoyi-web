import { defineStore } from 'pinia';
import { getConfigTitle } from '@/api/system';

interface SystemState {
    appTitle: string;
}

export const useSystemStore = defineStore('system', {
    state: (): SystemState => ({
        appTitle: import.meta.env.VITE_APP_TITLE,
    }),
    actions: {
        async fetchAppTitle() {
            try {
                const ret = await getConfigTitle({ key: 'system.config.title' });
                this.appTitle = ret?.data || import.meta.env.VITE_APP_TITLE;
                document.title = this.appTitle; // 更新网页标题
            } catch (error) {
                console.error('Failed to fetch app title:', error);
            }
        }
    }
});