const Message = ({ id, name, message }) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{message}</td>
    </tr>
);

export default Message;