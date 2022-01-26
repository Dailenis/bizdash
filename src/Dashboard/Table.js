import React from "react";
import styled from 'styled-components'
import {tableRows, tableColums} from './Data'
import { AutoSizer, Column, Table } from 'react-virtualized'
import 'react-virtualized/styles.css'
import {Card} from './Card';
import {midGrey} from './GlobalStyle'

const ROW_HEIGHT = 48;

const TableCell = styled.div`
 display: flex;
 color: black
 ${({align}) => align === 'right' && `flex-direction: row-reverse`}
`

class ReactVirtualizedTable extends React.Component {
  cellRenderer = ({cellData, columnIndex}) => {
    const {columns} = this.props;
    return (
      <TableCell align={columns[columnIndex].numeric ? 'right' : 'left'}>
        {cellData}
      </TableCell>
   ) 
  }
  headerRenderer = ({ label, columnIndex}) => {
    const {columns} = this.props;
    return (
      <TableCell header align={columns[columnIndex].numeric ? 'right' : 'left'}>
        <span> {label} </span>
      </TableCell>
   ) 
  } 
  render(){
    const {columns} = this.props  
    return (
        <AutoSizer>
           {({height, width}) => (
                <Table 
                height={height}
                width={width}
                rowHeight={ROW_HEIGHT}
                headerHeight={ROW_HEIGHT}
                rowCount={tableRows.length}
                rowGetter={({index}) => tableRows[index]}
                rowStyle={{
                  borderBotton: `1px solid ${midGrey}`,
                  boxSizing: 'border-box'
                }}
                gridStyle={{outline: 0}}
                >
                    {
                    columns.map(({dataKey, ...other}, index) => {
                        <Column 
                        key={dataKey} 
                        dataKey={dataKey}
                        headerRenderer={headerProps => 
                          this.headerRenderer=({
                            ...headerProps,
                            columnIndex: index
                          })
                        }
                        cellRenderer={this.cellRenderer}
                         {...other} />
                     })}
                </Table>
            )}
        </AutoSizer>
    )
  }  
}

export function VirtualizedTable(){
  return( 
      <Card height={400}> 
        <ReactVirtualizedTable  columns={tableColums}/>
      </Card>
    )
}