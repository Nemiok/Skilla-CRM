import React from 'react'
import { ICallsResultField } from '../../types/calls'
import TableHeadItem from './table-head';
import TableRow from './table-row';
import './styles.css'

interface ITableProps {
  theadData: string[],
  tbodyData: ICallsResultField[],
  customClass?: string
}

const Table = ({ customClass, tbodyData, theadData }: ITableProps) => {
  return (
    <table style={{
      display: 'table',
      borderCollapse: 'separate',
      width: '100%'
    }} cellSpacing={0} className={customClass}>
      <thead>
        <tr className='thead__table-row'>
          {theadData.map((h) => {
            return <TableHeadItem key={h} item={h} />;
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return <TableRow key={item.id} data={item} />;
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Table)