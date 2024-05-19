import { Moon } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: '翻译',
  path: '/lucky-translate',
  description: '调用百度Api实现翻译,额度有限,禁止乱用！感谢配合',
  keywords: ['translate', 'lucky', 'luckyNwa'],
  component: () => import('./lucky-translate.vue'),
  icon: Moon,
  createdAt: new Date('2024-05-17'),
});
