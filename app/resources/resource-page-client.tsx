"use client";

import { Button, Collapse, ConfigProvider, Flex, Form, Input, Typography } from 'antd';
import useIllustrationTheme from '../illustration_theme';

export default function ResourcePageClient() {
  const configProps = useIllustrationTheme();

  return (
    <ConfigProvider {...configProps}>
      <Flex vertical gap={24} style={{ padding: 24 }}>
        <Typography.Title level={1} style={{ margin: 0 }}>
          Resources
        </Typography.Title>
        <Typography.Paragraph style={{ margin: 0, maxWidth: 640 }}>
          This page consists of links to resources that may be helpful for your hackathon project. These resources are not required to use, but they may be useful for learning new skills or finding inspiration.
        </Typography.Paragraph>
        <Collapse
          items={[
            {
              key: '1',
              label: 'Libraries and Tools',
              children: (<ul>
                <li><a href="https://p5js.org/">p5.js</a> - A JavaScript library for creative coding. p5 offers many beginner-oriented tutorials and examples on their website. The library itself is also designed to be easy to learn and use.</li>
              </ul>
              ),
            },
          ]}
        />
      </Flex>
    </ConfigProvider>
  );
}
