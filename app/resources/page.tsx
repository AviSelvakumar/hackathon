"use client";

import { useEffect, useRef } from 'react';
import { ConfigProvider, Flex, Typography, Button } from 'antd';
import useIllustrationTheme from '../illustration_theme';

export default function ResourcePageClient() {
  const configProps = useIllustrationTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const scrollHeight = iframe.contentWindow?.document.body.scrollHeight;
      if (scrollHeight) {
        iframe.style.height = `${scrollHeight}px`;
      }
    };

    iframe.addEventListener('load', handleLoad);
    return () => iframe.removeEventListener('load', handleLoad);
  }, []);

  return (
    <ConfigProvider {...configProps}>
      <Button
        type="primary"
        href="/"
        style={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        Back to Home
      </Button>
      <Flex vertical gap={24} style={{ padding: 24 }}>
        <Typography.Title level={1} style={{ margin: 0 }}>
          Resources
        </Typography.Title>
        <Typography.Paragraph style={{ margin: 0, maxWidth: 640 }}>
          This page consists of links to resources that may be helpful for your hackathon project.
          These resources are not required to use, but they may be useful for learning new skills
          or finding inspiration.
        </Typography.Paragraph>
        <iframe
          ref={iframeRef}
          title="Resources"
          src="/resources.html"
          style={{ width: '100%', height: 'auto', border: 'none' }}
        />
      </Flex>
    </ConfigProvider>
  );
}