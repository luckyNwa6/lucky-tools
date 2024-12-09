/*
 * @Author: Zhihui Zhou
 * @Date: 2024-05-20 09:58:08
 * @LastEditors: Zhihui Zhou
 * @LastEditTime: 2024-05-20 14:29:33
 * @Description:
 */
import { Currency } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.IEEE754-converter.title'),
  path: '/IEEE754-converter',
  description: translate('tools.IEEE754-converter.description'),
  keywords: ['hex', 'converter', '16', 'conversion', 'IEEE754', '十六进制', '单精度浮点数'],
  component: () => import('./IEEE754-converter.vue'),
  icon: Currency,
});
