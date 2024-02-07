const Message = ({ msgNum, name, msgTxt }) => (
    <tr>
        <td>{msgNum + 1}</td>
        <td>{name}</td>
        <td>{msgTxt}</td>
    </tr>
);

export default Message;