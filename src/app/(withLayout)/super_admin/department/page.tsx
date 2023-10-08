"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import ActionBar from "@/components/ui/ActionBar";
import BreadCrumb from "@/components/ui/BreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { Button, Input, Modal, message } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounced } from "@/redux/hooks";
import {
  useDeleteDepartmentMutation,
  useGetDepartmentsQuery,
} from "@/redux/api/departmentApi";
import dayjs from "dayjs";

const ManageDepartment = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteDepartment] = useDeleteDepartmentMutation();
  const [deletingId, setDeletingId] = useState(undefined);
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useGetDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;

  const deleteHandler = async () => {
    message.loading({
      key: "deleteDepartment",
      content: "Deleting...",
    });
    try {
      await deleteDepartment(deletingId);
      message.success({
        key: "deleteDepartment",
        content: "Department Deleted successfully",
      });
      setDeletingId(undefined);
    } catch (err: any) {
      message.error({
        key: "deleteDepartment",
        content: err.message,
      });
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/super_admin/department/edit/${data?.id}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => setDeletingId(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <BreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          value={searchTerm}
          style={{ width: "20%" }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={departments}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <Modal
        title="Delete"
        maskStyle={{
          backdropFilter: "blur(10px)",
        }}
        open={deletingId}
        onOk={() => deleteHandler()}
        onCancel={() => setDeletingId(undefined)}
      >
        <p style={{ color: "red" }}>Are you sure you want to delete this</p>
      </Modal>
    </div>
  );
};

export default ManageDepartment;
