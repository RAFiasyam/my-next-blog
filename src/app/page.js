'use client';

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, createPost, updatePost, deletePost } from "../utils/api";
import { Card, Button, Modal, Form, Input, Spin, message } from "antd";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [form] = Form.useForm();

  const createMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts"], (oldData) => [...oldData, newPost]);
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(["posts"], (oldData) =>
        oldData.map((post) => post.id === updatedPost.id ? updatedPost : post)
      );
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: (id) => {
      queryClient.setQueryData(["posts"], (oldData) =>
        oldData.filter((post) => post.id !== id)
      );
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleEdit = (post) => {
    setEditPost(post);
    form.setFieldsValue(post);
    setIsModalOpen(true);
  };

  const handleSubmit = async (values) => {
    try {
      const newPost = {
        user_id: 7740615,
        title: values.title,
        body: values.body,
      };
      const response = await createPost(newPost);
      console.log("Post success create:", response);

      message.success("Success to create!", 3);
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Post failed to create:", error);

      const errorMessage = error.message ? error.message.substring(0, 255) : "Failed to create!";

      message.error(errorMessage);
    }
  };

  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });



  return (
    <div className="container mx-auto p-4 ">
      <Button type="primary" onClick={() => { setIsModalOpen(true); setEditPost(null); }}>
        Create New Post
      </Button>
      <div className="flex flex-col pt-6">
        <h1 className="text-3xl font-semibold">Lists Blog</h1>

        {isLoading && <Spin />}
        {error && <p>Error loading posts: {error.message}</p>}
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Card key={post.id} title={post.title} className="my-2">
              <div className="flex flex-row justify-between">
                <Link href={`/blog/${post.id}`} >Read more</Link>
                <div className="">
                  <Button type="primary" onClick={() => handleEdit(post)} style={{ marginRight: 8 }}>
                    Edit
                  </Button>
                  <Button type="danger" onClick={() => deleteMutation.mutate(post.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No posts available</p>
        )
        }

        {/* Modal */}
        <Modal
          title={editPost ? "Edit Post" : "Create Post"}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={null}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item name="title" label="Title" rules={[{ required: true, message: "Please enter a title!" }]}>
              <Input />
            </Form.Item>
            <Form.Item name="body" label="Body" rules={[{ required: true, message: "Please enter content!" }]}>
              <Input.TextArea />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              {editPost ? "Update" : "Create"}
            </Button>
          </Form>
        </Modal>
      </div>
    </div >
  )
}