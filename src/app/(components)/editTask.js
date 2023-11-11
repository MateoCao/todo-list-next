import OptionsRecurrence from './optionsRecurrence'
import Tag from './tag'
import TaskRecurrence from './taskRecurrence'
import Tags from './tags'
import TitleEditable from './titleEditable'
import FooterEditTask from './footerEditTask'

export default function EditTask ({ bg, visible }) {  
  const bgDefault = "bg-slate-200"
  const isVisible = visible || true

  return (
        <section id='editTask' className={`${bg || bgDefault} w-1/3 h-5/6 drop-shadow-lg flex flex-wrap rounded-xl flex-col justify-around ${isVisible ? 'hidden' : ''}`}>
            <TitleEditable />
            <Tags>
                <Tag tagColor={'bg-lime-600'}> etiqueta I </Tag>
                <Tag> etiqueta II </Tag>
                <Tag> etiqueta III </Tag>
            </Tags>
            <TaskRecurrence />
            <OptionsRecurrence />
            <FooterEditTask />
        </section>
  )
}
