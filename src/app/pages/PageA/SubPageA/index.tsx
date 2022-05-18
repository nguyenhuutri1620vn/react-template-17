import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { injectReducer, injectSaga } from 'redux-injectors';
import { compose } from 'redux';

import { UtilInject } from 'app/utils';

// import { Switch, Route } from 'react-router-dom';

import reducerSubPageA from './reducer';
import sagaSubPageA from './saga';
import axios from 'axios';
import _ from "lodash";
import { Button, Table, Tag } from 'antd';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';

export interface ISubPageAProps { }

const SubPageA: FC<ISubPageAProps> = ({ }) => {
  const [product, setProduct] = useState<any[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const onSelectChange = (selectedRowKeys: string[]) => {
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection: any = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changaleRowKeys: string[]) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changaleRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changaleRowKeys: string[]) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changaleRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get("/product?q=rose&limit=25&page=1")
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        } else {
          console.log("Connect fail");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    return () => { };
  }, []);

  const data = useMemo(() => {
    const data = [];
    for (let i = 0; i < product.length; i++) {
      data.push({
        key: i,
        id: product[i].id,
        name: product[i].name,
        brand: product[i].brand,
        ingredient_list: product[i].ingredient_list,
      });
    }
    return data;
  }, [product]);

  const brand = useMemo(() => {
    const brand = [];
    for (let i = 0; i < product.length; i++) {
      brand.push(product[i].brand);
    }
    return _.uniq(brand);
  }, [product]);

  const dataBrand = useMemo(() => {
    const dataBrand = [];
    for (let i = 0; i < brand.length; i++) {
      dataBrand.push({
        text: brand[i],
        value: brand[i],
      });
    }
    return _.uniq(dataBrand);
  }, [brand]);

  const conlumn = [
    {
      key: "name",
      title: "Name",
      width: 200,
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      key: "brand",
      title: "Brand",
      with: 200,
      dataIndex: "brand",
      filters: dataBrand,
      onFilter: (value: any, record: any) => record.brand.indexOf(value) === 0,
    },
    {
      title: "Ingredient list",
      key: "tags",
      with: 600,
      dataIndex: "ingredient_list",
      sorter: (a: any, b: any) => a.ingredient_list.length - b.ingredient_list.length,
      render: (tags: any) => (
        <>
          <div key={tags} className="ingredient-list-table">
            {tags.toString()}
          </div>
        </>
      ),
    },

    {
      title: "Quality",
      key: "quantity",
      with: 100,
      dataIndex: "ingredient_list",
      sorter: (a: any, b: any) => a.ingredient_list.length - b.ingredient_list.length,
      render: (tags: any) => (
        <>
          {tags.length < 30 ? (
            <Tag key={tags} color="green">
              Low
            </Tag>
          ) : tags.length < 50 ? (
            <Tag key={tags} color="geekblue">
              Medium
            </Tag>
          ) : (
            <Tag key={tags} color="volcano">
              High
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      with: 100,
      key: "delete",
      render: (id: number) => (
        <>
          <Button type="primary" onClick={(value) => onDeleteProduct(value, id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const onChangeSorter = (pagination: number, filters: any, sorter: string, extra: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onDeleteProduct = useCallback(
    (value, id) => {
      setProduct(
        product.filter((item) => {
          return item.id !== id;
        })
      );
    },
    [product]
  );
  return (
    <div className="site-card-wrapper">
      <Table
        rowSelection={rowSelection}
        columns={conlumn}
        dataSource={data}
        className="table-product"
        // onChange={onChangeSorter}
        loading={loading ? true : false}
      ></Table>
    </div>
  );
};

export default UtilInject.combineInjectionComponent(
  [
    compose(
      injectReducer({ key: 'reducerSubPageA', reducer: reducerSubPageA }),
      injectSaga({ key: 'sagaSubPageA', saga: sagaSubPageA })
    ),
  ],
  SubPageA
) as FC<ISubPageAProps>;
