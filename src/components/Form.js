const Form = () => {
  return (
    <form
      action="mailto:harry.sandersiv@yahoo.com"
      method="post"
      encType="text/plain"
    >
      <table>
        <tr>
          <td>
            <label htmlFor="name">Your Name:</label>
          </td>
          <td>
            <input type="text" name="yourName" required />{' '}
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="email">E-mail:</label>
          </td>
          <td>
            <input type="email" name="yourEmail" required />
          </td>
        </tr>
        <tr>
          <td>
            <label htmlFor="textarea">Message:</label>
          </td>
          <td>
            <textarea name="yourMessage" cols={21} rows={4} />
          </td>
        </tr>
      </table>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Form;
