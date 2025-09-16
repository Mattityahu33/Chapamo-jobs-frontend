import React from 'react';
import { Card, Steps, Divider, Typography, List, Space, Alert } from 'antd';
import { MailOutlined, SolutionOutlined, FileTextOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const Apply = () => {
  // Job requirements data (can be passed as props or fetched)
  const jobRequirements = {
    position: "Senior Software Engineer",
    level: "Mid-Senior Level",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of professional software development experience",
      "Proficiency in JavaScript/TypeScript and React.js",
      "Experience with backend technologies (Node.js, Python, or Java)",
      "Strong understanding of database systems (SQL and NoSQL)",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills"
    ],
    preferredSkills: [
      "Experience with microservices architecture",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Familiarity with CI/CD pipelines",
      "Contributions to open-source projects"
    ]
  };

  return (
    <div className="apply-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
      <Card title={<Title level={3}>How to Apply</Title>} bordered={false}>
        <Alert
          message="Important Application Notice"
          description="All applications must be submitted via email to careers@company.com with the specified subject format."
          type="info"
          showIcon
          style={{ marginBottom: '24px' }}
        />
        
        <Title level={4} style={{ marginTop: '0' }}>Application Process</Title>
        <Steps direction="vertical" current={0}>
          <Step 
            title="Prepare Your Application" 
            icon={<SolutionOutlined />}
            description={
              <Paragraph>
                Gather all required documents including your resume, cover letter, and any relevant portfolio or work samples.
              </Paragraph>
            } 
          />
          <Step 
            title="Compose Your Email" 
            icon={<MailOutlined />}
            description={
              <div>
                <Paragraph>
                  Send your application to <Text strong>careers@company.com</Text> with the following subject line:
                </Paragraph>
                <Text code>
                  Application for {jobRequirements.position} - [Your Full Name]
                </Text>
              </div>
            } 
          />
          <Step 
            title="Include Required Documents" 
            icon={<FileTextOutlined />}
            description={
              <Paragraph>
                Attach your resume (PDF format preferred), cover letter, and any additional materials requested in the job posting.
                Ensure all attachments are properly named (e.g., "JohnDoe_Resume.pdf").
              </Paragraph>
            } 
          />
          <Step 
            title="Confirmation" 
            icon={<CheckCircleOutlined />}
            description={
              <Paragraph>
                You will receive an automated confirmation email within 24 hours. Our HR team will review your application 
                and contact qualified candidates within 2-3 weeks.
              </Paragraph>
            } 
          />
        </Steps>

        <Divider />
        
        <Title level={4}>Position Requirements</Title>
        <Paragraph>
          <Text strong>Position:</Text> {jobRequirements.position}
        </Paragraph>
        <Paragraph>
          <Text strong>Experience Level:</Text> {jobRequirements.level}
        </Paragraph>
        
        <Title level={5}>Minimum Requirements:</Title>
        <List
          size="small"
          bordered
          dataSource={jobRequirements.requirements}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        
        <Title level={5} style={{ marginTop: '16px' }}>Preferred Skills:</Title>
        <List
          size="small"
          bordered
          dataSource={jobRequirements.preferredSkills}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        
        <Divider />
        
        <Title level={4}>Additional Information</Title>
        <Paragraph>
          <Space direction="vertical">
            <Text>
              <Text strong>Application Deadline:</Text> Open until filled
            </Text>
            <Text>
              <Text strong>Start Date:</Text> Flexible (2-4 weeks notice period accepted)
            </Text>
            <Text>
              <Text strong>Location:</Text> Remote (with occasional team meetups)
            </Text>
          </Space>
        </Paragraph>
        
        <Alert
          message="Equal Opportunity Employer"
          description="Our company is committed to creating a diverse environment and is proud to be an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, gender, gender identity or expression, sexual orientation, national origin, genetics, disability, age, or veteran status."
          type="success"
          style={{ marginTop: '24px' }}
        />
      </Card>
    </div>
  );
};

export default Apply;