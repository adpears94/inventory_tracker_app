import Table from 'react-bootstrap/Table';

export function ItemTable({items}) {
  return (
    <Table striped bordered hover size="sm">
        
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Sub Category</th>
          <th>Checked Out</th>
        </tr>
      </thead>      
      <tbody>
        {items.map((item) => {
            return (                
            <tr key = {item.id}>
                {console.log(item)}
                <td>{item.id}</td>
                <td>{item.item_name}</td>
                <td>{item.item_description}</td>
                <td>{item.category_id}</td>
                <td>{item.sub_category_id}</td>
                <td>{item.checked_out.toString()}</td>
            </tr>
        )})}        
      </tbody>
    </Table>
  );
}

