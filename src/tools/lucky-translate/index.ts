import { Moon } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.lucky-translate.title'),
  path: '/lucky-translate',
  description: translate('tools.lucky-translate.description'),
  keywords: ['translate', 'lucky', 'luckyNwa'],
  component: () => import('./lucky-translate.vue'),
  icon: Moon,
  createdAt: new Date('2024-05-17'),
});
