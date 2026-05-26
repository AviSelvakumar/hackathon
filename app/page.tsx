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
const CONTACT_EMAIL = 'sponsors@hackthearts.net';

export default function Home() {
  const configProps = useIllustrationTheme();


  return (
    <ConfigProvider {...configProps}>
      <div className="app-container" id = "app-container">
        {/*Section 1 - Landing*/}
        <Flex vertical gap={16} align="center" justify="center" className='section landing' id = 'landing'>
          <img src="/hta-logo.png" alt="Hack the Arts Illustration" className='landing-illustration' />
          <Title level={5} className='section-content' style={{fontWeight: 900, marginBottom: -24}}>Jul 1 - Aug 1</Title>
          <Title level={5} className='section-content' style={{ marginBottom: 0, fontWeight: 900 }}>A one-month online creative hackathon for all high school students.</Title>
          <Flex gap={16}>
            <Button type="primary" href='#register'>Register</Button>
            <Button type="default" href='#learn-more'>Learn More</Button>
          </Flex>
          {/*
          <div className='scroll-down-arrow' aria-hidden>
            <Text className='scroll-down-text'>Scroll for timeline, prizes, & more!</Text>
            <img src="/arrow-down.svg" alt="Scroll Down" />
          </div>
          */}
        </Flex>
        {/*Section 2 - Learn More*/}
        <div className="wave-container-learn-more"></div>
        <Flex vertical gap={16} align="center" justify="top" style={{ height: '100vh'}} id='learn-more' className='section learn-more'>
            <Flex vertical gap={16} align="center" justify="center" className='prompt-container'>
              <Title level={2} style={{ marginBottom: 0, fontWeight: 900 }} className='section-content'>The Prompt</Title>
              <Text className='prompt'>Invent entirely new ways of creating art that wouldn't exist without technology.</Text>
            </Flex>
          <Flex vertical gap={16} align="center" justify="center" className='prompt-container'>
          <Text className='prompt-desc'>Think beyond just drawing apps. What if you could create art that responds to sound, moves with the wind, or tells a story through interaction? Some ideas: </Text>
          <ul className='prompt-ideas'>
            <li>A canvas that gets painted by sound</li>
            <li>Art that evolves based on user emotions</li>
            <li>A digital mural that multiple people can paint simultaneously from different locations</li>
            <li>Art that reacts to your heartbeat or movement</li>
            <li>A drawing tool controlled entirely by gestures</li>
            <li>A visualization of your daily life turned into abstract art</li>
          </ul>
          <Text className='prompt-desc'>The possibilities are endless! We encourage you to think outside the box and create something truly unique.</Text>
        </Flex>
        </Flex>
        {/*Section 3 - Register*/}
        <Flex vertical gap={16} align="center" justify="center" style={{ height: '100vh' }} id='register' className='section register'>
          <div className="custom-shape-divider-top-1779565637">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
              </svg>
          </div>
          <Title level={2} style={{ marginBottom: 0, fontWeight: 900 }} className='section-content'>Interested?</Title>
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
          <Title level={2} style={{ marginBottom: 0, fontWeight: 900 }} className='section-content'>Sponsors</Title>
          <Text className='section-content'>Interested in sponsoring Hack the Arts? Contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>!</Text>
        </Flex>
        {/*Section 5 - Footer*/}
        <div className="wave-container"></div>
        <Flex vertical gap={16} align="left" justify="bottom" id='footer' className='footer'>
          <img src="/hta-logo.png" alt="Hack the Arts Logo" className='footer-logo' />
          <Flex gap={16} align="right" justify="top">
            <a href="https://www.instagram.com/hackthearts/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="social-icon" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg>
            </a>
            <a href="https://twitter.com/hackthearts" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="social-icon" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@hackthearts" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="social-icon" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg>
            </a>
          </Flex>
          <Flex vertical gap={0} align="left" justify="bottom">
            <Text className='footer-text' style={{ color: '#2C2C2C' }}>© 2026 Hack the Arts. All rights reserved.</Text>
            <Text className='footer-text' style={{ color: '#2C2C2C', marginTop: '10px' }}>Hack the Arts is pending fiscal sponsorship by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</Text>
          </Flex>
        </Flex>
      </div>
    </ConfigProvider>
  );
}
