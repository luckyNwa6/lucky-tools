/*
 * @Author: Zhihui Zhou
 * @Date: 2024-05-17 17:15:15
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-21 10:26:51
 * @Description: 
 */
import { ManualGearbox } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: 'CRC16校验',
  path: '/crc16-modbus',
  description: "循环冗余校验",
  keywords: ['hex', 'converter', 'modbus', 'web','crc'],
  component: () => import('./crc16-modbus.vue'),
  icon: ManualGearbox,
});