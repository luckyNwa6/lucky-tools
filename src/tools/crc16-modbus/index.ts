import { ManualGearbox } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: 'CRC16/MODBUS 校验',
  path: '/crc16-modbus',
  description: "循环冗余校验",
  keywords: ['hex', 'converter', 'modbus', 'web','crc'],
  component: () => import('./crc16-modbus.vue'),
  icon: ManualGearbox,
});