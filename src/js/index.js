import doT from 'dot'
import projectData from './project_data'


const tmplText = document.querySelector('#project_tmpl').innerHTML
const tmplFun = doT.template(tmplText)
const resultText = tmplFun(projectData)
document.querySelector('.Projects').innerHTML = resultText
