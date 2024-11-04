import SectionHeader from './SectionHeader';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiTruck } from 'react-icons/fi';
import { FaWarehouse, FaBroom } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';

const IndividualTasks = () => {
    const t = useTranslations("IndividualTasks");

    const tasks = [
        {
            id: 1,
            name: t("Transfer"),
            icon: <FiTruck className="text-4xl"/>,
            path: "/guest/tasks/moving"
        },
        {
            id: 2,
            name: t("Warehousing"),
            icon: <FaWarehouse className="text-4xl"/>,
            path: "/guest/tasks/warehousing"
        },
        {
            id: 3,
            name: t("Cleaning"),
            icon: <FaBroom className="text-4xl"/>,
            path: "/guest/tasks/cleaning"
        },
        {
            id: 4,
            name: t("EmptyCar"),
            icon: <BsTruck className="text-4xl"/>,
            path: "/guest/tasks/empty-car"
        }
    ];

    return (
        <section className='py-12'>
            <SectionHeader name={t("IndividualTasks")} />
            <div className="container">
                <p className='text-secondary text-xl text-center w-full mb-8'>{t("SubmitTaskAsIndividual")}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tasks.map(task => (
                        <Link 
                            key={task.id} 
                            href={task.path}
                            className="flex flex-col items-center justify-center p-6 bg-background border-2 border-primary rounded-xl hover:bg-primary/10 transition-all duration-300 group"
                        >
                            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                {task.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mt-4">{task.name}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default IndividualTasks
