import * as Yup from 'yup';

const TaskSchema = Yup.object().shape({
    title: Yup.string().max(250,'Task name is too long').required('Required'),
    start:Yup.string().required('Required'),
    end:Yup.string().required('Required'),
    priority:Yup.string(['low' | 'medium' | 'high']).required('Required'),
    data:Yup.string().required('Required'),
    category:Yup.string(['starter' | 'pro' | 'bisness']).required('Required'),    
});

export default TaskSchema;
