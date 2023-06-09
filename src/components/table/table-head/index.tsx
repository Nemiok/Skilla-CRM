import React, { useState } from "react";
import './styles.css'
import CustomCheckbox from "../table-row/custom-checkbox";
import { selectAllCalls } from "../../../redux-store/reducers/calls-page-reducer/calls-reducer";
import { useAppDispatch } from "../../../redux-store/hooks";

interface ITableHeadItemProps {
  item: string
}

const TableHeadItem = ({ item }: ITableHeadItemProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useAppDispatch()


  const handleCheckboxChange = () => {
    dispatch(selectAllCalls({ status: !isChecked }))
    setIsChecked(!isChecked);
  };

  if (item === '') {
    return (
      <td className='absolute-positioned-head-item table-head-item' title={item}>
        <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      </td>
    )
  }

  return (
    <td className='table-head-item' title={item}>
      {item}
    </td>
  );
};

export default React.memo(TableHeadItem);