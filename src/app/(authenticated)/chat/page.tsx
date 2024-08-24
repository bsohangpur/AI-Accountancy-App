'use client'

import { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Input,
  Button,
  List,
  Avatar,
  Upload,
  message,
  Row,
  Col,
  Badge,
} from 'antd'
import { UploadOutlined, SendOutlined, FileOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ChatPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [message, setMessage] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const {
    data: chats,
    isLoading,
    refetch,
  } = Api.chat.findMany.useQuery({ include: { user: true } })
  const { mutateAsync: sendMessage } = Api.chat.create.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleSendMessage = async () => {
    if (message.trim() === '' && !file) {
      enqueueSnackbar('Please enter a message or select a file to send', {
        variant: 'error',
      })
      return
    }

    let fileUrl = ''
    if (file) {
      const uploadResponse = await upload({ file })
      fileUrl = uploadResponse.url
    }

    await sendMessage({
      data: {
        message,
        userId: user.id,
        ...(fileUrl && {
          document: {
            create: { url: fileUrl, name: file.name, userId: user.id },
          },
        }),
      },
    })

    setMessage('')
    setFile(null)
    refetch()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Communication Hub</Title>
      <Text>
        Engage in real-time conversations and share documents seamlessly.
      </Text>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <List
            loading={isLoading}
            itemLayout="horizontal"
            dataSource={chats}
            renderItem={chat => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={chat.user?.pictureUrl} />}
                  title={<Text strong>{chat.user?.name}</Text>}
                  description={
                    <>
                      <Text>{chat.message}</Text>
                      {chat.document && (
                        <a
                          href={chat.document.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileOutlined style={{ marginLeft: '10px' }} />
                          {chat.document.name}
                        </a>
                      )}
                      <Text type="secondary" style={{ float: 'right' }}>
                        {dayjs(chat.timestamp).format('YYYY-MM-DD HH:mm')}
                      </Text>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={18}>
          <Input.TextArea
            rows={2}
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
        </Col>
        <Col span={4}>
          <Upload
            beforeUpload={file => {
              setFile(file)
              return false
            }}
            fileList={file ? [file] : []}
          >
            <Button icon={<UploadOutlined />}>Attach File</Button>
          </Upload>
        </Col>
        <Col span={2}>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Col>
      </Row>
    </PageLayout>
  )
}
