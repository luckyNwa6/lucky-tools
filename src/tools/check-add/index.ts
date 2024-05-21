/*
 * @Author: Zhihui Zhou
 * @Date: 2024-05-21 09:39:01
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-21 09:41:22
 * @Description: 
 */
import { TrafficCone } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: '计算校验和',
  path: '/check-add',
  description: "计算一个数组中一段特定范围内的累加和和异或和",
  keywords: ['hex', 'converter', '16', 'Check', 'add', 'data','校验','校验和'],
  component: () => import('./check-add.vue'),
  icon: TrafficCone,
});