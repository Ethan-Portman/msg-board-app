const Message = ({ msgNum, name, msgText }) => (
    <tr>
        <td>{msgNum + 1}</td>
        <td>{name}</td>
        <td>{msgText}</td>
    </tr>
);

export default Message;