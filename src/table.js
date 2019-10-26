import React, { Fragment } from 'react';
import { Table } from 'antd';

const { Column } = Table
 class Tablelist extends React.Component{
     constructor(props){
        super(props)
        this.state = {
            rows: [],
            columns: [
                {
                    title: `Bulk Id`,
                    dataIndex: `indent_number`
                },
                {
                    title: `Req.PD`,
                    dataIndex: `placement_date`
                },
                {
                    title: `Age`,
                    dataIndex: `placement_tag`
                },
                {
                    title: `From`,
                    dataIndex: `source_depository_name`
                
                },
                {
                    title: `To`,
                    dataIndex: `destination_depository_name`
                
                },
                {
                    title: `Transporter`,
                    dataIndex: `transporter_name`
                
                },
                {
                    title: `Product`,
                    dataIndex: `skus`
                
                },
                {
                    title: `Total Qty`,
                    dataIndex: `total_quantity`
                
                },
                {
                    title: `Pend.(RA) Qty`,
                    dataIndex: `reassigned_quantity`
                
                },
                {
                    title: `Status`,
                    dataIndex: `status`
                
                }
            ]
        }
     }
     
     componentDidMount(){
         let loginDetails = localStorage.getItem(`loginDetails`)
        if(loginDetails) {
            loginDetails = JSON.parse(loginDetails)
        }
        const { sessionKey } = loginDetails
         fetch('https://api-preprod.blackbucklabs.com/ims/bulk-indent/livefeed/v1/filter',
         {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Token :${sessionKey}`,
            },
 
         }).then(response => {
                    response.json().then(res => {
                        const newRows = res.result.map((item, index) => {
                            item.key = `${index}`
                            return item
                        })
                        this.setState({
                            rows: newRows
                        })
                    })
                   }, err => {
                       console.log(err)
                   })
     }
     
     render(){
         const { rows } = this.state
         return(
             <div>
                {rows.length > 0 && <Table columns={this.state.columns} dataSource={rows} />}
             </div>
         )
     }
 }
 export default Tablelist