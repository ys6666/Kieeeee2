/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PLANT_BEAN_SHARECODES(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  '2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y'
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y',
'2r4w5rbpkr37y3jxlqzgklplxu@bqkpqv55up6rq4geo7aoungcli@ztb6mfc2jmvmkz3dkkrn3abo2y@2jkjc3yoxm4kgz3dkkrn3abo2@rj7s6mzlk7uoh5pqdzzifhztonyqr3w5c6k2uyq@x5sfwpysuh4vmz3dkkrn3abo2y@u3ezx7k5nxfvkz3dkkrn3abo2y@lqd5nwmgf45p7vxebh33xr2joa@2vpwhrn5yawtqz3dkkrn3abo2y@itplnhngh2a7fl34ynvjpiws6zgp2oli7lcfqwy@x5sfwpysuh4vmz3dkkrn3abo2y'
]
// 判断github action里面是否有东东萌宠互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}
