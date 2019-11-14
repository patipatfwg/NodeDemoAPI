
function checkProfile(empProfile){
    empProfile_status = empProfile['status'];
        if(Object.keys(empProfile).length > 0 ){
            if(empProfile_status ==='none'){
                var status = 200; 
                var message = 'กรุณาตอบรับ เพื่อเข้าร่วมกิจกรรม';
                var messagelog = 'Login to Confirm Event';
            }else if(empProfile_status ==='no'){
                var status = 200; 
                var message = 'ขอต้อนรับเข้าสู่ระบบ';
                var messagelog = 'Login to Ranking';
            }else if(empProfile_status ==='yes'){
                var status = 200; 
                var message = 'ขอต้อนรับเข้าสู่ระบบ';
                var messagelog = 'Login Dashboard';
            }
        }else if(Object.keys(empProfile).length === 0){
            var status = 404;
            var message = 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'; 
            var messagelog = 'Login Wrong';
        }
        return 'Hi'
}

module.exports = checkProfile;