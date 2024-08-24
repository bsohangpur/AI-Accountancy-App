'use client'

import { useState, useEffect } from 'react'
import { Typography, Upload, Button, List, Spin, Row, Col, Space } from 'antd'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function AIRAGContextPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: files,
    isLoading,
    refetch,
  } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { mutateAsync: deleteFile } = Api.ragVector.delete.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      await loadFile({ url })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteFile({ where: { id } })
      enqueueSnackbar('File deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete file', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>AI RAG Context Management</Title>
          <Text>
            Upload and manage files to enhance the AI's understanding and
            capabilities.
          </Text>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          <Upload
            customRequest={({ file }) => handleUpload(file as File)}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 20 }}>
        <Col span={24}>
          {isLoading ? (
            <Spin />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={files}
              renderItem={file => (
                <List.Item
                  actions={[
                    <Button
                      icon={<DeleteOutlined />}
                      onClick={() => handleDelete(file.id)}
                      danger
                    />,
                  ]}
                >
                  <List.Item.Meta
                    title={file.key}
                    description={`Uploaded on ${dayjs(file.dateCreated).format('YYYY-MM-DD HH:mm:ss')}`}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
