const Message = ({ msgNum, name, msgTxt }) => (
    <tr>
        <td>{msgNum}</td>
        <td>{name}</td>
        <td>{msgTxt}</td>
    </tr>
);

export default Message;