import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '最光阴',
			defaultLocale: 'zh-CN',
			head: [
				{
					tag: 'script',
					attrs: {
						src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
						defer: true,
					}
				}
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '学习',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Markdown语法', link: '/study/markdown/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: '工具库',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '编程', link: '/tools/tools/' },
					],
				},
			],
		}),
	],
});
