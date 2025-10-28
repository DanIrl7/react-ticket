import React from 'react';
import styled, { StyleSheetManager, keyframes } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { Link } from 'react-router-dom';

const LandingPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  text-align: center;
`;

const HeroSection = styled.section`
  background-color: var(--color-primary-dark);
  padding: var(--spacing-xxl) var(--spacing-lg);
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--box-shadow-md);
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-light);
`;

const WavyBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%23f4f7f6" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,160C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat center bottom;
  background-size: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: var(--color-text-light);
`;

const Title = styled.h1`
  font-size: var(--font-size-xxl);
  margin-bottom: var(--spacing-md);
  color: var(--color-white);
`;

const Description = styled.p`
  font-size: var(--font-size-large);
  margin-bottom: var(--spacing-xl);
  color: var(--color-gray-light);
`;

const CallToActionButton = styled.button`
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border: 3px solid var(--color-white);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-medium);
  cursor: pointer;
  margin: 0 var(--spacing-xs);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: var(--color-white);
    transform: translateY(-2px);
  }
`;

const DecorativeCircle = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && !['size', 'top', 'left', 'right', 'bottom', 'color'].includes(prop),
})`
  position: absolute;
  width: ${(props) => props.size || '100px'};
  height: ${(props) => props.size || '100px'};
  background-color: ${(props) => props.color || 'rgba(255, 255, 255, 0.1)'};
  border-radius: 50%;
  top: ${(props) => props.top || '20px'};
  left: ${(props) => props.left || '20px'};
  right: ${(props) => props.right || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  z-index: 0;
  opacity: 0.7;
`;

const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
`;

const FeatureBox = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-sm);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow-md);
  }

  h3 {
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-large);
  }

  p {
    color: var(--color-gray-dark);
    line-height: 1.6;
    font-size: var(--font-size-base);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  padding: var(--spacing-md);
  text-align: center;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-small);
`;

const TestimonialSection = styled.section`
  background-color: var(--color-gray-light);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-xl);
  text-align: center;
`;

const Testimonial = styled.div`
  background-color: var(--color-white);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--box-shadow-sm);
  margin: var(--spacing-md) auto;
  max-width: 600px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  font-size: var(--font-size-medium);
  color: var(--color-gray-dark);
  margin-bottom: var(--spacing-sm);
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  color: var(--color-primary-dark);
  font-size: var(--font-size-small);
`;

const StatisticsSection = styled.section`
  background-color: var(--color-white);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-xl);
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
`;

const StatItem = styled.div`
  padding: var(--spacing-sm);
`;

const StatNumber = styled.div`
  font-size: var(--font-size-xxl);
  font-weight: bold;
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-xs);
`;

const StatLabel = styled.div`
  font-size: var(--font-size-small);
  color: var(--color-gray-dark);
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;


function LandingPage() {
  return (
    <LandingPageContainer>
      <HeroSection>
        <DecorativeCircle size="150px" top="50px" left="10%" color="rgba(255, 255, 255, 0.3)" />
        <DecorativeCircle size="80px" bottom="30px" right="15%" color="rgba(255, 255, 255, 0.2)" />
        <HeroContent>
          <Title>Welcome to TicketApp</Title>
          <Description>
            Your ultimate solution for seamless ticket management. Create, view, edit, and delete tickets with ease.
          </Description>
          <div>
            <Link to="/auth/login">
            <CallToActionButton>Login</CallToActionButton>
            </Link>
            <Link to="/auth/signup">
            <CallToActionButton>Get Started</CallToActionButton>
            </Link>
          </div>
        </HeroContent>
        <WavyBackground />
      </HeroSection>

      <FeatureSection>
        <FeatureBox>
          <h3>Easy Ticket Creation</h3>
          <p>Quickly create new tickets with all necessary details and assign priorities.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Efficient Management</h3>
          <p>Manage all your tickets from a centralized dashboard with intuitive controls.</p>
        </FeatureBox>
        <FeatureBox>
          <h3>Real-time Updates</h3>
          <p>Stay informed with real-time status updates and notifications for all your tickets.</p>
        </FeatureBox>
      </FeatureSection>

      <TestimonialSection>
        <h2>What Our Users Say</h2>
        <Testimonial>
          <TestimonialText>"TicketApp has revolutionized how we handle support tickets. Our response time has improved by 60%!"</TestimonialText>
          <TestimonialAuthor>- Sarah Johnson, TechCorp</TestimonialAuthor>
        </Testimonial>
        <Testimonial>
          <TestimonialText>"The intuitive interface and powerful features make ticket management a breeze."</TestimonialText>
          <TestimonialAuthor>- Michael Chen, StartupInc</TestimonialAuthor>
        </Testimonial>
      </TestimonialSection>

      <StatisticsSection>
        <h2>Key Statistics</h2>
        <StatsGrid>
          <StatItem>
            <StatNumber>10,000+</StatNumber>
            <StatLabel>Tickets Managed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>99%</StatNumber>
            <StatLabel>Customer Satisfaction</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support Available</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatisticsSection>

      <Footer>
        &copy; 2025 TicketApp. All rights reserved.
      </Footer>
    </LandingPageContainer>
  );
}

export default LandingPage;
