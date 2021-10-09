import React, { useEffect, useState } from 'react'
import {
    Form,
    Input,

    Radio,

    DatePicker,
    InputNumber,

    Switch,
} from 'antd';
import { Fragment } from 'react';
import { useFormik } from 'formik';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { capNhatPhimUploadAction, layThongTinPhimAction, themPhimUploadHinhAction } from '../../../Redux/actions/getMovieAction';
import { GROUPID } from '../../../Util/Settings/config';



export default function Edit(props) {
    const dispatch = useDispatch()
    const { MovieEdit } = useSelector(state => state.MovieReducer)
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc, setImgSrc] = useState('')
    
    useEffect(() => {
        let { id } = props.match.params;

        dispatch(layThongTinPhimAction(id))
    }, [])
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: MovieEdit.maPhim,
            dangChieu: MovieEdit.dangChieu,
            sapChieu: MovieEdit.sapChieu,
            hot: MovieEdit.hot,
            danhGia: MovieEdit.danhGia,
            tenPhim: MovieEdit.tenPhim,
            trailer: MovieEdit.trailer,
            moTa: MovieEdit.moTa,
            maNhom: GROUPID,
            ngayKhoiChieu: MovieEdit.ngayKhoiChieu,
            hinhAnh: null
        },
        onSubmit: (values) => {

            console.log('values', values)
            values.maNhom = GROUPID;
            let formData = new FormData();
            for (let key in values) {

                if (key !== 'hinhAnh') {

                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {

                        formData.append('File', values.hinhAnh, values.hinhAnh.name)
                    }
                }
            }
            dispatch(capNhatPhimUploadAction(formData))
        }
    });
    const handleChangeDatePicker = (value) => {

        let ngayKhoiChieu = moment(value);
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    const handleChangeSwitch = (name) => {
        return (value) => {

            formik.setFieldValue(name, value)
        }
    }
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    const handleChangeFile = async (e) => {
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {

            await formik.setFieldValue('hinhAnh', file);

            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {

                setImgSrc(e.target.result);
            }

        }


    }
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Fragment>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >

                <h1 className="text-2xl font-bold">Cập nhật phim</h1>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                </Form.Item>


                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
                </Form.Item>

                <Form.Item label="Hot" valuePropName="checked">
                    <Switch name="hot" onChange={handleChangeSwitch('hot')} checked={formik.values.hot} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')} checked={formik.values.dangChieu} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')} checked={formik.values.sapChieu} />
                </Form.Item>


                <Form.Item label="Đánh giá">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} value={formik.values.danhGia} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpg, image/jpeg" /><br />
                    <img width={150} height={150} src={imgSrc === '' ? MovieEdit.hinhAnh : imgSrc} alt="" />
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' className="bg-blue-500 rounded-xl text-white p-2">Cập nhật</button>
                </Form.Item>
            </Form>
        </Fragment>


    )
}
