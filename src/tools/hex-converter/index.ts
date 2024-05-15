import { TrafficCone } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: '十六进制大小端处理',
  path: '/hex-converter',
  description: "十进制与十六进制数据在大小端状态下的互相转化。",
  keywords: ['hex', 'converter', '10', '16', 'conversion', 'web', 'data'],
  component: () => import('./hex-converter.vue'),
  icon: TrafficCone,
});