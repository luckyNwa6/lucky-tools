import { Moon } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.lucky-pic-generation.title'),
  path: '/lucky-pic-generation',
  description: translate('tools.lucky-pic-generation.description'),
  keywords: ['pic', 'lucky', 'luckyNwa'],
  component: () => import('./lucky-pic-generation.vue'),
  icon: Moon,
  createdAt: new Date('2024-07-09'),
});
