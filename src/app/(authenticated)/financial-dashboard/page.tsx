'use client'

import { Typography, Row, Col, Card, Spin } from 'antd'
import {
  DollarCircleOutlined,
  FileTextOutlined,
  BankOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function FinancialDashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: userData, isLoading } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: {
      invoices: true,
      expenses: true,
      bankReconciliations: true,
      financialInsights: true,
    },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Financial Dashboard</Title>
      <Paragraph>
        Manage all financial aspects of your business, including ledgers,
        expenses, invoices, and bank reconciliations. AI automates routine tasks
        and provides insights for better financial decision-making.
      </Paragraph>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Ledger and Journal Management"
            bordered={false}
            hoverable
          >
            <FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Paragraph>Manage your ledgers and journals efficiently.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Expense Tracking" bordered={false} hoverable>
            <DollarCircleOutlined
              style={{ fontSize: '24px', color: '#1890ff' }}
            />
            <Paragraph>Track and approve your expenses seamlessly.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Invoice Management" bordered={false} hoverable>
            <FileTextOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Paragraph>Create, manage, and track your invoices.</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="AI-driven Financial Insights" bordered={false} hoverable>
            <BarChartOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Paragraph>
              Get insights and recommendations powered by AI.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Bank Reconciliation" bordered={false} hoverable>
            <BankOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
            <Paragraph>
              Reconcile your bank transactions automatically.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Title level={3}>AI-driven Insights</Title>
      <Row gutter={[16, 16]}>
        {userData?.financialInsights?.map(insight => (
          <Col key={insight.id} xs={24} sm={12} md={8}>
            <Card title={insight.insightType} bordered={false}>
              <Text>{insight.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3}>Expenses</Title>
      <Row gutter={[16, 16]}>
        {userData?.expenses?.map(expense => (
          <Col key={expense.id} xs={24} sm={12} md={8}>
            <Card title={`Category: ${expense.category}`} bordered={false}>
              <Text>Amount: ${expense.amount?.toString()}</Text>
              <br />
              <Text>Date: {dayjs(expense.date).format('YYYY-MM-DD')}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3}>Invoices</Title>
      <Row gutter={[16, 16]}>
        {userData?.invoices?.map(invoice => (
          <Col key={invoice.id} xs={24} sm={12} md={8}>
            <Card title={`Invoice #${invoice.id}`} bordered={false}>
              <Text>Amount: ${invoice.amount?.toString()}</Text>
              <br />
              <Text>
                Due Date: {dayjs(invoice.dueDate).format('YYYY-MM-DD')}
              </Text>
              <br />
              <Text>Status: {invoice.status}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3}>Bank Reconciliations</Title>
      <Row gutter={[16, 16]}>
        {userData?.bankReconciliations?.map(reconciliation => (
          <Col key={reconciliation.id} xs={24} sm={12} md={8}>
            <Card
              title={`Bank Statement #${reconciliation.bankStatementId}`}
              bordered={false}
            >
              <Text>
                Reconciled Amount: $
                {reconciliation.reconciledAmount?.toString()}
              </Text>
              <br />
              <Text>
                Date: {dayjs(reconciliation.date).format('YYYY-MM-DD')}
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}
