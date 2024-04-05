const express = require('express')
const { query } = require('../helpers/db.js')

const userRouter = express.Router()


userRouter.post("/reset",async(req,res) => {
    app.post('/reset-password', async (req, res) => {
        const { email, newPassword } = req.body;
    
        try {
            // 查询用户是否存在
            const userQuery = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
            const user = userQuery.rows[0];
    
            if (!user) {
                return res.status(404).json({ error: '用户不存在' });
            }
    
            // 更新用户密码
            await pool.query('UPDATE users SET password = $1 WHERE id = $2', [newPassword, user.id]);
    
            return res.status(200).json({ message: '密码重置成功' });
        } catch (error) {
            console.error('数据库错误:', error.message);
            return res.status(500).json({ error: '服务器内部错误' });
        }
    })
})
 

userRouter.post("/login",async(req,res) => {
    try{
        const sql ="select * from users where username=$1"
        const result = await query(sql,[req.body.username])
        if(result.rowCount === 1){
            if (result. rows[0].password === req.body.password) {
                res. status (200).json (result. rows [0])
                } else {
                res.statusMessage = 'Invalidnlogin'
                res.status(401). json({error:'Invalid login'})
                }
             }else{
                res.statusMessage = 'Invalid login'
                res.status(401).json({error:'Invalid login'})
                }             
            }catch (error) {
                res.statusMessage = error
                res.status(500).json({error: error})}
        })
 




module.exports = {
    userRouter
  }