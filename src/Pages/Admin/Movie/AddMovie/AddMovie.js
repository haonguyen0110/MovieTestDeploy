import React, { useState } from 'react'
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
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../../Redux/actions/getMovieAction';
import { GROUPID } from '../../../../Util/Settings/config';


export default function AddMovie(props) {
    const dispatch= useDispatch()
    const [componentSize, setComponentSize] = useState('default');
    const [imgSrc,setImgSrc] = useState('')
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},
            
        },
        onSubmit: (values) => {

            console.log('values', values)
            values.maNhom = GROUPID;
            let formData = new FormData();
            for (let key in values){

                if(key !=='hinhAnh'){
                    
                    formData.append(key,values[key]);
                }else{
                    formData.append('File',values.hinhAnh,values.hinhAnh.name)
                }
            }
            dispatch (themPhimUploadHinhAction(formData))
        }
    });
    const handleChangeDatePicker = (value) => {

        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }
    const handleChangeSwitch = (name) => {
        return (value) => {

            formik.setFieldValue(name, value)
        }
    }
    const handleChangeInputNumber =(name)=>{
        return (value) =>{
            formik.setFieldValue(name,value)
        }
    }
    const handleChangeFile = (e)=>{
        let file = e.target.files[0]
      
        if(file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png'){
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = (e)=>{
                
                setImgSrc(e.target.result)
            }
            formik.setFieldValue('hinhAnh', file);
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

                <h1 className="text-2xl font-bold">Thêm phim</h1>
                <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Tên phim">
                    <Input name='tenPhim' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Trailer">
                    <Input name='trailer' onChange={formik.handleChange} />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <Input name='moTa' onChange={formik.handleChange} />
                </Form.Item>


                <Form.Item label="Ngày khởi chiếu">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
                </Form.Item>

                <Form.Item label="Hot" valuePropName="checked">
                    <Switch name="hot" onChange={handleChangeSwitch('hot')} />
                </Form.Item>
                <Form.Item label="Đang chiếu" valuePropName="checked">
                    <Switch name="dangChieu" onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>
                <Form.Item label="Sắp chiếu" valuePropName="checked">
                    <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>


                <Form.Item label="Đánh giá">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpg, image/jpeg" /><br/>
                    <img width={150} height={150} src={imgSrc} alt=""/>
                </Form.Item>
                <Form.Item label="Tác vụ">
                    <button type='submit' className="bg-blue-500 rounded-xl text-white p-2">Thêm phim</button>
                </Form.Item>
            </Form>
        </Fragment>


    )
}
