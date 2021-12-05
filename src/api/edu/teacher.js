import request from '@/utils/request'

export default{
  getteacherlist(page,limit,teacherQuery) {
    return request({
      url:  `/eduservice/edu-teacher/pageTeacherCondition/${page}/${limit}`,
      method: 'post',
      data:teacherQuery
    })
  }

}
