## 源代码
```js
modalRules: {
        // xuhao: [{ required: true, message: '序号不能为空', trigger: 'blur' }], // 序号
        fileName: [
          { required: true, message: '文件名称不能为空', trigger: 'blur' },
          {
            required: true,
            trigger: 'blur,change',
            validator: (rule, value, callback) => { // 名字不能超过50
              if (value.length > 50) {
                return callback(new Error('文件名称长度不能超过50'))
              } else {
                callback()
              }
            }
          },
        ], // 文件名称
        // uploadDate: [{ required: true, message: '上传日期不能为空', trigger: 'blur' }], // 上传日期
        // remarks: [{ required: true, message: '备注不能为空', trigger: 'blur' }], // 备注
        // operation: [{ required: true, message: '操作不能为空', trigger: 'blur' }], // 操作
      }
```