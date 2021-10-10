import Edit from "./Edit"
import Delete from "./Delete"
const Table = () => {

    return(
        <div>
             <table className="content-table">
                    <thead>
                    <tr>
                      <th>Product Code</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
                      <td>1</td>
                      <td>Kshitzz moktan</td>
                      <td>1212</td>
                      <td className="btn">
                      <Edit />
                      <Delete />
                      </td>
                 
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>Table Data</td>
                      <td>Table Data</td>
                      <td className="btn">
                      <Edit />
                      <Delete />
                      </td>
                   
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>Table Data</td>
                      <td>Table Data</td>
                      <td className="btn">
                      <Edit />
                      <Delete />
                      </td>
                  
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>Table Data</td>
                      <td>Table Data</td>
                      <td className="btn">
                      <Edit />
                      <Delete />
                      </td>
                    
                    </tr>
                  
                    </tbody>
                  </table>
                
        </div>
    )
}

export default Table;