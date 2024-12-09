import { TrafficCone } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.hex-converter.title'),
  path: '/hex-converter',
  description: translate('tools.hex-converter.description'),
  keywords: ['hex', 'converter', '10', '16', 'conversion', 'web', 'data'],
  component: () => import('./hex-converter.vue'),
  icon: TrafficCone,
});
