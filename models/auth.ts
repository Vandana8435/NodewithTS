import { db } from '../demo-db-connection'


export const create = (user: any, callback: Function) => {
    let check = user.phone_no;
    let res:any;
    const query = `select *from user_master where phone_no=?`;
    db.query(query, check, (err: any, result: any) => {
        if (err) {
          callback(err)
        } else {
          res = result[0]
          callback(null, res)
          console.log("sdfsdf",res);
          
        }
      })
   
   if(!res){
    
    const queryString =
      'INSERT INTO user_master (first_name,last_name,phone_no,password,confirm_password,address) VALUES (?, ?, ?, ?,?,?)'
    db.query(
      queryString,
      [user.first_name, user.last_name, user.phone_no, user.password ,user.confirm_passowrd, user.address],
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
  }
  