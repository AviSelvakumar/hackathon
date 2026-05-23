/**
 * TODO:
 * - Fill out learn more
 * - Add sponsors section
 * - Add FAQ to learn more section
 * - Add footer section w/ social media links & contact info
 * - Implement email list
 * - Improve landing page; too plain!
 *  - Different colors for each section?
 */

"use client";

import { useEffect, useState } from 'react';
import { Button, Flex, Typography, ConfigProvider, Input, Form} from 'antd';
import useIllustrationTheme from './illustration_theme';
const { Title, Text} = Typography;
const CONTACT_EMAIL = 'sponsors@hackathon.com';

export default function Home() {
  const configProps = useIllustrationTheme();


  return (
    <ConfigProvider {...configProps}>
      <div className="app-container" id = "app-container">
        {/*Section 1 - Landing*/}
        <Flex vertical gap={16} align="center" justify="center" className='section landing' id = 'landing'>
          <Title level={1} style={{ marginBottom: 0 }} className='section-content'>Hackathon Name</Title>
          <Text className='section-content'>A one-month online hackathon for high school students.</Text>
          <Flex gap={16}>
            <Button type="primary" href='#register'>RSVP</Button>
            <Button type="default" href='#learn-more'>Learn More</Button>
          </Flex>
          <div className='scroll-down-arrow' aria-hidden>
            <Text className='scroll-down-text'>Scroll for timeline, prizes, & more!</Text>
            <img src="/arrow-down.svg" alt="Scroll Down" />
          </div>
        </Flex>
        {/*Section 2 - Learn More*/}
        <div className="wave-container-learn-more"></div>
        <Flex vertical gap={16} align="center" justify="center" style={{ height: '100vh' }} id='learn-more' className='section learn-more'>
          <Title level={2} style={{ marginBottom: 0 }} className='section-content'>Learn More</Title>
          <Text className='section-content'>Here is some information about the hackathon.</Text>
        </Flex>
        {/*Section 3 - Register*/}
        <Flex vertical gap={16} align="center" justify="center" style={{ height: '100vh' }} id='register' className='section register'>
          <div className="custom-shape-divider-top-1779565637">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
              </svg>
          </div>
          <Title level={2} style={{ marginBottom: 0 }} className='section-content'>Interested?</Title>
          <Text className='section-content'>Enter your email to get updates about the hackathon.</Text>
            <Form noValidate>
              <Flex gap={16}>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}>
                  <Input placeholder="Enter your email" style={{ width: 300 }} type="email"/>
                </Form.Item>
                <Button type="primary">Submit</Button>
              </Flex>
            </Form>
        </Flex>
        {/*Section 4 - Sponsors*/}
        <Flex vertical gap={16} align="center" justify="center" style={{ height: '100vh' }} id='sponsors' className='section sponsors'>
          <Title level={2} style={{ marginBottom: 0 }} className='section-content'>Sponsors</Title>
          <Text className='section-content'>Interested in sponsoring Hackathon Name? Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>!</Text>
        </Flex>
        {/*Section 5 - Footer*/}
        <div className="wave-container"></div>
        <Flex vertical gap={16} align="right" justify="top" id='footer' className='footer'>
          <Title level={2} className='footer-title' style={{ fontWeight: 900, color: '#2C2C2C', marginBottom: 0 }}>
            Hackathon Name
          </Title>
          <Text className='footer-text' style={{ color: '#2C2C2C' }}>Socials, Contact Info, etc.</Text>
        </Flex>
      </div>
    </ConfigProvider>
  );
}
