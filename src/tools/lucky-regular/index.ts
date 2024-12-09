import { Sun } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.lucky-regular.title'),
  path: '/lucky-regular',
  description: translate('tools.lucky-regular.description'),
  keywords: ['regular', 'lucky', 'luckyNwa'],
  component: () => import('./lucky-regular.vue'),
  icon: Sun,
  createdAt: new Date('2024-12-09'),
});
