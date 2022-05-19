import { db } from '../demo-db-connection'

export const create = (order: any, callback: Function) => {
  const queryString =
    'INSERT INTO Product (name,description,instock_quantity,price) VALUES (?, ?, ?, ?)'

  db.query(
    queryString,
    [order.name, order.description, order.instock_quantity, order.price],
    (err: any, result: any) => {
      if (err) {
        callback(err)
      } else {
        const insertId = result.insertId
        callback(null, insertId)
      }
    },
  )
}

export const findOne = (orderId: number, callback: Function) => {
  const queryString = `
      SELECT * from Product where id = ?`

  db.query(queryString, orderId, (err: any, result: any) => {
    if (err) {
      callback(err)
    } else {
      const row = result[0]
      callback(null, row)
    }
  })
}

export const findAll = (callback: Function) => {
  const queryString = `
      SELECT * from Product`

  db.query(queryString, (err: any, result: any) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
}

export const update = (order: any, orderId: number, callback: Function) => {
  const queryString = `UPDATE Product SET name=?,description=?,instock_quantity=?,price=? WHERE id=?`

  db.query(
    queryString,
    [
      order.name,
      order.description,
      order.instock_quantity,
      order.price,
      orderId,
    ],
    (err: any, result: any) => {
      if (err) {
        callback(err)
      } else {
        callback(result)
      }
    },
  )
}

export const deleteOne = (deleteId: number, callback: Function) => {
  // var dataFound: any = []
  // const queryString = `SELECT id from Product where id = ?`
  // dataFound = db.query(queryString, deleteId, (err: any, result: any) => {
  //   if (err) {
  //     callback(err)
  //   } else {
  //     //console.log("das",dataFound);
  //     callback(null, result)
  //   }
  // })
  // // console.log("ddasdsdas",dataFound);
  // // if (dataFound.length != 0) {
    const query = `
    DELETE from Product where id=?`

    db.query(query, deleteId, (err: any, result: any) => {
      if (err) {
        callback(err)
       } 
      else {
        
        callback(null, (result))
      }
      
     //return dataFound._results.message;
    })
   
    

   
    
  // }else{
  //   return dataFound.push('Id not found')
  // }
}
