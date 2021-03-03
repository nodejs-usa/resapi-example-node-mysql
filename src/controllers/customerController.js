const controller = { };

controller.list = (req, res) => {
    req.getConnection((err, conn) => {    
        conn.query('SELECT * FROM customer', (err, customers) =>{
                if (err) {
                    res.json({ error: err })
                }
                // console.log(customers);
                // res.send('hello');
                res.render('customers', {
                    data: customers
                });
            })
        });
};

controller.save = ( req, res ) => {
    const data = req.body

    req.getConnection((err, conn) => {    
        conn.query('INSERT INTO customer set ?', [data], (err, customers) =>{
                // console.log(customers);
                res.redirect('/');
            });
        }); 
    
    //console.log( req.body );
    // es.send('wors');
 };

 controller.edit = ( req, res ) => {
    const { id } = req.params;
   req.getConnection((err, conn) => {  
       conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) =>{
        console.log('EDIT');  
        console.log(customer[0])   
        res.render('customer_edit', {
               data: customer[0]
           });
       }); 
   });
};

controller.update = ( req, res ) => {
   const { id } = req.params;
   const newCustomer = req.body;
   req.getConnection((err, conn) => {  
       conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer,id], (err, customer) =>{
        res.redirect('/');
       }); 
   });
};

 controller.delete = ( req, res ) => {
     const { id } = req.params;
    req.getConnection((err, conn) => {  
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/');
        }); 
    });
    
 };

module.exports = controller