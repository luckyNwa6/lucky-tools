import { ManualGearbox } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.lcrc16-modbus.title'),
  path: '/crc16-modbus',
  description: translate('tools.crc16-modbus.description'),
  keywords: ['hex', 'converter', 'modbus', 'web', 'crc'],
  component: () => import('./crc16-modbus.vue'),
  icon: ManualGearbox,
});
