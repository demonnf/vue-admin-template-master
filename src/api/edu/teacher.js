import request from '@/utils/request'

export default{
  getteacherlist(page,limit,teacherQuery) {
    return request({
      url:  `/eduservice/edu-teacher/pageTeacherCondition/${page}/${limit}`,
      method: 'post',
      data:teacherQuery
    })
  },
  deleteTeacher(id){
    return request({
      url:  `/eduservice/edu-teacher/${id}`,
      method: 'delete',
    
    })
  },
  addTeacher(teacher){
    return request({
      url:  `/eduservice/edu-teacher/addteacher`,
      method: 'post',
      data:teacher
    })
  },
  getTeacherInfo(id){
    return request({
      url:  `/eduservice/edu-teacher/findteacher/${id}`,
      method: 'get',
    })
  },
  updateTeacher(teacher){
    return request({
      url:  `/eduservice/edu-teacher/updateteacher`,
      method: 'post',
      data:teacher
    })
  },
  uploadFiles(file){
    return request({
      url:  `/OssService/uploadfile`,
      method: 'post',
      data:file
  })
  }
}
