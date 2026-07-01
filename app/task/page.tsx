"use client";

import { ConfigProvider, Flex, Typography, Button } from 'antd';
import useIllustrationTheme from '../illustration_theme';

const { Title, Paragraph } = Typography;

const rubric = [
  {
    title: 'Creativity & Originality',
    weight: '30%',
    color: '#ff5050',
    body: "How creative is your project? We should be able to tell it's yours. The purpose of this category is to encourage participants to create novel projects. Make something that hasn't been done before. Not only will you earn more points by being original, but you will also enjoy the process much more. In addition to being an original idea, part of originality is not being overreliant on the use of AI. Projects that appear to have minimal human involvement, and look entirely AI-generated would not receive a high score in this category. A helpful tip for determining if you are overreliant on AI is to ask yourself as you program \"Could I make a simple change to my app in less than 5 minutes without the help of AI?\" The definition of simple might vary depending on your project, but using this rule to guide you should help you manage AI use.",
  },
  {
    title: 'Use of Technology',
    weight: '25%',
    color: '#048A81',
    body: 'Does the project meaningfully leverage code? This category is intended to reward participants who create projects that are not only technically impressive, but also use libraries / code in a way that makes sense. For example, a project that simply integrates a machine learning model just for the sake of adding the label "AI Powered" wouldn\'t score high in this category. However, using a machine learning model in a way that is integral to the project, such as hand pose detection, might earn a better score.',
  },
  {
    title: 'Interactivity & Experience',
    weight: '20%',
    color: '#7EB2DD',
    body: "Is the project engaging and / or immersive? While it's possible to create incredible graphics using technology, the focus of this hackathon is to make it immersive as well. People viewing your project should be able to interact with it in some way. This isn't limited to just standard keyboard and mouse input!",
  },
  {
    title: 'Execution',
    weight: '15%',
    color: '#FFD93D',
    body: 'How polished and functional is your app? A high-scoring project should have a user interface that is nice to look at. In addition, it should also have reasonable performance on a standard consumer laptop.',
  },
  {
    title: 'Theme Alignment',
    weight: '10%',
    color: '#ff8c42',
    body: "Does the project align with the theme? This year's task is focused around the theme \"create art that wouldn't exist without technology.\" We aren't looking for just another drawing app, nor are we looking for something incredibly complex. Your submission should be something that can't be replicated with a paper and pencil. It should be creative, and most importantly, it should be you.",
  },
];

export default function TaskPage() {
  const configProps = useIllustrationTheme();

  return (
    <ConfigProvider {...configProps}>
      <div style={{ backgroundColor: '#fffddd', minHeight: '100vh' }}>
        <Button
          type="primary"
          href="/"
          style={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}
        >
          Back to Home
        </Button>

        {/* Hero */}
        <Flex vertical align="center" justify="center" style={{ padding: '72px 24px 48px', textAlign: 'center' }}>
          <Title level={1} style={{ margin: '0 0 16px', fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            About the Task
          </Title>
          <Paragraph className="prompt-desc" style={{ maxWidth: 640, margin: '0 auto 12px' }}>
            Welcome to this Hack the Arts! You'll have 1 month to design and build a project from scratch, working solo or in a team. There's no fixed tech stack: use whatever languages, frameworks, or tools best fit your idea.
          </Paragraph>
          <Paragraph className="prompt-desc" style={{ maxWidth: 640, margin: '0 auto' }}>
            At the end of the event, you'll submit your project along with a short writeup and / or demo showing how it works. Judging will be based on the rubric below, so it's worth reading through each category carefully before you start building. Above all, we want to see something that reflects your own creativity and skills — have fun with it!
          </Paragraph>
        </Flex>

        {/* Rubric section */}
        <div style={{ backgroundColor: '#048A81', padding: '48px 24px 64px' }}>
          <Flex vertical gap={24} style={{ maxWidth: 800, margin: '0 auto' }}>
            <Flex vertical align="center" gap={4} style={{ marginBottom: 8 }}>
              <Title level={2} style={{ margin: 0, color: '#fffddd' }}>Rubric Breakdown</Title>
              <Paragraph style={{ margin: 0, color: '#fffddd', opacity: 0.85, fontSize: 17 }}>
                The rubric is split into 5 categories:
              </Paragraph>
            </Flex>
            
            {rubric.map(({ title, weight, color, body }) => (
              <div
                key={title}
                style={{
                  backgroundColor: '#fffddd',
                  border: '3px solid #2C2C2C',
                  borderRadius: 12,
                  boxShadow: '5px 5px 0 #2C2C2C',
                  overflow: 'hidden',
                }}
              >
                {/* Card header strip */}
                <div style={{ backgroundColor: color, borderBottom: '3px solid #2C2C2C', padding: '10px 24px' }}>
                  <Flex align="center" justify="space-between" gap={12}>
                    <Title level={3} style={{ margin: 0, color: '#2C2C2C' }}>{title}</Title>
                    <span style={{
                      fontSize: 28,
                      fontWeight: 800,
                      fontFamily: 'var(--font-climate-crisis), sans-serif',
                      color: '#2C2C2C',
                      whiteSpace: 'nowrap',
                    }}>
                      {weight}
                    </span>
                  </Flex>
                </div>
                {/* Card body */}
                <Paragraph className="prompt-desc" style={{ margin: 0, padding: '16px 24px' }}>
                  {body}
                </Paragraph>
              </div>
            ))}
          </Flex>
        </div>
      </div>
    </ConfigProvider>
  );
}
