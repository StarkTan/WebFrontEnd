import Mock from 'mockjs'
 
// const data={ 
//     "id":"@guid",
//     "name":"@cname",
// };

const table_data = {
    "tableData": [
        {
            "date": "2016-05-03",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-02",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-04",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-01",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-08",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-06",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        },
        {
            "date": "2016-05-07",
            "name": "王小虎",
            "address": "上海市普陀区金沙江路 1518 弄"
        }
    ],
    "multipleSelection": []
}

 
Mock.mock('/api/data', 'get', table_data)
 
export default Mock;